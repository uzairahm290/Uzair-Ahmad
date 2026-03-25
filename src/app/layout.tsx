import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { ChatBot } from "@/components/chat-bot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzair Ahmad | Full Stack Engineer",
  description:
    "Personal portfolio of Uzair Ahmad — Full Stack Engineer building scalable, AI-driven, high-performance web applications.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Uzair Ahmad | Full Stack Engineer",
    description:
      "I build secure, reliable products from polished frontend experiences to scalable backend systems.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CustomCursor />
          {children}
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
