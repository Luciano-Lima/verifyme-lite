import "./globals.css";            // Loads Tailwind and global styles
import Link from "next/link";      // Client-side navigation links
import { ReactNode } from "react"; // Type for children prop

export default function RootLayout({ children }: { children: ReactNode }) {
  // Server Component by default (no "use client"): renders static layout
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav>
            <Link href="/" className="font-semibold">VerifyMe Lite</Link>
            <div className="flex gap-4 text sm">
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/dashboard/kyc/personal" className="underline">Start KYC</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl p-6">{children}</main>
      </body>
    </html>
  )
}