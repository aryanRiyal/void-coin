import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Void Coin",
    description: "Implementing Blockchain using Typescript and React",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png"
    }
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-full flex flex-col gap-2`}
            >
                <nav className="flex px-8 py-2 text-xl font-semibold gap-6">
                    <Link href="/">Home</Link>
                    <Link href="/users">Users</Link>
                </nav>
                {children}
            </body>
        </html>
    );
}
