import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebReviewer",
  description: "Share your experience of any website/webpage!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col items-center h-screen`}>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
