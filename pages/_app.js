import '../styles/globals.css'
import '../styles/code.css';
import { GoogleScript, GTMscript } from '../components/GTM';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleScript/>
      <Component {...pageProps} />
      <GTMscript/>
    </>
  )
};



export default MyApp;
