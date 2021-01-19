import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import  Project  from '../components/Project';
import { getSortedProjectsData } from '../lib/projects';

const Projects = ({allProjectsData}) => {
    return (
      <div className="bg-background">
        <Head>
            <title>My Projects  </title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:ital@0&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@800&display=swap" rel="stylesheet"></link>
        </Head>

        <Navbar/>     

        <main className="container mx-auto px-5 lg:max-w-screen-md">
            <div className="p-4">
                <h1 className="text-5xl text-center text-title font-Alegreya">Projects</h1>
            </div>
            <div>
                <ul>
                    {allProjectsData.map(({ id, description, title }) => (
                        <li key={id}>
                          <Project
                            title={title}
                            description={description}
                            id={id}
                          />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
};

export async function getStaticProps() {
    const allProjectsData = getSortedProjectsData()
    return {
      props: {
        allProjectsData
      }
    }
};
  
export default Projects;