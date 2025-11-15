import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/Header";
export const metadata: Metadata = {
  title: "KR NKAcademy",
  description: "Natural Korean Acquisition — From Zero to TOPIK II",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
