import type { Metadata } from "next";
import { Geist_Mono, Newsreader, Silkscreen } from "next/font/google";
import "./globals.css";
import "./portfolio.css";
import "./polish.css";

const serif = Newsreader({ variable: "--font-serif", subsets: ["latin"], display: "swap" });
const pixel = Silkscreen({ variable: "--font-pixel", subsets: ["latin"], weight: ["400", "700"], display: "swap" });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = { metadataBase: new URL("https://ruthvikuttarala.com"), title: { default: "Ruthvik Uttarala | Software Engineer", template: "%s · Ruthvik Uttarala" }, description: "Ruthvik Uttarala builds backend systems, full-stack products, cloud infrastructure, and applied AI workflows.", alternates: { canonical: "/" }, openGraph: { title: "Ruthvik Uttarala | Software Engineer", description: "Backend, full-stack, cloud, and applied AI engineering.", url: "/", type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] }, twitter: { card: "summary_large_image", images: ["/opengraph-image"] } };
const person = { "@context": "https://schema.org", "@type": "Person", name: "Ruthvik Uttarala", url: "https://ruthvikuttarala.com", jobTitle: "Software Engineer", alumniOf: { "@type": "CollegeOrUniversity", name: "Pennsylvania State University" }, sameAs: ["https://github.com/Ruthvik-Uttarala", "https://www.linkedin.com/in/ruthvik-uttarala-09918a251/", "https://www.instagram.com/ruuttarala/"] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${serif.variable} ${pixel.variable} ${mono.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />{children}</body></html>; }
