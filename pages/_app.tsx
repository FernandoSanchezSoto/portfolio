import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Fernando Sánchez Soto — Software Developer</title>
        <meta name="description" content="Portfolio de Fernando Sánchez Soto, Desarrollador de Software Junior especializado en desarrollo web fullstack." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
