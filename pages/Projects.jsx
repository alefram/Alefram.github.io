import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import { getSortedProjectsData } from '../lib/projects';

export default function Projects({allProjectsData}) {

    return (
        <div className="bg-background min-h-screen"> 
            <Head>
                <title>Projects | Alexis Fraudita</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <style data-href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
                <style data-href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>
                <style data-href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
            </Head>

            <Navbar/>     

            <main className="mx-auto px-5 lg:max-w-screen-md">
                <div className="m-2 p-4">   
                    <h1 className=" prose text-5xl text-center text-gray-100 font-bebasNue">Projects</h1>
                </div>
                <div>
                    <div className="flex justify-center mt-10">
                        <p className="text-gray-400 font-banger text-4xl">Coming soon</p>
                    </div>
                    {/* <ul>
                        {allProjectsData.map(({ id, date, title }) => (
                            <li key={id}>
                                <Project
                                    title={title}
                                    date={date}
                                    id={id}
                                />
                            </li>
                        ))}
                    </ul> */}
                </div>
            </main>
            
            <Footer/>
        </div>
    );
}

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
      props: {
        allProjectsData
      }
    }
};