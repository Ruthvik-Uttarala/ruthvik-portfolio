import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ruthvik-portfolio-uttarala-ruthvik.vercel.app"),
  title: "Ruthvik Uttarala — Software Engineer | Backend, AWS & Applied AI",
  description: "Software engineering portfolio of Ruthvik Uttarala: reliable REST APIs, full-stack applications, AWS cloud infrastructure, asynchronous systems, and applied AI.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ruthvik Uttarala — Software Engineer",
    description: "Backend and full-stack engineering, AWS cloud infrastructure, reliable APIs, and applied AI systems.",
    type: "website",
    url: "/",
    siteName: "Ruthvik Uttarala Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruthvik Uttarala — Software Engineer",
    description: "Reliable APIs, full-stack applications, AWS infrastructure, and applied AI.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ruthvik Uttarala",
  url: "https://ruthvik-portfolio-uttarala-ruthvik.vercel.app",
  email: "mailto:uttaralaruthvik@gmail.com",
  jobTitle: "Software Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Pennsylvania State University",
  },
  sameAs: [
    "https://github.com/Ruthvik-Uttarala",
    "https://www.linkedin.com/in/ruthvik-uttarala-09918a251/",
  ],
  knowsAbout: ["REST APIs", "Full-stack development", "AWS", "Asynchronous processing", "Applied AI", "Automated testing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
