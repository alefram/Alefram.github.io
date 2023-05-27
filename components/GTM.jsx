import Script from 'next/script';

export const GoogleScript = () => (
    <>
        <Script strategy='afterInteractive' src={`https://www.googletagmanager.com/gtag/js?id=G-PHJRD3DMEN`}></Script>

        <Script id='google-analytics' strategy='afterInteractive'>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-PHJRD3DMEN');
            `}
        </Script>
    </>
);