import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteContent } from "@/content/site-content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const { title, description } = siteContent.meta;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "es_PA",
    siteName: siteContent.header.brandName,
    images: [
      {
        url: "/images/sede-placeholder.svg",
        alt: "Imagen institucional de ARSOPA Solutions S.A. (placeholder)",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-on-surface">{children}</body>
    </html>
  );
}
