import '../styles/globals.css'
import '../styles/code.css';
import { GTMscript } from '../components/GTM';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GTMscript/>
    </>
  )
};



export default MyApp;
