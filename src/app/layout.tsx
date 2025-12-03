import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import SmoothScrollHandler from "@/components/SmoothScrollHandler";
import { CartProvider } from "../context/CartContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Character Matters",
  description: "Walking in Faith, Serving in Love - Character Matters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <CartProvider>
          <SmoothScrollHandler />
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
