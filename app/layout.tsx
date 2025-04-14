import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yoonjae Chang - Portfolio",
  description: "Personal portfolio of Yoonjae Chang - Business and Architecture student at Seoul National University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-white dark:bg-black text-black dark:text-white">
          <Navbar />
          <div className="flex-grow pt-32">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
