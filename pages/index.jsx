import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getSortedPostsData } from '../lib/posts';
import Post from '../components/Post';

export default function Home ({allPostsData}) {

    return (
        <div>
            <Head>
                <title>Alexis Fraudita</title>
                <meta name="description" content="Hey I'm Alexis Fraudita, I'm 
                software developer and I will share with you everything that i'm
                 learning about machine learning, electronics and more." 
                 />
                <meta name="author" content="Alexis Fraudita"/>
                <meta name="keywords" content="Machine Learning, Robotics, 
                Electronics, Reinforcement Learning, Blog, Portfolio, Alexis, 
                Fraudita, Alexis Fraudita, Python, Pytorch"
                />
                <meta property="og:title" content="Alexis Fraudita" />
                <meta property="og:description" content="Hey I'm Alexis Fraudita, 
                I'm software developer and I will share with you everything that 
                i'm learning about machine learning, electronics and more." 
                />
                <meta 
                    property="og:image" 
                    content="https://alexfm101.github.io/images/me.jpeg" 
                />
                <meta property="og:url" content="https://alexfm101.github.io/" />
                <meta property="og:type" content="website" />
                <meta 
                    name="viewport" content="initial-scale=1.0, 
                    width=device-width" key="viewport" 
                />
            </Head>

            <Navbar/>

            <main className="mx-auto md:px-8 lg:max-w-screen-md pt-10">
                <div className="flex pt-5 w-full">
                    <h1 className="text-gray-900 font-bold font-nunito
                     py-3 pr-2  md:text-3xl">
                        Welcome
                    </h1>
                    <p className='text-4xl md:text-3xl py-3'>&#128075;</p>
                </div>
                <p className='font-Roboto text-gray-700'>
                    Hi, I am Alexis, I create this blog for share my learning notes 
                    and projects about Machine learning applied to Robotics, 
                    Electronics and Music.
                </p>
                <div className="flex justify-center mt-20">
                    <p 
                        className="text-gray-600 font-bold text-5xl">
                        Stay soon
                    </p>
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

            
            </main>

            <Footer/>
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

// #202124
