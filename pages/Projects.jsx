import Head from 'next/head';
import Image from 'next/image';
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
                    <h2 className="font-bold text-xl">Personal</h2>
                    <ul className="mt-4">
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
                <div className="mt-10">
                    <h2 className="font-bold text-xl">Contributions</h2>
                    <ul className="mt-5 space-y-5">
                        <li className="flex items-center">
                            <a href="https://github.com/google-deepmind/mujoco/commits?author=alefram" className="mr-2">
                                <Image src="/images/github.svg" alt="MuJoCo GitHub link" width={20} height={20} />
                            </a>
                            <a className="underline text-blue-600 hover:text-blue-300 
                                dark:text-blue-300 dark:hover:text-blue-600" 
                                href="https://github.com/google-deepmind/mujoco/commits?author=alefram">
                                MuJoCo
                            </a>
                            &nbsp;-&nbsp;
                            <span className="text-neutral-800 dark:text-neutral-400">
                                A general purpose physics simulator
                            </span>
                        </li>
                        <li className="flex items-center">
                            <a href="https://github.com/taecontrol/moonguard" className="mr-2">
                                <Image src="/images/github.svg" alt="MoonGuard GitHub link" width={20} height={20} />
                            </a>
                            <a className="underline text-blue-600 hover:text-blue-300 
                                dark:text-blue-300 dark:hover:text-blue-600" 
                                href="https://github.com/taecontrol/moonguard">
                                MoonGuard
                            </a>
                            &nbsp;-&nbsp;
                            <span className="text-neutral-800 dark:text-neutral-400">
                                A Filament plugin to monitor multiple Laravel Apps.
                            </span>
                        </li>
                        <li className="flex items-center">
                            <a href="https://github.com/taecontrol/larvis" className="mr-2">
                                <Image src="/images/github.svg" alt="Larvis GitHub link" width={20} height={20} />
                            </a>
                            <a className="underline text-blue-600 hover:text-blue-300 
                                dark:text-blue-300 dark:hover:text-blue-600" 
                                href="https://github.com/taecontrol/larvis">
                                Larvis
                            </a>
                            &nbsp;-&nbsp;
                            <span className="text-neutral-800 dark:text-neutral-400">
                                A PHP package for Laravel that allows sending information to MoonGuard.
                            </span>
                        </li>
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
