import Head from 'next/head';
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import { getSortedPostsData } from '../lib/posts'

function Posts({allPostsData}) {
    return (
        <div className="bg-bgdark"> 
            <Head>
                <title>My posts</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:ital@0&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@800&display=swap" rel="stylesheet"></link>
            </Head>

            <Navbar/>     

            <main className="container mx-auto px-5 lg:max-w-screen-md">
                <div className="m-2 p-4">
                    <h1 className=" text-4xl text-center text-titles font-Alegreya">Posts</h1>
                </div>
                <div>
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
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
  
export default Posts