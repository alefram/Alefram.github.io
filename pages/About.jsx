import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    return (
        <div className="bg-background min-h-screen">
            <Head>
                <title>About me</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>

            </Head>

            <Navbar/>     
        
            <main className="container mx-auto p-5 lg:max-w-screen-md min-h-screen">
                <div className="mb-4">
                    <div className="p-4">
                        <h1 className=" prose-xl text-center text-5xl text-gray-100  mb-4 font-bebasNue"> 
                            Who I am ?
                        </h1>
                    </div>
                    <div className="">
                        <img src="/images/me.jpg" className=" w-40 rounded-xl float-right p-2 mt:m-4" alt=""/>
                        <div>
                            <p className=" md:mx-auto prose md:text-justify text-gray-50  font-nunito clear-left">
                                I am Electrical Engineer Student at Central University of Venezuela, also software developer interested in AI techniques specially in reinforcement learning and Federated Learning for control problems in robotics and embedded computers. Currently, i am working on my Bachelor thesis that is about a framework for create smart controllers in robots arms using Reinforcement Learning i hope in future do some tutorials about what i am learning in this area.
                            </p>
                            <p className=" md:mx-auto prose md:text-justify font-nunito text-gray-50 mt-2">
                                I love technology in different areas and how it can be integrated for resolve real problems that people needs. I want to contribute in research in robotics for different kind of applications where the robot help humans to be better and not only take their jobs. I like sports like table tennis, compose music and watch movies that for me is a source of inspiration.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 mt-20">
                    <h1 className="prose text-supertext text-4xl font-bebasNue text-center ">Contact Me</h1>
                    <div className="p-4 flex flex-row justify-center space-x-4">
                        <div>
                            <Link href="https://github.com/Alexfm101">
                                <Image src="/images/github.png" width={30} height={30}
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
                                <Image src="/images/twitter.png" width={30} height={30}/>
                            </Link>
                        </div>
                    </div>
                </div>     
            </main>
        </div>
    );
};

// <div>Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>


export  default About;