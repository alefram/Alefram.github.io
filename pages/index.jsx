import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getSortedPostsData } from '../lib/posts';
import Post from '../components/Post';

export default function Home ({posts}) {
  
    return (
        <div>
            <Head>
                <title>Alexis Fraudita</title>
                <meta name="description" content="Hey I'm Alexis Fraudita, I'm 
                Electrical Engineer and I will share with you everything that I'm
                learning about Machine Learning, Electronics and more." 
                 />
                <meta name="author" content="Alexis Fraudita"/>
                <meta name="keywords" content="Machine Learning, Robotics, 
                Electronics, Reinforcement Learning, Blog, Portfolio, Alexis, 
                Fraudita, Alexis Fraudita, Python, Pytorch"
                />
                <meta property="og:title" content="Alexis Fraudita" />
                <meta property="og:description" content="Hey I'm Alexis Fraudita, 
                I'm Electrical Engineer and I will share with you everything that 
                I'm learning about Machine Learning, Electronics and more." 
                />
                <meta 
                    property="og:image" 
                    content="https://alefram.github.io/images/me.jpeg" 
                />
                <meta property="og:url" content="https://alefram.github.io/" />
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
                     py-3 pr-2 ml-3 text-2xl md:ml-0 md:text-4xl">
                        Welcome
                    </h1> 
                    <p className='text-2xl md:text-3xl py-3'>&#128075;</p>
                </div>
                <p className='font-Roboto text-gray-700 px-3 md:p-0'>
                    Hi, I am Alexis, I create this blog for share my learning notes 
                    and projects about AI, robotics and music.
                </p>
                <div className="mt-20  px-3 md:p-0">
                    <h1 className='font-bold font-sans text-zinc-800 text-lg lg:text-2xl'>
                        Blog
                    </h1>

                    <ul className='mt-4'>
                        {posts.map((post) => (
                            <Post key={post.id} post={post}/>
                        ))}
                    </ul>
                </div>
            </main>

            <Footer/>
        </div>
    );
};


export async function getStaticProps() {
    const posts = await getSortedPostsData();
    return {
      props: {
        posts: JSON.parse(JSON.stringify(posts))
      }
    }
}
