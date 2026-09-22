import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UserContextProvider } from "@/app/context/Data"
import Navbar from "@/app/components/navbar/page"
import Footer from "@/app/components/footer/page"




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Jadaun- Portfolio",
  description: "Building minimalistic, high-performance web applications.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <UserContextProvider>
        <Navbar/>

          {children}
        <Footer/>
        </UserContextProvider>
      </body>
    </html>
  );
}
