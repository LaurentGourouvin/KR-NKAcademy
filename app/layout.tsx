import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
