import Head from 'next/head';
import Navbar from '../components/Navbar'
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
            <div>
                <ul>
                    {allProjectsData.map(({ id, date, title }) => (
                        <li key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            {date}
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