import '../styles/globals.css'
import '../styles/code.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', 'G-PHJRD3DMEN', {
        page_path: url,
      });
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);
  return (
    <>
      <ThemeProvider attribute="class">
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
};

export default MyApp;
