import { Html, Head, Main, NextScript } from "next/document";
import { GTMnoscript } from "../components/GTM";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="canonical" href="https://alefram.github.io/"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Square+Peg&display=swap" rel="stylesheet"></link>
                <meta name="robots" content="index, follow"/>
                <link rel="icon" type="image/png"  href="images/ghost.png"/>

                <link rel="manifest" href="/site.webmanifest"></link>
                <meta name="google-site-verification" content="MpnKrcQvKDGeW2EIhtOow24kp2VahB-vL2hYzqGNC54" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLEANALYTICS}"></script>
                {/* <link rel="stylesheet" href="https://unpkg.com/ghcolors/dist/css/prism-ghcolors.css"/> */}
            </Head>
            <body className="">
                <GTMnoscript/>
                <Main/>
                <NextScript/>
            </body>
        </Html> 
    )
}

{/* <a href="https://www.flaticon.com/free-icons/gaming" title="gaming icons">Gaming icons created by Smashicons - Flaticon</a> */}