import Head from 'next/head';
import { getAllProjectsIds, getProjectsData } from '../../lib/projects';
import Navbar from '../../components/Navbar';
import Date from '../../components/Date';
import Footer from '../../components/Footer';

const Post = ({projectData}) => {
  return (
        <div className="bg-background">
            <Head>
                <title>{projectData.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <style data-href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
                <style data-href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
            </Head>

            <Navbar/> 
            <main className="container mx-auto px-5 lg:max-w-screen-md">
                <div>
                    <h1 className="text-5xl text-supertext font-bebasNue">{projectData.id}</h1>
                    <small className="mt-1 text-base text-gray-400">
                        <Date dateString={projectData.date}/>
                    </small>
                </div>
                <div 
                    className=" prose-lg text-justify mt-4 font-nunito text-gray-50 markdown" 
                    dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} 
                />
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
  const projectData = await getProjectsData(params.id)
  return {
    props: {
      projectData
    }
  }
};

export default Post;