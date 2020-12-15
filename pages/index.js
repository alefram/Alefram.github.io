import Head from 'next/head';
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ale Ale Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>     
      
      <main className="p-4">
        <h1 className=" font-normal text-2xl mb-2"> Hey &#128640;</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id repellendus debitis vel, assumenda atque quasi. Culpa quo dolore consectetur. Sequi inventore mollitia laborum ea amet, provident quaerat quisquam consequatur!
        </p>        
      </main>
    </div>
  );
}
