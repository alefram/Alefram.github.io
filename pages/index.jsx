import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-background p-6">
      <Head>
        <title>Ale ale Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="description" content="Hey I'm Alexis Fraudita, I'm software developer and I will share with you everything that i'm learning about machine learning, electronics and more." />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
      </Head>

      <main className="container mx-auto px-5 lg:max-w-screen-md">
        <div className="md:ml-4">
          <h1 className="text-4xl max-w-xs lg:mt-10 font-banger text-gradient bg-gradient-to-r from-gray-500  to-supertext font-thin mb-5"> Alexis Fraudita</h1>
          <div className="space-y-4 text-gray-50 font-nunito text-lg text-justify">
            <p>
              Hey &#9996;, I am Alexis but my girlfriend tells me Ale Ale, I am a electrical Engineer student and sometimes Table Tennis Player &#127955; from Venezuela.
            </p>
            <p>
              I created this blog for share what I'm learning about Electronics, Robotics, research papers and other cool stuff like privacy preserving AI and quantum computing trought tutorials and articles. I hope you enjoy learn a lot and have fun making cool stuff.
            </p>
          </div>
          <div className="flex flex-wrap mt-5 space-x-4 text-supertext font-bold">
            <Link href="/Posts">
              <a>My Blog Posts</a>
            </Link>
            <Link href="/About">
              <a>More about me</a>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Home;
// #202124

