import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Momo Official Blog",
  description: "Idol-style official blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-purple-50">
          {children}
        </main>
        <footer className="py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Momo Official
        </footer>
      </body>
    </html>
  );
}