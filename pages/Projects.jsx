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

            </Head>

            <Navbar/>     

            <main className="mx-auto px-5 lg:max-w-screen-md">
                <div className="m-2 p-4">   
                    <h1 className="text-5xl text-center text-background font-semibold">Projects</h1>
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