import type { Metadata } from "next";
import { Fraunces, Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Mohammed Jamal — IT & Systems Specialist",
  description:
    "Six years building and supporting IT systems, with a growing focus on AI automation. Multilingual, hands-on, and obsessed with making things work better.",
  keywords: ["IT Specialist", "Systems", "AI Automation", "Dubai", "Mohammed Jamal"],
  authors: [{ name: "Mohammed Jamal" }],
  icons: {
    icon: "/images/SJ.png",
    apple: "/images/SJ.png",
  },
  openGraph: {
    title: "Mohammed Jamal — IT & Systems Specialist",
    description:
      "Six years building and supporting IT systems, with a growing focus on AI automation.",
    url: "https://simojamal.com",
    siteName: "simojamal.com",
    images: [{ url: "/images/SJ.png", width: 400, height: 400 }],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${publicSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
