import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import { getSortedProjectsData } from '../lib/projects';

export default function Projects({allProjectsData}) {

    return (
        <div> 
            <Head>
                <title>Projects | Ale Blog</title>
                <meta 
                    name="description" 
                    content="My projects about AI and control systems" 
                />
                <meta name="author" content="Alexis Fraudita"/>
                <meta 
                    name="keywords" 
                    content="Machine Learning, Robotics, Electronics, 
                    Reinforcement Learning, Blog, Portfolio, Alexis Fraudita, 
                    Python, Pytorch, AI, control systems"
                />
                <meta 
                    property="title" 
                    content="Projects | Ale Blog" 
                />
                <meta 
                    property="url" 
                    content="https://alefram.github.io/Projects" 
                />
                <meta property="type" content="website" />
                <meta 
                    name="viewport" 
                    content="initial-scale=1.0, width=device-width" 
                    key="viewport" 
                />
                <meta name="robots" content="index, follow"/>
            </Head>

            <Navbar/>     

            <main className="mx-auto px-5 lg:max-w-screen-md">
                <div className="m-2 p-4 mt-10">   
                    <h1 
                        className="text-4xl text-center text-background 
                        font-bold font-nunito"
                    >
                        Projects
                    </h1>
                </div>
                <div>
                    <ul>
                        {allProjectsData.map(({ 
                            id, 
                            title, 
                            description, 
                            image, 
                            altImage 
                        }) => (
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
