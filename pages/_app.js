import '../styles/globals.css'
import '../styles/code.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import { GoogleScript } from '../components/GTM';


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
      {/* <GoogleScript/> */}
      <Component {...pageProps} />
    </>
  )
};

export default MyApp;
