import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MyPortfolio</title>
        <meta name="description" content="藤堂ゆうかのポートフォリオサイトです。プロフィールや成果物などをまとめています。" />
        <meta property="og:title" content="MyPortfolio" />
        <meta property="og:description" content="藤堂ゆうかのポートフォリオサイトです。プロフィールや成果物などをまとめています。" />
        <meta property="og:image" content="/portfolio.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
