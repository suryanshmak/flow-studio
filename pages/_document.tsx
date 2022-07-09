import { Html, Main, NextScript, Head } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="mx-auto overflow-x-hidden bg-[#000122] text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}