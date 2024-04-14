import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({ weight: "variable", subsets: ["latin"], display: "swap", variable: "--font-kumbhSans" });

export const metadata = {
  title: "Frontend Mentor | Devjobs Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable}`}>{children}</body>
    </html>
  );
}
