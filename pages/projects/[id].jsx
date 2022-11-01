import Head from 'next/head';
import { getAllProjectsIds, getProjectsData } from '../../lib/projects';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Post = ({projectData}) => {
	return (
		<div>
			<Head>
				<title>Project | {projectData.title}</title>
				<meta name="author" content="Alexis Fraudita"/>
				<meta 
					name="keywords" 
					content="Machine Learning, Robotics, Electronics, 
					Reinforcement Learning, Blog, Portfolio, Alexis, Fraudita, 
					Alexis Fraudita, Python, Pytorch"
				/>
				<meta property="og:title" content={projectData.title} />
				<meta property="og:description" content={projectData.description}/>
				<meta property="og:type" content="article"/>
				<meta 
					property="og:url" 
					content={
					`https://alexfm101.github.io/projects/${projectData.title}`
					} 
				/>
			</Head>

			<Navbar/> 
			<main className="mt-10 mx-auto max-w-screen-sm px-4 md:px-2">
					<div>
						<h1 className="text-4xl text-supertext font-bold font-nunito">
							{projectData.title}
						</h1>
					</div>
					<div 
						className="text-justify mt-4 font-Roboto markdown prose 
						 prose-blue text-background text-base 2xl:text-lg" 
						dangerouslySetInnerHTML={{ 
							__html: projectData.contentHtml 
						}} 
					/>
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

export default Post;