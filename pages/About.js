import Head from 'next/head';
import Navbar from '../components/Navbar'

function About() {

    return (
        <div>
            <Head>
                <title>Ale Ale Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>     
        
            <main className="p-4">
                <div className="mb-4">
                    <h1 className="text-center text-4xl text-gray-900 mb-4"> Who I am ?</h1>
                    <p className="text-justify">
                    I am Electrical Engineer Student at Central University of Venezuela, also software developer Interested in machine learning and robotics for aerospace and medical applications. Currently, i am working on my Bachelor thesis that is about a collection of Reinforcement Learning enviroments for a robot arm in different tasks.
                    </p>
                </div>

                <div className="mb-10">
                    <div className="mb-4">
                        <h1 className="text-center text-2xl text-blue-900 font-normal mb-2">
                            Education
                        </h1>
                        <div className="">
                            <ul>
                                <li>Electrical engineer student at Central University of Venezuela</li>
                            </ul>
                        </div>
                    </div>

                    <div className="">
                        <h1 className="text-center text-2xl  text-blue-900 mb-2">Interested</h1>
                        <div className="">
                            <ul>
                                <li>Tiny Machine Learning</li>
                                <li>Reinforcement Learning</li>
                                <li>Robotics</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="text-4xl font-bold text-center text-gray-900">Contact Me</h1>
                    <div className="p-4">
                        <div className="flex flex-col  mb-4">
                            <label className="mb-2 font-normal">Email</label>
                            <input className=" p-1 border rounded-md border-gray-900" type="email"/>
                        </div>
                        <div>
                            <label className="font-normal ">Message</label>
                            <textarea className=" mt-2 p-4 w-full border rounded-md border-gray-900" required rows="10"></textarea>
                        </div>
                        <button className="mt-8 bg-blue-600 p-2 rounded-lg text-white font-medium" type="submit">
                            Submit
                        </button>
                    </div>
                </div>     
            </main>
        </div>
    );
}

export  default About