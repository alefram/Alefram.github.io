import Head from 'next/head';
import Navbar from '../components/Navbar'
import Link from 'next/link'

function About() {

    return (
        <div>
            <Head>
                <title>Ale Ale Blog</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:ital@0&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@800&display=swap" rel="stylesheet"></link>
            </Head>

            <Navbar/>     
        
            <main className="p-4 lg:mx-80">
                <div className="mb-4">
                    <h1 className="text-center text-4xl
                     text-texts  mb-4 font-Alegreya"> Who I am ?</h1>
                    <p className="text-justify font-Roboto text-texts">
                    I am Electrical Engineer Student at Central University of Venezuela, also software developer Interested in machine learning and robotics for aerospace and medical applications. Currently, i am working on my Bachelor thesis that is about a collection of Reinforcement Learning enviroments for a robot arm in different tasks.
                    </p>
                </div>

                <div className="mb-10">
                    <div className="mb-4">
                        <h1 className="text-center text-3xl font-Alegreya text-blue-900 font-normal mb-2">
                            Education
                        </h1>
                        <div className="font-Roboto text-texts">
                            <ul>
                                <li>Electrical engineer student at Central University of Venezuela</li>
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-center text-3xl font-Alegreya text-blue-900 mb-2">Interested</h1>
                        <div className="font-Roboto text-texts">
                            <ul>
                                <li>Tiny Machine Learning</li>
                                <li>Reinforcement Learning</li>
                                <li>Robotics</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="text-4xl font-Alegreya text-center text-gray-900">Contact Me</h1>
                    <div className="p-4 flex flex-row justify-center">
                        <Link href="https://github.com/Alexfm101">
                            <img src="/github.png"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/alexis-fraudita/">
                            <img className="h-8 w-8 mx-5" src="/linkedin.png" alt=""/>
                        </Link>
                        <Link href="https://twitter.com/FrauditaAlexis">
                            <img className="h-8 w-8" src="/twitter.svg" alt=""/>
                        </Link>
                    </div>
                    <p className="text-center text-lg  text-gray-500">
                        cuatroalejandro@gmail.com
                    </p>
                </div>     
            </main>
        </div>
    );
}


export  default About