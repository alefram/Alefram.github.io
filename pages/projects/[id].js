import Head from 'next/head';
import { getAllProjectsIds, getProjectsData } from '../../lib/projects'
import Navbar from '../../components/Navbar'

function Projects({projectsData}) {
  return (
    <div>
      <Head>
          <title>{projectsData.title}</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/> 
      <main className="p-4">
        <div>
          <h1 className="text-4xl font-medium">{projectsData.id}</h1>
        </div>
        <div className=" mt-4 text-justify" dangerouslySetInnerHTML={{ __html: projectsData.contentHtml }} />
      </main>
    </div>  
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectsIds()
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  const projectsData = await getProjectsData(params.id)
  return {
    props: {
      projectsData
    }
  }
}


export default Projects