import Head from 'next/head';
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ale Ale Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="pt-2">
        <Navbar/>     
      </nav>
      
      <main className="mx-2">

        <div className='text-center mt-6 mb-10'>
          <h1 className="text-4xl ml-4 mb-2 font-semibold text-gray-900"> Who I am ?</h1>

          <p className="text-gray-900 text-justify mx-3">
            I am Electrical Engineer Student at Central University of Venezuela, also software developer Interested in machine learning and robotics for aerospace and medical applications. Currently, i am working on my Bachelor thesis that is about a collection of Reinforcement Learning enviroments for a robot arm in different tasks.
          </p>
        </div>

        <div>

          <div>
            <h1 className=" text-2xl font-medium text-blue-800">Education</h1>
            <div className="ml-4 text-gray-900">
              <ul>
                <li>Electrical engineer student at Central University of Venezuela</li>
              </ul>
            </div>
          </div>

          <div className="mt-2">
            <h1 className=" text-2xl font-medium text-blue-800">Interested</h1>
            <div className="ml-4 text-gray-900">
              <ul>
                <li>Tiny Machine Learning</li>
                <li>Reinforcement Learning</li>
                <li>Robotics</li>
              </ul>
            </div>
          </div>

        </div>     
        
      </main>

      <footer className="">

      </footer>
    </div>
  );
}
