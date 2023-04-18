"use client";
import Layout from "@/components/Layout";
import "../styles/globals.css";
import Head from "next/head";
import { useSSR } from "@nextui-org/react";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { isBrowser } = useSSR();
  return (
    isBrowser && (
      <>
        <Head>
          <title>Saygin Saracoglu</title>
          <meta
            name="description"
            content="Welcome to my portfolio! I am Saygin Saracoglu, a skilled software engineer and web developer with a passion for creating innovative and efficient solutions. Explore my portfolio to see my latest projects and skills, and learn more about my professional experience and background."
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  );
}
