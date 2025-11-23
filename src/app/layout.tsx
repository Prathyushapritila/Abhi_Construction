import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LayoutSEO } from "./layout-seo";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhi-construction-two.vercel.app"),
  title: {
    default: "Abhi Constructions & Innovations | Modern Homes & Interiors in Hyderabad",
    template: "%s | Abhi Constructions & Innovations",
  },
  description: "Abhi Constructions & Innovations designs and builds custom homes, villas, and interiors in Hyderabad with end-to-end design-build services.",
  keywords: ["construction", "residential construction", "commercial construction", "renovation", "building", "construction company", "custom homes", "interior design", "Hyderabad"],
  authors: [{ name: "Abhi Constructions & Innovations" }],
  creator: "Abhi Constructions & Innovations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhi-construction-two.vercel.app",
    siteName: "Abhi Constructions & Innovations",
    title: "Abhi Constructions & Innovations | Modern Homes & Interiors in Hyderabad",
    description: "Custom home construction, architectural design, and interior design in Hyderabad — one team from blueprint to handover.",
    images: [
      {
        url: "https://abhi-construction-two.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhi Constructions & Innovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhi Constructions & Innovations | Modern Homes & Interiors in Hyderabad",
    description: "Custom homes and interiors crafted with precision in Hyderabad.",
    images: ["https://abhi-construction-two.vercel.app/og-image.jpg"],
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
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <LayoutSEO />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col relative w-full overflow-x-hidden bg-background" style={{ margin: 0, padding: 0, width: '100%' }}>
            <div className="relative z-10 w-full" style={{ margin: 0, padding: 0, width: '100%' }}>
              <Navbar />
              <main className="flex-1 w-full overflow-x-hidden" style={{ margin: 0, padding: 0, width: '100%' }}>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

