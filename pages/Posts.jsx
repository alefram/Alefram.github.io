import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Post from '../components/Post';
import { getSortedPostsData } from '../lib/posts';

export default function Posts() {

    return (
        <div> 
            <Head>
                <title>Posts | Alexis Fraudita</title>

            </Head>

            <Navbar/>     

            <main className="mx-auto px-5 lg:max-w-screen-md">
                <div className="m-2 p-4">   
                    <h1 className="text-5xl text-center text-background font-semibold">Posts</h1>
                </div>
                <div>
                    <div className="flex justify-center mt-10">
                        <p className="text-gray-600 font-bold text-4xl">Coming soon</p>
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
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
};