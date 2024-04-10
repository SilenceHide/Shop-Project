import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
      </Head>
      <body className="font-quicksand text-text-heading selection:text-white selection:bg-brand-color-one caret-brand-color-one">
        <Main />
        <NextScript />
        {/* <!--*******--------**** Menu Cover Background ****--------*******--> */}
        <div className="cover lg:hidden fixed top-0 right-0 w-full h-full -z-[1] opacity-0 transition-all"></div>
      </body>
    </Html>
  );
}
