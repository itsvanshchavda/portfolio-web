import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vanshchavda.me'),
  keywords: [
    "vanshchavda",
    "vansh chavda",
    "Vansh Chavda",
    "full stack developer",
    "web developer",
    "portfolio",
    "GitHub",
    "code",
    "projects",
    "software engineer",
    "website designer",
    "vansh chavda github",
    "vansh portfolio"
  ],
  title: "Vansh Chavda Portfolio",
  openGraph: {
    description: "Hey there, I'm Vansh, your friendly web expert! I specialize in making awesome websites that everyone loves. Let's work together to create something magical!",
    images: [
      {
        url: "/me.png",
        width: 800,
        height: 600,
        alt: "Vansh Chavda"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/me.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
