import Head from 'next/head';
import { getAllProjectsIds, getProjectsData } from '../../lib/projects';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Projects = ({projectsData}) => {
  return (
    <div className="bg-background">
      <Head>
          <title>{projectsData.title}</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
      </Head>
      
      <Navbar/> 

      <main className="container mx-auto px-5 lg:max-w-screen-md">
        <div>
          <h1 className="text-5xl font-bebasNue text-supertext">{projectsData.id}</h1>
        </div>
        <div className=" mt-6 text-justify font-Roboto text-gray-50" dangerouslySetInnerHTML={{ __html: projectsData.contentHtml }} />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>  
  );
};

export async function getStaticPaths() {
  const paths = getAllProjectsIds()
  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps({ params }) {
  const projectsData = await getProjectsData(params.id)
  return {
    props: {
      projectsData
    }
  }
};


export default Projects;