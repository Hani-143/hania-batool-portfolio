import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://haniabatool.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hania Batool | Professional Resume Writer & LinkedIn Profile Optimization",
  description:
    "Hania Batool is a professional resume writer, CV designer and LinkedIn profile optimization specialist helping professionals build stronger career brands.",
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Hania Batool | Professional Resume Writer & LinkedIn Profile Optimization",
    description:
      "Professional resumes, LinkedIn profiles, content and personal branding designed to help you show up with clarity, confidence and credibility.",
    url: siteUrl,
    siteName: "Hania Batool",
    images: ["/images/hero.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hania Batool | Professional Resume Writer & LinkedIn Profile Optimization",
    description:
      "Professional resumes, LinkedIn profiles, content and personal branding designed to help you show up with clarity, confidence and credibility.",
    images: ["/images/hero.jpg"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hania Batool",
  jobTitle:
    "Professional Resume Writer | CV Designer | LinkedIn Profile Optimization Expert",
  email: "mailto:b67537209@gmail.com",
  sameAs: ["https://www.linkedin.com/in/hania-batool-483543414/"],
  url: siteUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
