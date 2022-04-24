import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import { getSortedProjectsData } from '../lib/projects';

export default function Projects({allProjectsData}) {

    return (
        <div> 
            <Head>
                <title>Projects | Alexis Fraudita</title>
                <meta name="description" content="Here There are my projects about Machine Learning, Robotics and Electronics that are my personal portfolio" />
                <meta name="author" content="Alexis Fraudita"/>
                <meta name="keywords" content="Machine Learning, Robotics, Electronics, Reinforcement Learning, Blog, Portfolio, Alexis, Fraudita, Alexis Fraudita, Python, Pytorch"/>
                <meta property="og:title" content="Projects | Alexis Fraudita" />
                <meta property="og:description" content="Here There are my projects about Machine Learning, Robotics and Electronics that are my personal portfolio" />
                <meta property="og:url" content="https://alexfm101.github.io/Projects" />
                <meta property="og:type" content="website" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>

            <Navbar/>     

            <main className="mx-auto px-5 lg:max-w-screen-md">
                <div className="m-2 p-4">   
                    <h1 className="text-5xl text-center text-background font-bold">Projects</h1>
                </div>
                <div>
                    <ul>
                        {allProjectsData.map(({ id, title, description, image, altImage }) => (
                            <li key={id}>
                                <Project
                                    title={title}
                                    id={id}
                                    description={description}
                                    image={image}
                                    altImage={altImage}
                                />
                            </li>
                        ))}
                    </ul>
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