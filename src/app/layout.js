import { Kumbh_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";

const kumbhSans = Kumbh_Sans({ weight: "variable", subsets: ["latin"], display: "swap", variable: "--font-kumbhSans" });

export const metadata = {
  title: "Frontend Mentor | Devjobs Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} mx-auto w-[375px] bg-secondary-light-grey md:w-[768px] lg:w-[1440px] dark:bg-[#121721]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
