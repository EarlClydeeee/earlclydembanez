import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Earl Clyde — Software Engineer",
  description:
    "Computer Engineering student building systems that solve real problems. Full-stack development, embedded systems, industrial monitoring, and automation. Available for work — 2026.",
  keywords: [
    "Earl Clyde",
    "software engineer",
    "computer engineering",
    "full-stack developer",
    "embedded systems",
    "PHP",
    "JavaScript",
    "portfolio",
    "PUP",
  ],
  authors: [{ name: "Earl Clyde" }],
  openGraph: {
    title: "Earl Clyde — Software Engineer",
    description:
      "Building systems that solve real problems. Full-stack, embedded, and industrial software engineering.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Earl Clyde — Software Engineer",
    description:
      "Building systems that solve real problems. Full-stack, embedded, and industrial software engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
