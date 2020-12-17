import Head from 'next/head';
import Navbar from '../components/Navbar'
import  Project  from '../components/Project'
import { getSortedProjectsData } from '../lib/projects'

function Projects({allProjectsData}) {
    return (
      <div>
        <Head>
            <title>Ale Ale Blog</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:ital@0&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@800&display=swap" rel="stylesheet"></link>
        </Head>

        <Navbar/>     

        <main className="lg:mx-80">
            <div className="p-4">
                <h1 className=" text-center text-4xl text-texts font-Alegreya">Projects</h1>
            </div>
            <div className="p-1">
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
  }
  
export default Projects