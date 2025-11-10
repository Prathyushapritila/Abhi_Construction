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
  metadataBase: new URL("https://abhiconstructions.com"),
  title: {
    default: "Abhi Constructions - Building Excellence Since 1999",
    template: "%s | Abhi Constructions",
  },
  description: "Premier construction company in Hyderabad, India specializing in custom home building, residential construction, and renovation projects. Quality craftsmanship, on-time delivery, and exceptional service.",
  keywords: ["construction", "residential construction", "commercial construction", "renovation", "building", "construction company"],
  authors: [{ name: "Abhi Constructions" }],
  creator: "Abhi Constructions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhiconstructions.com",
    siteName: "Abhi Constructions",
    title: "Abhi Constructions - Building Excellence Since 1999",
    description: "Premier construction company specializing in residential, commercial, and renovation projects.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abhi Constructions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhi Constructions - Building Excellence Since 1999",
    description: "Premier construction company specializing in residential, commercial, and renovation projects.",
    images: ["/og-image.jpg"],
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
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

