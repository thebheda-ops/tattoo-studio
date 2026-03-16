import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "INKED CREATIONS | Premium Tattoo Studio",
  description: "Award-winning tattoo studio specializing in custom designs, realism, traditional, and neo-traditional tattoos. Book your consultation today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
