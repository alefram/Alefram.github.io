import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/dist/client/link';
import Footer from '../components/Footer';

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
                        with a Minor in Electronics. 
                    </p>
                    <p className="mt-3 font-Roboto  text-neutral-800 dark:text-neutral-400">
                        I wrote my bachelor&apos;s thesis on the development of a 
                        reinforcement learning environment to train a robot arm 
                        for manipulation. This experience has made me very 
                        interested in working in robotics 
                        and AI. That&apos;s why I created this blog to share my 
                        learning notes and projects.
                    </p>
                    <p className="mt-3 font-Roboto text-neutral-800 dark:text-neutral-400">
                        Currently, I'm exploring various topics that I'm curious 
                        about, including developing controllers for articulated 
                        robots, robotics simulation, computational efficiency in 
                        reinforcement learning, and compilers for AI.
                    </p>
                    <p className='mt-3 font-Roboto text-neutral-800 dark:text-neutral-400'>
                        Previously held the position of Assistant Professor in 
                        the Digital Systems and Microprocessors Lab at the Central 
                        University of Venezuela. 
                    </p>
                    <p className="mt-3 font-Roboto text-neutral-800 dark:text-neutral-400">
                        Some other interests I enjoy include table tennis, 
                        music, video games, and watching films, 
                        which serve as sources of inspiration for me.
                    </p>
                </div>

                <div className="p-4 flex flew-row space-x-4">
                    <div>
                        <Link
                            className="hover:text-blue-300 text-blue-600 
                            dark:hover:text-blue-600 dark:text-blue-300"
                            href="https://github.com/alefram"
                            passHref={true}
                        >
                            GitHub
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="hover:text-blue-300 text-blue-600 
                            dark:hover:text-blue-600 dark:text-blue-300"
                            href="https://www.linkedin.com/in/alexis-fraudita/"
                            passHref={true}
                        >
                            Linkedin
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="hover:text-blue-300 text-blue-600 
                            dark:hover:text-blue-600 dark:text-blue-300"
                            href="https://twitter.com/_Alefram_"
                            passHref={true}
                        >
                            Twitter
                        </Link>
                    </div>
                    <div>
                        <Link 
                            className="hover:text-blue-300 text-blue-600 
                            dark:hover:text-blue-600 dark:text-blue-300"
                            href="mailto:fraumalex@gmail.com">Email
                        </Link>
                    </div>
                </div>
                <Footer/>
            </main>
        </div>
    );
};


export default About;
// #202124
