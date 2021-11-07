import Head from 'next/head';
import Navbar from '../components/Navbar';
import { getSortedPostsData } from '../lib/posts';
import Post from '../components/Post';

const Home = ({allPostsData}) => {

  return (
    <div className="bg-background min-h-screen">
        <Head> 
            <title>Aleale Blog</title> 
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            <meta name="description" content="Hey I'm Alexis Fraudita, I'm software developer and I will share with you everything that i'm learning about machine learning, electronics and more." />
            <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
        </Head>
       
        <Navbar/>

        <main className=" mt-5 mx-auto md:px-8 lg:max-w-screen-md">
            <div className="max-w-screen-md mx-4">
                <p className=" text-gray-100 font-banger text-2xl ">Hey 👋</p>
                <p className=" text-gray-400 font-nunito text-base">
                    I'm Alexis Fraudita, I'm Electrical Engineer student and I will share with you everything that i'm learning about machine learning in robotics, electronics and more.
                </p>
            </div>
            <div className="mt-10">
                <h1 className="text-gray-100 font-banger text-2xl max-w-screen-md mx-4">Posts</h1>
                <ul>
                    {allPostsData.map(({ id, date, title }) => (
                        <li key={id}>
                            <Post
                                title={title}
                                date={date}
                                id={id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    </div>
  );
};

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
};

export default Home;
// #202124
