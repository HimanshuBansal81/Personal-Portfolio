import AboutPreview from "@/sections/AboutPreview";
import ContactCta from "@/sections/ContactCta";
import FeaturedProjects from "@/sections/FeaturedProjects";
import Head from "@/sections/Head";
import ServicesPreview from "@/sections/ServicesPreview";

export default function Home() {
  return (
    <>
      <Head />
      <AboutPreview />
      <FeaturedProjects limit={3} showCta />
      <ServicesPreview />
      <ContactCta />
    </>
  );
}
