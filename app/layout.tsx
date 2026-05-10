import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NEXUS AI — Advanced Artificial Intelligence for Enterprise",
  description:
    "NEXUS AI builds cutting-edge artificial intelligence products and research for the future. Transform your business with our scalable AI infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased bg-black text-zinc-50">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
