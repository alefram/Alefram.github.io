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
        </Head>

        <Navbar/>     

        <main>
            <div className="p-4">
                <h1 className=" text-center text-4xl text-gray-900">Projects</h1>
            </div>
            <div className="p-1">
                <ul>
                    {allProjectsData.map(({ id, date, title }) => (
                        <li key={id}>
                          <Project
                            title={title}
                            date={date}
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