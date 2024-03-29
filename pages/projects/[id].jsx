import Head from 'next/head';
import { getAllProjectsIds, getProjectsData } from '../../lib/projects';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Project = ({projectData}) => {
	return (
		<div>
			<Head>
				<title>{projectData.title}</title>
				<meta name="description" content={projectData.description}/>
				<meta name="author" content="Alexis Fraudita"/>
				<meta name="keywords" content={projectData.keywords}/>
				<meta property="title" content={projectData.title} />
                <meta property="url" content={`https://alefram.github.io/projects/${projectData.title}`} />
                <meta property="type" content="website" />
                <meta 
                    name="viewport" content="initial-scale=1.0, 
                    widt
                    h=device-width" key="viewport" 
                />
                <meta name="robots" content="index, follow"/>
                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content={`https://alefram.github.io/projects/${projectData.title}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={projectData.title}/>
                <meta property="og:description" content={projectData.description}/>
                <meta property="og:image" content="🏓"/>
                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_short_image"/>
                <meta property="twitter:domain" content="alefram.github.io"/>
                <meta property="twitter:url" content={`https://alefram.github.io/projects/${projectData.title}`}/>
                <meta name="twitter:title" content={projectData.title}/>
                <meta name="twitter:description" content={projectData.description}/>
                <meta name="twitter:image" content="🏓"/> 
			</Head>

			<Navbar/> 
			<main className="mt-10 px-4 md:px-2 ">

					<div className='mx-auto max-w-2xl'>
						<h1 className="text-2xl md:text-4xl text-neutral-900  dark:text-neutral-100 font-bold font-nunito">
							{projectData.title}
						</h1>
                        <article 
                            className="text-base max-w-2xl mt-10 font-Roboto markdown prose 
                             prose-blue text-neutral-800 dark:text-neutral-400 dark:prose-invert" 
                            dangerouslySetInnerHTML={{ 
                                __html: projectData.contentHtml 
                            }} 
                        />
					</div>
			</main>
			<Footer/>
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

export default Project;
