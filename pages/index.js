import Head from 'next/head';
import Navbar from '../components/Navbar'

export default function Home() {


  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content="Hey I'm Alexis Fraudita, I'm software developer and I will share with you everything that i'm learning about machine learning, electronics and more." />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:ital@0&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@800&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar/>     
      
      <main className="p-4 lg:mx-80 md:mx-20 ">
        <h1 className="text-3xl mb-2 font-Alegreya text-texts "> Hey &#128640;</h1>
        <p className="text-justify font-Roboto text-texts ">
          Hey I am <a className="font-bold italic"> Alexis Fraudita</a> , I am software Developer, Electrical Engineer student and sometimes Table Tennis Player. I created this blog for share what I'm learning about Machine Learning, Robotics and Electronics... maybe some tutorials too. I hope you enjoy and have fun making cool stuff.
        </p>     
      </main>
    </div>
  );
}


// #202124

