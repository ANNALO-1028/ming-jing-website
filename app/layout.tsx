import type { Metadata } from "next";
import { Geist, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-noto-serif-tc",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "名璟新媒體有限公司｜社群行銷專家",
  description: "名璟新媒體提供個人社群媒體陪跑、品牌行銷顧問、廣告投放代操、電商上架服務，助您的品牌在數位時代脫穎而出。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${geistSans.variable} ${notoSerifTC.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
