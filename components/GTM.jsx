import Script from 'next/script';

export const GTMscript = () => (
  <>
    <Script id='gtm-script'>{`window.dataLayer = window.dataLayer || [];`}</Script>
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WHLNGZ6')
    `}
    </Script>
  </>
);

export const GTMnoscript = () => (
  <noscript
    dangerouslySetInnerHTML={{
      __html: `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WHLNGZ6"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `,
    }}
  />
);

export const GoogleScript = () => (
    <>
        <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLEANALYTICS}`}></Script>

        <Script id='google-analytics' strategy='afterInteractive'>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', ${process.env.GOOGLEANALYTICS});
            `}
        </Script>
    </>
);