import {Html, Head, Main, NextScript} from "next/document";
import {cn} from "../lib/utils";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8"/>
                <meta name="robots" content="follow, index"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            </Head>
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased"
            )}>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
        ;
}
