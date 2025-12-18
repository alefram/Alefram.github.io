import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getSortedPostsData } from '../lib/posts';
import Post from '../components/Post';

export default function Software({ posts }) {

    return (
        <div>
            <Head>
                <title>Software Engineering | Ale Blog</title>
                <meta name="description" content="A collection of articles about Software Engineering." />
                <meta name="author" content="Alexis Fraudita"/>
                <meta name="keywords" content="Software Engineering, Blog, Portfolio, Alexis Fraudita, Python" />
                <meta property="title" content="Software Engineering | Ale Blog" />
                <meta property="url" content="https://alefram.github.io/software" />
                {/* Add other meta tags as needed */}
            </Head>

            <Navbar/>

            <main className="mx-auto md:px-8 lg:max-w-screen-md pt-10">

                <div className="flex pt-5 w-full">
                    <h1 className="text-neutral-900 dark:text-neutral-100 font-bold font-nunito
                     py-3 pr-2 ml-3 text-2xl md:ml-0 md:text-4xl">
                        Software Engineering
                    </h1>
                </div>
                <p className="font-Roboto text-neutral-800 dark:text-neutral-400 px-3 md:p-0 mt-2">
                    Here, I share articles on software development topics and insights from my professional experiences.
                </p>

                <div className="mt-10 px-3 md:p-0">
                    {posts.length > 0 ? (
                        <ul className='mt-4'>
                            {posts.map((post) => (
                                <Post key={post.id} post={post}/>
                            ))}
                        </ul>
                    ) : (
                        <p className="font-Roboto text-neutral-800 dark:text-neutral-400">
                            No articles in this category yet. Stay tuned!
                        </p>
                    )}
                </div>
            </main>

            <Footer/>
        </div>
    );
};

export async function getStaticProps() {
    const posts = getSortedPostsData({ category: 'Software Engineering' });
    return {
        props: {
            posts
        }
    }
}
