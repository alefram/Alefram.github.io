import Head from 'next/head';
import Link from 'next/link';

const Home = () => {

  return (
    <div className="bg-background min-h-screen">
        <Head>
            <title>AlealeBlog</title> 
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <meta name="description" content="Hey I'm Alexis Fraudita, I'm software developer and I will share with you everything that i'm learning about machine learning, electronics and more." />
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
        </Head>

        <main className="mx-auto px-4 md:px-8 lg:max-w-screen-md flex items-center justify-center absolute inset-0">
            <div className="md:ml-4">
                <h1 className="prose-2xl text-4xl max-w-xs font-banger text-gradient bg-gradient-to-r from-gray-500  to-supertext font-thin mb-5">
                    Alexis Fraudita
                </h1>
                <div className="space-y-4 text-gray-50 prose-lg font-nunito text-justify">
                    <p>
                        Hey &#9996;, I am Alexis but my girlfriend tells me Ale Ale, I am a electrical Engineer student and sometimes Table Tennis Player &#127955; from Venezuela.
                    </p>
                    <p>
                        I created this blog for share what I'm learning about Robotics control, simulation and hardware. Also i would like to share how machine learning is apply to robotics and web development. I hope you learn a lot and have fun making cool stuff.
                    </p>
                </div>
                <div className="flex flex-wrap mt-5 space-x-4 prose-lg font-bold">
                    <Link href="/Posts">
                        <a className="text-supertext">My Blog Posts</a>
                    </Link>
                    <Link href="/About">
                        <a className="text-supertext">More about me</a>
                    </Link>
                    <Link href="/Projects">
                        <a className="text-supertext">My Projects</a>
                    </Link>
                </div>
            </div>
        </main>
    </div>
  );
}

export default Home;
// #202124
