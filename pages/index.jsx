import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';

const Home = () => {
  return (
    <div className="bg-background p-6 lg:h-screen">
      <Head>
        <title>Ale ale Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content="Hey I'm Alexis Fraudita, I'm software developer and I will share with you everything that i'm learning about machine learning, electronics and more." />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:ital@0&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@800&display=swap" rel="stylesheet"></link>
      </Head>
      
      <main className="container mx-auto px-5 lg:max-w-screen-md">

        <h1 className="text-2xl lg:mt-10 font-Alegreya text-gradient bg-gradient-to-r from-title to-text font-bold mb-5"> Alexis Fraudita</h1>
        <div className="space-y-4 text-gray-600 font-Roboto text-justify">
          <p>
            Hey &#128640;, I am Alexis but my girlfriend tells me Ale ale, i am a lectrical Engineer student and sometimes Table Tennis Player from Venezuela. 
          </p> 
          <p>
            I created this blog for share what I'm learning about Machine Learning, Robotics and privacy preserving AI trought tutorials and articles. I hope you enjoy and have fun making cool stuff.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque omnis animi temporibus alias debitis error aut minus facere nostrum molestias harum, voluptatum quo fugiat laborum nulla pariatur aspernatur voluptatibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis esse cumque non, quisquam recusandae quos, quia ex ab assumenda deleniti libero sint blanditiis harum mollitia aut quibusdam, itaque enim.
          </p>
        </div>
        <div className=" flex flex-wrap mt-5 space-x-4 text-text font-bold">
          <Link href="/Posts">
            <a>My Blog Posts</a>
          </Link>
          <Link href="/Projects">
            <a>My Projects</a>
          </Link>
          <Link href="/About">
            <a>More about me</a>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
// #202124

