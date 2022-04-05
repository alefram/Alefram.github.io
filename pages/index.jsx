import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import { getSortedPostsData } from '../lib/posts';
// import Post from '../components/Post';
import Project from '../components/Project';
import { getLastProjects } from '../lib/projects';

const Home = ({lastProjectsData}) => {

  return (
    <div>
        <Head> 
            <title>Alexis Fraudita</title> 
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <meta name="description" content="Hey I'm Alexis Fraudita, I'm software developer and I will share with you everything that i'm learning about machine learning, electronics and more." />
            <style data-href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>
            <style data-href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
        </Head>
       
        <Navbar/>

        <main className=" mt-5 mx-auto md:px-8 lg:max-w-screen-md">
            <div className="max-w-screen-md mx-4">
                <div className="flex">
                    <p className="w-10 text-gradient bg-gradient-to-br from-blue-600 to-supertext font-banger text-2xl  md:text-3xl md:w-14">Hey</p>
                    <p className="text-2xl md:text-3xl"> &#128075;</p>
                </div>
                <p className=" text-background font-nunito text-base">
                    I am Alexis, I am Electrical Engineer student and I will share with you everything about what I am learning in machine learning in robotics, electronics and more.
                </p>
            </div>
            <div className='mt-10'>
                <h1 className="text-gradient bg-gradient-to-br from-blue-600 to-supertext font-banger text-2xl mx-4 md:text-3xl">
                        My Projects
                </h1>
                <ul className='mx-5'>
                    {lastProjectsData.map(({ id, title, description, image, altImage }) => (
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
                <div className="mt-5 text-center">
					<Link href="/Projects">
						<a className="text-gray-600 font-nunito text-base hover:underline">
							see more...
						</a>
					</Link>
				</div>
            </div>
            <div className="mt-10">
                <h1 className="text-gradient bg-gradient-to-br from-blue-600 to-supertext font-banger text-2xl mx-4 md:text-3xl">
                    My Last Posts
                </h1>
                
                <div className="flex justify-center mt-10">
                    <p className="text-gray-600 font-banger text-4xl">Coming soon</p>
                </div>
                {/* <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            <Post
                                title={title}
                                date={date}
                                id={id}
                            />
                        </li>
                    ))}
                </ul> */}
            </div>
        </main>
        <Footer/>

    </div>
  );
};

export async function getStaticProps() {
    const lastProjectsData = getLastProjects('TEG');
//  const allPostsData = getSortedPostsData()

    return {
        props: {
            lastProjectsData,
//          allPostsData
        }
    }
};


export default Home;
// #202124
