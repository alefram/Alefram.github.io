import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="canonical" href="https://alefram.github.io/"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Square+Peg&display=swap" rel="stylesheet"></link>
                <meta name="robots" content="index, follow"/>
                {/* <link rel="icon" type="image/png"  href="images/ghost.png"/> */}
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏓</text></svg>"/>

                <link rel="manifest" href="/site.webmanifest"></link>
                <meta name="google-site-verification" content="MpnKrcQvKDGeW2EIhtOow24kp2VahB-vL2hYzqGNC54" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-PHJRD3DMEN"></script>
                <script
                    dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-PHJRD3DMEN', {
                        page_path: window.location.pathname
                        });
                    `,
                    }}
                />
            {/* <link rel="stylesheet" href="https://unpkg.com/ghcolors/dist/css/prism-ghcolors.css"/> */}
            </Head>
            <body className="">
                <Main/>
                <NextScript/>
            </body>
        </Html> 
    )
}
