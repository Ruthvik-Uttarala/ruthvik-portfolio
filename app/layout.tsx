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
  metadataBase: new URL("https://ruthvik-portfolio-one.vercel.app"),
  title: "Ruthvik Uttarala — Software Engineer | AI, Cloud & Full Stack",
  description:
    "Portfolio of Ruthvik Uttarala, a software engineer building AI products, cloud infrastructure, and full-stack systems.",
  openGraph: {
    title: "Ruthvik Uttarala — Software Engineer | AI, Cloud & Full Stack",
    description:
      "Portfolio of Ruthvik Uttarala, a software engineer building AI products, cloud infrastructure, and full-stack systems.",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruthvik Uttarala — Software Engineer | AI, Cloud & Full Stack",
    description:
      "Portfolio of Ruthvik Uttarala, a software engineer building AI products, cloud infrastructure, and full-stack systems.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
  },
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
      <body className="min-h-full overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">{children}</body>
    </html>
  );
}
