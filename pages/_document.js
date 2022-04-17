import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="google-site-verification" content="MpnKrcQvKDGeW2EIhtOow24kp2VahB-vL2hYzqGNC54" />
                <link rel="canonical" href="https://alexfm101.github.io/"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <style data-href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet" />
                <style data-href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" />
                <style data-href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <meta name="robots" content="index, follow"/>
                <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"></link>

            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html> 
    )
}