import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="description" content="藤堂ゆうかのポートフォリオサイトです。プロフィールや成果物などをまとめています。" />
        <meta property="og:title" content="MyPortfolio" />
        <meta property="og:description" content="藤堂ゆうかのポートフォリオサイトです。プロフィールや成果物などをまとめています。" />
        <meta property="og:image" content="/portfolio.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
