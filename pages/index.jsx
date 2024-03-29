import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getSortedPostsData } from '../lib/posts';
import Post from '../components/Post';

export default function Home ({posts}) {

    return (
        <div>
            <Head>
                <title>Ale Blog</title>
                <meta name="description" content="Hey I'm Alex, and I will share
                with you, my learning notes and projects about control and robotics" 
                 />
                <meta name="author" content="Alexis Fraudita"/>
                <meta name="keywords" content="Machine Learning, Robotics, Electronics, 
                    Reinforcement Learning, Blog, Portfolio, Alexis Fraudita, 
                    Python, AI, control systems"
                />
                <meta property="title" content="Ale Blog" />
                <meta property="url" content="https://alefram.github.io/" />
                <meta property="type" content="website" />
                <meta 
                    name="viewport" content="initial-scale=1.0, 
                    widt
                    h=device-width" key="viewport" 
                />
                <meta name="robots" content="index, follow"/>
                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://alefram.github.io/"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Ale Blog"/>
                <meta property="og:description" content="Hey I'm Alex, and I will share
                with you, my learning notes and projects about control and robotics"/>
                <meta property="og:image" content="🏓"/>

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_short_image"/>
                <meta property="twitter:domain" content="alefram.github.io"/>
                <meta property="twitter:url" content="https://alefram.github.io/"/>
                <meta name="twitter:title" content="Ale Blog"/>
                <meta name="twitter:description" content="Hey I'm Alex, and I will share
                with you, my learning notes and projects about control and robotics"/>
                <meta name="twitter:image" content="🏓"/> 
            </Head>

            <Navbar/>

            <main className="mx-auto md:px-8 lg:max-w-screen-md pt-10">

                <div className="flex pt-5 w-full">
                    <h1 className="text-neutral-900 dark:text-neutral-100 font-bold font-nunito
                     py-3 pr-2 ml-3 text-2xl md:ml-0 md:text-4xl">
                        Welcome
                    </h1> 
                    <p className='text-2xl md:text-3xl py-3'>&#128075;</p>
                </div>

                <p className="font-Roboto text-neutral-800 dark:text-neutral-400 px-3 md:p-0">
                    Hey I&apos;m Alex, and I will share with you my learning notes
                    and projects about Robotics and AI.
                </p>

                <div className="mt-20 px-3 md:p-0">
                    <h1 className='font-bold font-sans text-neutral-900 dark:text-neutral-200 text-lg lg:text-3xl'>
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
    const posts = getSortedPostsData();
    return {
        props: {
            posts
        }
    }
}
