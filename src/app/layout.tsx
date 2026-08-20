
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "防災学習アプリ - Ứng dụng học phòng chống thiên tai",
  description: "Dành cho người Việt Nam tại Nhật Bản",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta name="theme-color" content="#f87171" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <header className="bg-red-500 text-white p-4 shadow-md print:hidden">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
              <h1 className="text-xl font-bold">Ứng dụng Phòng chống Thiên tai</h1>
            </Link>
            <nav>
              <ul className="flex space-x-4 text-sm font-medium">
                <li><Link href="/disasters">Kiến thức</Link></li>
                <li><Link href="/checklist">Chuẩn bị</Link></li>
                <li><Link href="/vocab">Từ vựng</Link></li>
                <li><Link href="/quiz">Quiz</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4 min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center p-4 mt-8 print:hidden">
          <p>© 2026 Disaster Preparedness App</p>
        </footer>
      </body>
    </html>
  );
}
