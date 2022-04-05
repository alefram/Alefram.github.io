import Head from 'next/head';
import Link from 'next/link';

const Home = () => {

  return (
    <div>
        <Head> 
            <title>Alexis Fraudita</title> 
            <link rel="icon" type='image/png' href="/images/earth.png" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <meta name="description" content="Hey I'm Alexis Fraudita, I'm software developer and I will share with you everything that i'm learning about machine learning, electronics and more." />
            <style data-href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>
            <style data-href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
        </Head>
       
        <main className="mt-5 mx-auto md:px-8 lg:max-w-screen-md">
            <div className="ml-5">
                <img src="/images/me.jpeg" className="rounded-full border-8 border-blue-400 w-40 " alt="me"/>
            </div>
            <h1 className="text-gradient bg-gradient-to-r from-gray-700 to-supertext text-4xl font-bold ml-5 mt-5 md:text-5xl">
                Alexis Fraudita 
            </h1>
            <div className="max-w-screen-md mx-4">
                
                <p className="mt-2 font-nunito  text-gray-600 lg:text-lg">
                    Hey &#128075;, my name is Alexis, I&apos;m Electrical Engineer Student and Software Developer from Venezuela 🇻🇪.
                </p>
                <p className="font-nunito  text-gray-600 mt-2 lg:text-lg">
                    I&apos;m interested in AI techniques and Electronics for robotic perception and manipulation, so I decided to create this blog to share my projects and learning notes in these fields.
                </p>
                <p className='mt-2 font-nunito text-gray-600 lg:text-lg'>
                    Currently, I&apos;m working on my Bachelor thesis about a framework for create smart controllers in robots manipulators using Reinforcement Learning.
                </p>
                <p className="font-nunito text-gray-600 mt-2 lg:text-lg">
                    Some others things and interests that I enjoy are sports like table tennis, compose music, videogames  and watch movies that for me is a source of inspiration. 
                </p>
            </div>
            <dl className='flex space-x-5 justify-center mt-5'>
                <dd>
                    <Link href="/Posts">
                        <a className='text-blue-500 font-bold text-lg'>My blog</a>
                    </Link>
                </dd>
                <dd>
                    <Link href="/Projects">
                        <a className='text-blue-500 font-bold text-lg'>My Projects</a>
                    </Link>
                </dd>            
            </dl>
            <div className="p-4 mt-5">
                    <h1 className=" text-supertext text-2xl font-semibold text-center ">Also you can Find me On</h1>
                    <div className="p-4 flex flex-row justify-center space-x-4">
                        <div>
                            <Link href="https://github.com/Alexfm101" passHref={true}>
                                <a><img alt="github" src="/images/github.svg" className="w-8" /></a>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.linkedin.com/in/alexis-fraudita/" passHref={true}>
                                <a><img alt="linkedin" src="/images/linkedin.svg" className="w-8" /></a>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://twitter.com/FrauditaAlexis" passHref={true}>
                                <a><img alt="twitter" src="/images/twitter.svg" className="w-8" /></a>
                            </Link>
                        </div>
                    </div>
                </div> 
        </main>

    </div>
  );
};


export default Home;
// #202124
