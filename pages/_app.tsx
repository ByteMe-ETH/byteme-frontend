import "tailwindcss/tailwind.css";

import type {AppProps} from "next/app";
import Head from "next/head";
import Header from "../components/header";
import {Auth0Provider} from "@auth0/auth0-react";
import {Web3Modal} from '../context/web3modal'
import "../styles/globals.css";

export const metadata = {
    title: 'Web3Modal',
    description: 'Web3Modal Example'
}

export default function MyApp({Component, pageProps}: AppProps) {
    return (
        <Auth0Provider
            clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
            domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
        >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta
                    name="description"
                    content=""
                />
                <title>ByteMe</title>
            </Head>
            <Header/>

            <main className="py-14">
                <Web3Modal>
                    <Component {...pageProps} />
                </Web3Modal>
            </main>
        </Auth0Provider>
    );
}
