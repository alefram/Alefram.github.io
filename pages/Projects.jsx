import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import { getSortedProjectsData } from '../lib/projects';

export default function Projects({allProjectsData}) {

    return (
        <div> 
            <Head>
                <title>Projects | Alexis Fraudita</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <style data-href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
                <style data-href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>
                <style data-href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
            </Head>

            <Navbar/>     

            <main className="mx-auto px-5 lg:max-w-screen-md">
                <div className="m-2 p-4">   
                    <h1 className=" prose text-5xl text-center text-background font-bebasNue">Projects</h1>
                </div>
                <div>
                    <ul>
                        {allProjectsData.map(({ id, title, description, image, altImage }) => (
                            <li key={id}>
                                <Project
                                    title={title}
                                    id={id}
                                    description={description}
                                    image={image}
                                    altImage={altImage}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            
            <Footer/>
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
};