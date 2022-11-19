import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/dist/client/link';

const About = () => {

    return (
        <div>
            <Head>
                <title>About | Alexis Fraudita</title>
                <meta name="description" content="Hey I'm Alexis Fraudita, I'm 
                software developer and I will share with you everything that i'm
                 learning about machine learning, electronics and more." 
                 />
                <meta name="author" content="Alexis Fraudita"/>
                <meta name="keywords" content="Machine Learning, Robotics, 
                Electronics, Reinforcement Learning, Blog, Portfolio, Alexis, 
                Fraudita, Alexis Fraudita, Python, Pytorch"
                />
                <meta property="og:title" content="Alexis Fraudita" />
                <meta property="og:description" content="Hey I'm Alexis Fraudita, 
                I'm software developer and I will share with you everything that 
                i'm learning about machine learning, electronics and more." 
                />
                <meta 
                    property="og:image" 
                    content="https://alefram.github.io/images/me.jpeg" 
                />
                <meta property="og:url" content="https://alefram.github.io/" />
                <meta property="og:type" content="website" />
                <meta 
                    name="viewport" content="initial-scale=1.0, 
                    width=device-width" key="viewport" 
                />
            </Head>

            <Navbar/>

            <main className="mx-auto md:px-8 lg:max-w-screen-md pt-10">
                <div className="flex pt-5 w-full">
                    <h1 className="text-gray-900 font-bold font-Roboto
                     ml-3 py-3 pr-3  md:text-3xl">
                        Hi 
                    </h1>
                    <p className='text-4xl md:text-3xl py-2'>&#128075;</p>
                </div>
                <div className="max-w-screen-md mx-4">

                    <p className="mt-2 font-Roboto  text-gray-600">
                        My name is Alexis Fraudita, I&apos;m Electrical Engineer
                        and Software Developer from Venezuela 🇻🇪.
                    </p>
                    <p className="font-Roboto  text-gray-600 mt-2">
                         I&apos;m very interested in Robot Learning and the hardware
                        for robotics, so I decided to create this blog to share
                        my projects and learning notes in these fields.
                    </p>
                    <p className='mt-2 font-Roboto text-gray-600'>
                    I&apos;m currently working on &rdquo;TEG&rdquo;, which is a set of reinforcement
                    learning environments and tools for develop smart controllers 
                    for robot manipulators, it started as my bachelor thesis but 
                    now, I want to convert it in a open source project for the 
                    community.
                    </p>
                    <p className="font-Roboto text-gray-600 mt-2">
                        Some others things and interests that I enjoy are sports
                        like table tennis, compose music, videogames  and watch 
                        movies that for me is a source of inspiration.
                    </p>
                </div>

                <div className="p-4 mt-5">
                    <h1 
                        className=" text-supertext text-2xl font-bold 
                        text-center font-nunito">
                        Also you can Find me On
                    </h1>
                    <div className="p-4 flex flex-row justify-center space-x-4">
                        <div>
                            <Link 
                                href="https://github.com/alefram" 
                                passHref={true}
                            >
                                <a>
                                    <img 
                                        alt="github" 
                                        src="/images/github.svg" 
                                        className="w-8"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link 
                                href="https://www.linkedin.com/in/alexis-fraudita/" 
                                passHref={true}
                            >
                                <a>
                                    <img 
                                        alt="linkedin" 
                                        src="/images/linkedin.svg" 
                                        className="w-8"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div>
                            <Link 
                                href="https://twitter.com/FrauditaAlexis" 
                                passHref={true}
                            >
                                <a>
                                    <img 
                                        alt="twitter" 
                                        src="/images/twitter.svg" 
                                        className="w-8" 
                                    />
                                </a>
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