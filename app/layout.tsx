import type { Metadata } from "next";
import { Roboto, Poppins, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Synergiz Global | Driving Infrastructure Forward",
  description:
    "Synergiz Global Services - Project Management Consultants providing tailormade services from planning to delivery.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/img/synergiz_logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/img/synergiz_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable} ${syne.variable}`}>
      <body style={{ fontFamily: "var(--font-roboto), Roboto, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column", background: "#fafafa" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
