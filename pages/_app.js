import '../styles/globals.css'
import '../styles/code.css';
import { GoogleScript } from '../components/GTM';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleScript/>
      <Component {...pageProps} />
    </>
  )
};



export default MyApp;
