import "../public/static/fonts/style.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>감동기획</title>
        <meta name="Keywords" content="kamdongplan" />
        <meta name="Keywords" content="kamdong" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SURVICE_URL} />
        <meta property="og:title" content="감동기획" />
        <meta
          property="og:description"
          content="고객이 감동할때까지, 감동기획"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:article:author"
          content="고객이 감동할때까지, 감동기획"
        />
        <meta property="og:image" content="/img/meta_img.png" />
        <meta property="og:image:width" content="450" />
        <meta property="og:image:height" content="260" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
