import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Loftet",
  description: "Loftet - nice places to stay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen bg-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
