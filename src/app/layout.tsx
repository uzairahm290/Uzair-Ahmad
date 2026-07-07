import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { RoamingPython } from "@/components/roaming-python";
import { Footer } from "@/components/footer";
import { Preloader } from "@/components/preloader";
import { ScrollToTop } from "@/components/scroll-to-top";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "Uzair Ahmad | Full Stack Engineer",
  description:
    "Personal portfolio of Uzair Ahmad — Full Stack Engineer building scalable, AI-driven, and high-performance web applications.",
  keywords: [
    "Uzair Ahmad",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Python",
    "Django",
    "Portfolio",
  ],
  authors: [{ name: "Uzair Ahmad" }],
  creator: "Uzair Ahmad",
  metadataBase: new URL("https://uzairahmad.dev"), // Replace with your actual deployed URL
  openGraph: {
    title: "Uzair Ahmad | Full Stack Engineer",
    description:
      "I build secure, reliable products from polished frontend experiences to scalable backend systems. Let's work together.",
    url: "https://uzairahmad.dev", // Replace with your actual deployed URL
    siteName: "Uzair Ahmad Portfolio",
    images: [
      {
        url: "/projects/Me.png", // Or add a specific custom /og-image.png in the public folder
        width: 1200,
        height: 630,
        alt: "Uzair Ahmad | Full Stack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzair Ahmad | Full Stack Engineer",
    description:
      "I build secure, reliable products from polished frontend experiences to scalable backend systems.",
    creator: "@_uzairahm_", // Your Twitter handle
    images: ["/projects/Me.png"], // Will unfurl this image on Twitter
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg", // Fallback for apple-touch-icon
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Preloader />
          <CustomCursor />
          <RoamingPython />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
