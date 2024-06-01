import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Web3Modal} from '@/context/Web3Modal'
import Navbar from "@/components/NavBar";
import {AuroraBackground} from "@/components/ui/aurora-beams";
import {cn} from "@/utils/cn";

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
            <AuroraBackground className={cn(
                "h-fit min-h-screen"
            )}>
                <Navbar/>
                {children}
            </AuroraBackground>
        </Web3Modal>
        </body>
        </html>
    );
}
