import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/dist/client/link';

const About = () => {

    return (
        <div>
            <Head>
                <title>About | Ale Blog</title>
                <meta name="description" content="Who I am?"
                 />
                <meta name="author" content="Alexis Fraudita"/>
                <meta name="keywords" content="Machine Learning, Robotics, Electronics, 
                    Reinforcement Learning, Blog, Portfolio, Alexis Fraudita, 
                    Python, AI, control systems"
                />
                <meta property="title" content="About | Ale Blog" />
                <meta property="url" content="https://alefram.github.io/About" />
                <meta property="type" content="website" />
                <meta 
                    name="viewport" content="initial-scale=1.0,
                    width=device-width" key="viewport"
                />
                <meta name="robots" content="index, follow"/>
                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://alefram.github.io/About"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="About | Ale Blog"/>
                <meta property="og:description" content="Who I am?"/>
                <meta property="og:image" content="🏓"/>

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_short_image"/>
                <meta property="twitter:domain" content="alefram.github.io"/>
                <meta property="twitter:url" content="https://alefram.github.io/About"/>
                <meta name="twitter:title" content="About | Ale Blog"/>
                <meta name="twitter:description" content="Who I am?"/>
                <meta name="twitter:image" content="🏓"/> 
            </Head>

            <Navbar/>

            <main className="mx-auto md:px-8 lg:max-w-screen-md pt-10">
                <div className="flex pt-5 w-full">
                    <h1 className="text-neutral-900 dark:text-neutral-100 font-bold font-Roboto
                     ml-3 py-3 pr-3 text-2xl md:text-3xl">
                        Hi
                    </h1>
                    <p className='text-4xl md:text-3xl py-2'>&#128075;</p>
                </div>

                <div className="max-w-screen-md mx-4">
                    <p className="mt-3 font-Roboto  text-neutral-800 dark:text-neutral-400">
                        My name is Alexis Fraudita, I&apos;m Electrical Engineer
                        and Software Developer.
                    </p>
                    <p className="mt-3 font-Roboto  text-neutral-800 dark:text-neutral-400">
                        I wrote my bachelor&apos;s thesis on developing a reinforcement
                        learning environment to train a robot arm for manipulation.
                        This experience has made me very interested in AI agents and robotics
                        applications. That&apos;s
                        why I created this blog to share my notes and experiments on
                        what I&apos;ve learned.
                    </p>

                    <p className="mt-3 font-Roboto text-neutral-800 dark:text-neutral-400">
                        One question that really fascinates me is how to deploy an
                        AI agent in a robot on Mars, similar to &quot;Space Baymax&quot;.
                    </p>
                    <p className='mt-3 font-Roboto text-neutral-800 dark:text-neutral-400'>
                        Besides my learning and experimentation, I work as a
                        web application developer
                        (check <a className="text-blue-600 dark:text-blue-300 text-opacity-90 font-bold" href="https://moonguard.dev"> this</a>).
                        Previously, I was an assistant professor in the Digital
                        Systems and Microprocessors Lab at the Central University
                        of Venezuela
                    </p>

                    <p className="mt-3 font-Roboto text-neutral-800 dark:text-neutral-400">
                        Some others things and interests that I enjoy are sports
                        like table tennis, music production, videogames and watch
                        movies that for me is a source of inspiration.
                    </p>
                </div>

                <div className="p-4 mt-5">
                    <h1
                        className=" text-blue-600 dark:text-blue-300 text-opacity-90 text-2xl font-bold
                        text-center font-nunito">
                        Also you can Find me On
                    </h1>
                    <div className="p-4 flex flex-row justify-center space-x-4">
                        <div>
                            <Link
                                href="https://github.com/alefram"
                                passHref={true}
                            >
                                <img
                                    alt="github"
                                    src="/images/github.svg"
                                    className="w-8"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="https://www.linkedin.com/in/alexis-fraudita/"
                                passHref={true}
                            >
                                <img
                                    alt="linkedin"
                                    src="/images/linkedin.svg"
                                    className="w-8"
                                />
                            </Link>
                        </div>
                        <div>
                            <Link
                                href="https://twitter.com/_Alefram_"
                                passHref={true}
                            >
                                <img
                                    alt="twitter"
                                    src="/images/twitter.svg"
                                    className="w-8"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};


export default About;
// #202124
