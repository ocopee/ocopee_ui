import type { Metadata } from "next";
import { Literata, Merriweather } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const literata = Literata({
  subsets: ["vietnamese"],
  weight: ["400", "700"],
  variable: "--font-literata",
  display: "swap",
});

const merriweather = Merriweather({
  weight: "700",
  subsets: ["vietnamese"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ocop.ee",
  description: "Blog",
  keywords: ["ocopee"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`light ${literata.variable} ${merriweather.variable} h-full bg-white`}
    >
      <body className="font-paragraph h-full">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
