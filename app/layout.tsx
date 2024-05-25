import type { Metadata } from "next";
import { Inter } from "next/font/google";

import PreviewBar from "@components/common/PreviewBar"

import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ai智能机器人外呼系统外呼系统外呼机器人 人工智能机器人外呼系统电销智能外呼机器人系统外呼机器人智能系统电销机器人外呼系统智能外呼机器人系统智能外呼系统机器人机器人电销外呼系统外呼电销机器人系统智能电话机器人哪家好智能电话哪家好 电话智能机器人哪家好智能外呼外呼系统外呼智能系统智能系统外呼智能外呼系统对话外呼机器人 人工外呼智能机器人外呼人工智能机器人智能ai外呼机器人 ai智能机器人外呼智能外呼机器人定制 ai人工智能外呼机器人人工智能外呼机器人外呼机器人厂商外呼智能机器人智能机器人外呼 智能外呼机器人排名智能外呼机器人的优势 ai智能外呼机器人 ai外呼智能机器人机器人智能外呼 ai机器人智能外呼外呼对话机器人智能外呼 ai智能外呼智能语音外呼语音智能外呼",
  description: "ai智能机器人外呼系统外呼系统外呼机器人 人工智能机器人外呼系统电销智能外呼机器人系统外呼机器人智能系统电销机器人外呼系统智能外呼机器人系统智能外呼系统机器人机器人电销外呼系统外呼电销机器人系统智能电话机器人哪家好智能电话哪家好 电话智能机器人哪家好智能外呼外呼系统外呼智能系统智能系统外呼智能外呼系统对话外呼机器人 人工外呼智能机器人外呼人工智能机器人智能ai外呼机器人 ai智能机器人外呼智能外呼机器人定制 ai人工智能外呼机器人人工智能外呼机器人外呼机器人厂商外呼智能机器人智能机器人外呼 智能外呼机器人排名智能外呼机器人的优势 ai智能外呼机器人 ai外呼智能机器人机器人智能外呼 ai机器人智能外呼外呼对话机器人智能外呼 ai智能外呼智能语音外呼语音智能外呼",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className={inter.className}>
        <body >
          <div id="site-wrapper">
          <div id="site">
              <PreviewBar />
              <div className="flex flex-col min-h-screen">  
                <main className={`flex-grow`}>{children}</main>
              </div>
            </div>
          </div>
        </body>
      </html>
  );
}
