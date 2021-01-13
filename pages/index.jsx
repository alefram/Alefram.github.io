import Head from 'next/head';
import Navbar from '../components/Navbar';
import  Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-bgdark">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content="Hey I'm Alexis Fraudita, I'm software developer and I will share with you everything that i'm learning about machine learning, electronics and more." />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:ital@0&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@800&display=swap" rel="stylesheet"></link>
      </Head>

      <header>
        <Navbar/>     
      </header>
      
      <main className="container mx-auto px-5 lg:max-w-screen-md">
        <h1 className="text-2xl font-Alegreya text-titles "> Hey &#128640;</h1>
        <p className="text-justify font-Roboto text-gray-50 ">
          Hey I am <a className="font-bold italic"> Alexis Fraudita</a> , I am software Developer, Electrical Engineer student and sometimes Table Tennis Player. I created this blog for share what I'm learning about Machine Learning, Robotics and Electronics... maybe some tutorials too. I hope you enjoy and have fun making cool stuff.
        </p>     
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Home;
// #202124

