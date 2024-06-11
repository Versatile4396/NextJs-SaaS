import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const IBM = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-flex",
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-power image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBM.variable)}>
        {children}
      </body>
    </html>
  );
}
