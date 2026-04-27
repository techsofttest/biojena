import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen"; // <-- Import it

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BIOJENA | Engineered Biomaterials",
  description: "Next-Generation Cosmetics powered by Mobile Matrix Reservoir Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {/* The loading screen sits on top of everything */}
        <LoadingScreen />

        <Navbar />
        {children}
      </body>
    </html>
  );
}