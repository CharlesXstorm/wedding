import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Clems&Perky",
  description: "The wedding event of Clems and Perky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} antialiased`}>
        <div id="my_portal" />
        {children}
      </body>
    </html>
  );
}
