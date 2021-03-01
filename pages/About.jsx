import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
    return (
        <div className="bg-background ">
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

                    <img src="/images/me.jpg" className=" w-40 rounded-xl float-right p-2" alt=""/>
                    <p className="text-justify font-nunito text-base text-gray-50 clear-left">
                        I am Electrical Engineer Student at Central University of Venezuela, also software developer Interested in AI techniques specially in reinforcement learning for control problems in robotics and computers like quantum computers. Currently, i am working on my Bachelor thesis that is about a framework for create smart controllers in robots arms using Reinforcement Learning i hope in future do some tutorials about what i am learning it this area.
                    </p>
                    <p className="text-justify font-nunito text-base text-gray-50 mt-2">
                        I love technology in different areas and how it can be integrated for resolve real problems that people needs. I want to contribute in research in robotics for medical applications how surgery in remote places or help people with neurodevelopmental disorders and maybe in future how it can be integrated in space explorations. I like, sports like table tennis and movies that for me is a source of inspirations.
                    </p>
                </div>
                <div className="p-4">
                    <h1 className="text-4xl font-bebasNue text-center text-supertext">Contact Me</h1>
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
                    <h5 className="text-center text-lg text-gray-100">
                        cuatroalejandro@gmail.com
                    </h5>
                </div>     
            </main>
        </div>
    );
};

// <div>Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>


export  default About;