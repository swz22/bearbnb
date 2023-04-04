import Head from "next/head";
import "tailwindcss/tailwind.css";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
