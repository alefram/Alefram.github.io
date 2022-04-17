import Head from 'next/head';
import Link from 'next/link';

const Home = () => {

    return (
        <div>
            <Head>
                <title>Alexis Fraudita</title>
                <meta name="description" content="Hey I'm Alexis Fraudita, I'm software developer and I will share with you everything that i'm learning about machine learning, electronics and more." />
                <meta name="author" content="Alexis Fraudita"/>

                <meta name="keywords" content="Machine Learning, Robotics, Electronics, Reinforcement Learning, Blog, Portfolio, Alexis, Fraudita, Alexis Fraudita, Python, Pytorch"/>

                <meta property="og:title" content="Alexis Fraudita" />
                <meta property="og:description" content="Hey I'm Alexis Fraudita, I'm software developer and I will share with you everything that i'm learning about machine learning, electronics and more." />
                <meta property="og:image" content="https://alexfm101.github.io/images/me.jpeg" />
                <meta property="og:url" content="https://alexfm101.github.io/" />
                <meta property="og:type" content="website" />
                
            </Head>

            <main className="mx-auto md:px-8 lg:max-w-screen-md pt-10">
                <div className="ml-5">
                    <img src="/images/me.jpeg" className="rounded-full border-8 border-gray-700 w-40" alt="me" />
                </div>
                <h1 className="text-gradient bg-gradient-to-r from-gray-700 to-supertext text-4xl font-bold ml-3 mt-5 md:text-5xl">
                    Alexis Fraudita
                </h1>
                <div className="max-w-screen-md mx-4">

                    <p className="mt-2 font-nunito  text-gray-600 lg:text-lg">
                        Hey &#128075;, my name is Alexis, I&apos;m Electrical Engineer Student and Software Developer from Venezuela 🇻🇪.
                    </p>
                    <p className="font-nunito  text-gray-600 mt-2 lg:text-lg">
                        I&apos;m interested in Robot Learning and Electronics for Robots, so I decided to create this blog to share my projects and learning notes in these fields.
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
                            <a className='text-background hover:text-blue-500 font-bold text-lg'>My blog</a>
                        </Link>
                    </dd>
                    <dd>
                        <Link href="/Projects">
                            <a className='text-background hover:text-blue-500 font-bold text-lg'>My Projects</a>
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
