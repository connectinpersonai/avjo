import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { CalEmbed } from "@/components/cal-embed";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Avjo AI - AI Agency & Consulting",
  description: "Automate your business tasks and build fast, scalable applications with the latest AI technology.",
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

