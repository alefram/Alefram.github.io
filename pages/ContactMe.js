import Head from 'next/head';
import Navbar from '../components/Navbar'


function ContactMe() {
    return (

        <div>
          <Head>
            <title>Ale Ale Blog</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
  
          <nav className="pt-2">
            <Navbar/>     
          </nav> 

          <main>
            <div className="mt-6 text-center">
                <h1 className="text-4xl ml-4 mb-2 font-semibold text-gray-900">Contact Me</h1>
            </div>
          </main>

          <footer>

          </footer>
        </div>
      );
}
  
export default ContactMe