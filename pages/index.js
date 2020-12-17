import Head from 'next/head';
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ale Ale Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content="Hey I'm Alexis Fraudita, I'm software developer and I will share with you everything that i'm learning about machine learning, electronics and more." />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:ital@0&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@800&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar/>     
      
      <main className="p-4">
        <h1 className="text-3xl mb-2 font-Alegreya "> Hey &#128640;</h1>
        <p className="text-justify font-Roboto ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem id repellendus debitis vel, assumenda atque quasi. Culpa quo dolore consectetur. Sequi inventore mollitia laborum ea amet, provident quaerat quisquam consequatur!
        </p>        
      </main>
    </div>
  );
}


// #202124

