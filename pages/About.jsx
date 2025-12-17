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
                        Hey! I&apos;m Alex, I&apos;m an <strong className="text-neutral-300">Electrical Engineer</strong>
                        (Minor in Electronics and Control Systems) and <strong className="text-neutral-300">Software Developer</strong>. 
                    </p>
                    <p className="mt-3 font-Roboto  text-neutral-800 dark:text-neutral-400">
                        I wrote my bachelor&apos;s thesis on developing a 
                         <strong className="text-neutral-300"> Reinforcement Learning </strong> 
                         environment to train a robot arm for manipulation. 
                         This experience sparked my
                        interest in the intersection of Software, Robotics 
                        and AI, which is why I created this 
                        blog to share my learning notes and projects. I am 
                        particularly driven by the intersection of hardware and 
                        software, specifically through the simulation of robotic systems.
                    </p>
                    <p className="mt-3 font-Roboto text-neutral-800 dark:text-neutral-400">
                        Recently, my professional focus has been on building 
                        <strong className="text-neutral-300"> scalable web applications and backend architecture</strong>. 
                        I have experience developing robust products with 
                        <strong className="text-neutral-300"> Laravel (PHP) and Python</strong>, as well as creating high-performance 
                        tools with <strong className="text-neutral-300">Go</strong>.
                    </p>
                    <p className="mt-3 font-Roboto text-neutral-800 dark:text-neutral-400">
                        Currently, I am exploring various topics that I am curious 
                        about, including <strong className="text-neutral-300">Control Theory, 
                        Physics Simulation, Reinforcement Learning
                        and Robot Programming(ROS/C++)</strong>.
                    </p>
                    <p className='mt-3 font-Roboto text-neutral-800 dark:text-neutral-400'>
                        Previously, I served as an Assistant Professor in the 
                        Digital Systems and Microprocessors Lab at the Central 
                        University of Venezuela, where I shared my passion for 
                        hardware-software integration.
                    </p>
                    <p className="mt-3 font-Roboto text-neutral-800 dark:text-neutral-400">
                        Some other interests I enjoy include, table tennis, 
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
                            href="https://www.linkedin.com/in/alefram"
                            passHref={true}
                        >
                            Linkedin
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="hover:text-blue-300 text-blue-600 
                            dark:hover:text-blue-600 dark:text-blue-300"
                            href="https://x.com/_Alefram_"
                            passHref={true}
                        >
                            X
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
