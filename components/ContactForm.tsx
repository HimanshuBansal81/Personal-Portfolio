"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  mobileNumber: string;
  message: string;
  company: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  mobileNumber: "",
  message: "",
  company: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        setErrorMessage(payload.error ?? "Failed to send message");
        return;
      }

      setSuccessMessage(payload.message ?? "Message sent successfully");
      setFormData(initialFormState);
    } catch (error) {
      console.error("Contact form submission error:", error);
      setErrorMessage("Failed to send message");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="theme-card rounded-[2rem] p-6 sm:p-8">
      <p className="theme-section-label">Send a message</p>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <input
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="hidden"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-zinc-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-sky-200/30 focus:bg-white/[0.05]"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-zinc-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-sky-200/30 focus:bg-white/[0.05]"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="mobileNumber" className="text-sm font-medium text-zinc-200">
            Mobile Number
          </label>
          <input
            id="mobileNumber"
            name="mobileNumber"
            type="tel"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-sky-200/30 focus:bg-white/[0.05]"
            placeholder="Optional"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-zinc-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition duration-300 placeholder:text-zinc-500 focus:border-sky-200/30 focus:bg-white/[0.05]"
            placeholder="Tell me a bit about the system, problem, or project."
          />
        </div>

        {errorMessage && (
          <p className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
            {errorMessage}
          </p>
        )}

        {successMessage && (
          <p className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
            {successMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="theme-button-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
