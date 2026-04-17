import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  mobileNumber?: string;
  message?: string;
  company?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTACT_TO_EMAIL = "himanshub49@gmail.com";
const CONTACT_FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

function isNonEmptyString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const mobileNumber = body.mobileNumber?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const company = body.company?.trim() ?? "";

    if (company) {
      return Response.json(
        { message: "Message sent successfully." },
        { status: 200 },
      );
    }

    if (
      !isNonEmptyString(name) ||
      !isNonEmptyString(email) ||
      !isNonEmptyString(message)
    ) {
      return Response.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${
          mobileNumber
            ? `<p><strong>Mobile Number:</strong> ${mobileNumber}</p>`
            : ""
        }
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend email error:", error);

      return Response.json(
        { error: "Failed to send message." },
        { status: 500 },
      );
    }

    return Response.json(
      { message: "Message sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      { error: "Failed to send message." },
      { status: 500 },
    );
  }
}
