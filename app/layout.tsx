import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import { themeScript } from "./lib/theme-script";
import { lato } from "./ui/fonts";

export const metadata: Metadata = {
  title: "melvin teo",
  description: "Melvin Teo's personal website",
  appleWebApp: {
    title: "melvin teo",
  },
  openGraph: {
    title: "melvin teo",
    description: "Melvin Teo's personal website",
    images: [
      {
        url: "/images/meta-image.svg",
        width: 1200,
        height: 630,
        alt: "Site preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/meta-image.svg"],
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="apple-mobile-web-app-title" content="Melvin Teo" />
      </head>
      <body
        className={`${lato.className} bg-background text-foreground antialiased transition-colors`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
