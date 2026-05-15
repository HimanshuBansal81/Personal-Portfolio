import type { Metadata } from "next";
import AboutPreview from "@/sections/AboutPreview";
import ContactCta from "@/sections/ContactCta";
import FeaturedProjects from "@/sections/FeaturedProjects";
import Head from "@/sections/Head";
import ServicesPreview from "@/sections/ServicesPreview";
import TechStack from "@/sections/TechStack";

const title = "Himanshu Bansal | .NET Backend & Full Stack Developer";
const description =
  "Software Developer building backend-heavy full-stack systems with .NET, SQL, React, cloud deployment, and practical system design.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
  },
  twitter: {
    title,
    description,
  },
};

export default function Home() {
  return (
    <>
      <Head />
      <AboutPreview />
      <TechStack />
      <FeaturedProjects limit={4} showCta />
      <ServicesPreview />
      <ContactCta />
    </>
  );
}
