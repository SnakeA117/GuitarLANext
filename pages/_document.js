import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
          <meta name="description" content="GuitarLA - Guitar sales and music blog"/>
          <link rel="stylesheet" href="https://csstools.github.io/normalize.css/11.0.0/normalize.css"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/>
          <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>

      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}
