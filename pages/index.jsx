import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="bg-background p-6 lg:h-screen">
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
              Hey &#9996;, I am Alexis but my girlfriend tells me Ale Ale, i am a lectrical Engineer student and sometimes Table Tennis Player &#127955; from Venezuela.
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
          <div className=" flex flex-wrap mt-5 space-x-4 text-supertext font-bold">
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

        </div>
      </main>
    </div>
  );
}

export default Home;
// #202124

