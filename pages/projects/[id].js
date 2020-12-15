import Head from 'next/head';
import { getAllProjectsIds, getProjectsData } from '../../lib/projects'
import Navbar from '../../components/Navbar'
import Date from '../../components/Date'

function Projects({projectsData}) {
  return (
    <div>
      <Head>
          <title>{projectsData.title}</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/> 
      <br />
      {projectsData.id}
      <br />
      <Date dateString={projectsData.date} />
      <div dangerouslySetInnerHTML={{ __html: projectsData.contentHtml }} />
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