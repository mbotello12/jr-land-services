
import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://jr-land-service.netlify.app"),

  title: {
    default: "Tree Trimming & Removal Beeville TX | J&R Services",
    template: "%s | J&R Tree, Lawn & Land Services",
  },

  description:
    "Looking for tree trimming or tree removal in Beeville, TX? J&R Tree, Lawn & Land Services provides dependable tree care, lawn care, land clearing, and property improvements throughout the Beeville area. Call for a free estimate.",

  applicationName: "J&R Tree, Lawn & Land Services",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "J&R Tree, Lawn & Land Services | Beeville, TX",
    description:
      "Tree trimming, tree removal, lawn care, and land improvements in Beeville, Texas. Local owner-operator service with 17 years of hands-on experience.",
    url: "https://jr-land-services.netlify.app",
    siteName: "J&R Tree, Lawn & Land Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "J&R Tree, Lawn & Land Services in Beeville, Texas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "J&R Tree, Lawn & Land Services | Beeville, TX",
    description:
      "Tree trimming, removal, lawn care, and land improvements in Beeville, TX. Call J&R for a free estimate.",
    images: ["/images/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
