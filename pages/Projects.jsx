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
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
        </Head>

        <Navbar/>     

        <main className="container mx-auto px-5 lg:max-w-screen-md">
            <div className="p-4">
                <h1 className="text-5xl text-center text-gray-100 font-bebasNue">Projects</h1>
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