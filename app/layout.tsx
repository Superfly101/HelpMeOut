import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "HelpMeOut",
  description:
    "Help your friends and loved ones by creating and sending videos on how to get things done on a website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-4 md:px-16">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
