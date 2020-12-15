import Layout from '../../components/layout'
import { getAllProjectsIds, getProjectsData } from '../../lib/projects'

function Projects({projectsData}) {
  return <Layout>...</Layout>
}

export async function getStaticPaths() {
  const paths = getAllProjectsIds()
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps({ params }) {
  const projectsData = getProjectsData(params.id)
  return {
    props: {
      projectsData
    }
  }
}


export default Projects