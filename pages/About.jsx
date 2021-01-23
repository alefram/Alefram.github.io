import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    return (
        <div className="bg-background">
            <Head>
                <title>About me</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>


            </Head>

            <Navbar/>     
        
            <main className="container mx-auto px-5 lg:max-w-screen-md">
                <div className="mb-4">
                    <div className="p-4">
                        <h1 className="text-center text-5xl
                        text-gray-100  mb-4 font-bebasNue"> Who I am ?</h1>
                    </div>

                    <p className="text-justify font-nunito text-base text-gray-50">
                    I am Electrical Engineer Student at Central University of Venezuela, also software developer Interested in machine learning and robotics for aerospace and medical applications. Currently, i am working on my Bachelor thesis that is about a collection of Reinforcement Learning enviroments for a robot arm in different tasks.
                    </p>
                </div>
                <div className="mb-10">
                    <div className="mb-4">
                        <h1 className="text-center text-3xl font-bebasNue text-gray-100 font-normal mb-2">
                            Education
                        </h1>
                        <div className="font-nunito text-gray-50">
                            <ul>
                                <li>Electrical engineer student at Central University of Venezuela</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-center text-3xl font-bebasNue text-gray-100 font-normal mb-2">Interested</h1>
                        <div className=" font-nunito text-gray-50">
                            <ul>
                                <li>Tiny Machine Learning</li>
                                <li>Reinforcement Learning</li>
                                <li>Robotics</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <h1 className="text-4xl font-bebasNue text-center text-gray-100">Contact Me</h1>
                    <div className="p-4 flex flex-row justify-center space-x-4">
                        <div>
                            <Link href="https://github.com/Alexfm101">
                                <Image src="/images/github.svg" width={30} height={30}
                                />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.linkedin.com/in/alexis-fraudita/">
                                <Image src="/images/linkedin.svg" width={35} height={30}
                                />
                            </Link>
                        </div>
                        <div>
                            <Link href="https://twitter.com/FrauditaAlexis">
                                <Image src="/images/twitter.svg" width={30} height={30}/>
                            </Link>
                        </div>
                    </div>
                    <h5 className="text-center text-lg text-gray-100">
                        cuatroalejandro@gmail.com
                    </h5>
                </div>     
            </main>
        </div>
    );
};


export  default About;