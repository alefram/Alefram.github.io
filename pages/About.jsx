import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';


const About = () => {
    console.log(process.env.LOCALROUTE)
    return (
        <div className="bg-background min-h-screen">
            <Head>
                <title>About me</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <style data-href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"></style>
                <style data-href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap"></style>           
            </Head>

            <Navbar/>     
        
            <main className="container mx-auto p-5 lg:max-w-screen-md min-h-screen">
                <div className="mb-4">
                    <div className="p-4">
                        <h1 className=" prose-xl text-center text-5xl text-gray-100  mb-4 font-bebasNue"> 
                            Who I am ?
                        </h1>
                    </div>
                    <div>
                        <div className="flex justify-center mb-4">
                            <img src="/images/me.jpg" className="rounded-xl w-40" alt="me"/>
                        </div>
                        <div>
                            <p className="md:mx-auto prose md:text-justify text-gray-50  font-nunito clear-left">
                                I am Electrical Engineer Student at Central University of Venezuela, also software developer interested in AI techniques specially in reinforcement learning and Federated Learning for control problems in robotics and embedded computers. Currently, i am working on my Bachelor thesis that is about a framework for create smart controllers in robots arms using Reinforcement Learning i hope in future do some tutorials about what i am learning in this area.
                            </p>
                            <p className="md:mx-auto prose md:text-justify font-nunito text-gray-50 mt-2">
                                I love technology in different areas and how it can be integrated for resolve real problems that people needs. I want to contribute in research in robotics for different kind of applications where the robot help humans to be better and not only take their jobs.
                            </p>
                            <p className="md:mx-auto prose md:text-justify font-nunito text-gray-50 mt-2">
                                Some others things and interests that i have are sports like table tennis, compose music and watch movies that for me is a source of inspiration.  
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 mt-20">
                    <h1 className="prose text-supertext text-4xl font-bebasNue text-center ">Contact Me</h1>
                    <div className="p-4 flex flex-row justify-center space-x-4">
                        <div>
                            <Link href="https://github.com/Alexfm101" passHref={true}>
                                <a><img alt="github" src="/images/github.png" className="w-8" /></a>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://www.linkedin.com/in/alexis-fraudita/" passHref={true}>
                                <a><img alt="linkedin" src="/images/linkedin.svg" className="w-8" /></a>
                            </Link>
                        </div>
                        <div>
                            <Link href="https://twitter.com/FrauditaAlexis" passHref={true}>
                                <a><img alt="twitter" src="/images/twitter.png" className="w-8" /></a>
                            </Link>
                        </div>
                    </div>
                </div>     
            </main>
        </div>
    );
};

// <div>Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>

{/* <p>
I am Alexis Fraudita but my girlfriend tells me Ale Ale. I am a electrical Engineer student from Venezuela, software developer and sometimes Table Tennis Player &#127955;.
</p>
<p>
I created this blog for share what I'm learning about Machine Learning techniques applied to Robotics, simulation and hardware, because i learn that is a good fun way to study and getting into the AI community. I hope you learn a lot and have fun making cool stuff.
</p> */}

export  default About;