import Experience from "@/components/Experience";
import Hero from "../components/Hero";
import Grid from "@/components/Grid";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Web Developer - Mickaël | Full-stack Web Development",
  description:
    "Portfolio of Mickaël, an expert full-stack web developer specializing in Next.js, React, and Python. Explore my front-end and back-end development services, including MySQL, Firebase, Django, and more. Discover my recent projects and web application solutions.",
  keywords: [
    "Next.js Web Developer",
    "Full-stack Developer",
    "React Developer",
    "Python Developer",
    "Django",
    "MySQL",
    "Firebase",
    "JavaScript",
    "Web Development",
    "Freelancer",
    "Mickaël Portfolio",
    "Web Application Development",
    "Front-end Development",
    "Back-end Development",
    "Custom Websites",
    "Mickaël Web Developer",
  ],
  authors: [{ name: "Mickaël", url: "https://carrotpixel.com" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Next.js Web Developer - Mickaël | Full-stack Web Development",
    description:
      "Discover my web development services using Next.js, Django, React, and Python. View my portfolio of custom websites, web applications, and recent projects.",
    url: "https://carrotpixel.com",
    siteName: "CarrotPixel",
    images: [
      {
        url: "https://carrotpixel.com/carrot.jpeg",
        width: 1200,
        height: 630,
        alt: "Portfolio cover image for Mickaël, web developer",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Web Developer - Mickaël | Full-stack & Freelance Developer",
    description:
      "Explore my portfolio, including full-stack web development services using Next.js, React, and Python.",
    images: ["https://carrotpixel.com/carrot.jpeg"],
  },
  alternates: {
    canonical: "https://carrotpixel.com",
    languages: {
      fr: "https://carrotpixel.fr",
      en: "https://carrotpixel.com",
    },
  },
};

// Ajout de la configuration `viewport` séparée
export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mickaël",
    jobTitle: "Full-stack Web Developer",
    url: "https://carrotpixel.com",
    sameAs: [
      "https://www.linkedin.com/in/micka%C3%ABl-warin-4b0275a4/",
      "https://github.com/mikkode",
    ],
    worksFor: {
      "@type": "Organization",
      name: "CarrotPixel",
    },
    knowsAbout: [
      "Next.js",
      "React",
      "JavaScript",
      "Python",
      "Django",
      "MySQL",
      "Firebase",
      "Web Development",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Your University",
    },
  };

  return (
    <main className="relative flex bg-black-100 justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
