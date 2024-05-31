import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Web3Modal} from '@/context/Web3Modal'
import Navbar from "@/components/NavBar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: 'ByteMe',
    description: 'null'
}


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Web3Modal>
            <Navbar/>
            {children}
        </Web3Modal>
        </body>
        </html>
    );
}
