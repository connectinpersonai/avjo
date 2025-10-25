import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { CalEmbed } from "@/components/cal-embed";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avjo AI - AI-Powered Solutions | Fast, Affordable, Stress-Free",
  description: "Build your product fast with Avjo AI. We're an experienced AI team specializing in automation, fast development, and scalable applications. Turn your ideas into reality in just weeks.",
  icons: {
    icon: [
      { url: '/avjo-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/avjo-512x512.png',
    shortcut: '/avjo-512x512.png',
  },
  keywords: [
    "AI agency",
    "AI development",
    "AI automation",
    "AI consulting",
    "fast development",
    "scalable applications",
    "AI solutions",
    "business automation",
    "AI powered agency",
    "product development"
  ],
  authors: [{ name: "Avjo AI" }],
  creator: "Avjo AI",
  publisher: "Avjo AI",
  metadataBase: new URL("https://avjo.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Avjo AI - Build Your Product Fast, Affordable, and Stress-Free",
    description: "Turn your ideas into reality with our AI-powered solutions. Fast development, scalable applications, and business automation.",
    url: "https://avjo.ai",
    siteName: "Avjo AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/avjo-512x512.png",
        width: 512,
        height: 512,
        alt: "Avjo AI - AI-Powered Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avjo AI - AI-Powered Solutions",
    description: "Build your product fast, affordable, and stress-free with Avjo AI.",
    images: ["/avjo-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage.className}>
        {children}
        <CalEmbed />
      </body>
    </html>
  );
}

