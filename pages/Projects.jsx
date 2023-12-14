import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import { getSortedProjectsData } from '../lib/projects';

export default function Projects({projects}) {

    return (
        <div> 
            <Head>
                <title>Projects | Ale Blog</title>
                <meta 
                    name="description" 
                    content="Here are a few projects I've worked on."
                    key="desc" 
                />
                <meta name="author" content="Alexis Fraudita"/>
                <meta 
                    name="keywords" 
                    content="Machine Learning, Robotics, Electronics, 
                    Reinforcement Learning, Blog, Portfolio, Alexis Fraudita, 
                    Python, Pytorch, AI, control systems"
                />
                <meta 
                    property="title" 
                    content="Projects | Ale Blog" 
                />
                <meta 
                    property="url" 
                    content="https://alefram.github.io/Projects" 
                />
                <meta property="type" content="website" />
                <meta 
                    name="viewport" 
                    content="initial-scale=1.0, width=device-width" 
                    key="viewport" 
                />
                <meta name="robots" content="index, follow"/>

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://alefram.github.io/Projects"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Projects | Ale Blog"/>
                <meta property="og:description" content="Here are a few projects I've worked on."/>
                <meta property="og:image" content="🏓"/>

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_short_image"/>
                <meta property="twitter:domain" content="alefram.github.io"/>
                <meta property="twitter:url" content="https://alefram.github.io/Projects"/>
                <meta name="twitter:title" content="Projects | Ale Blog"/>
                <meta name="twitter:description" content="Here are a few projects I've worked on."/>
                <meta name="twitter:image" content="🏓"/>        
            </Head>

            <Navbar/>     

            <main className="mx-auto px-5 lg:max-w-screen-md">
                <div className="m-2 p-4 mt-10">   
                    <h1 
                        className="text-4xl text-center text-neutral-900 dark:text-neutral-100
                        font-bold font-nunito"
                    >
                        Projects
                    </h1>
                </div>
                <div>
                    <ul>
                        {projects.map(({ 
                            id, 
                            title, 
                            description, 
                            image, 
                            altImage 
                        }) => (
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
    const projects = getSortedProjectsData()
    return {
      props: {
        projects
      }
    }
};
