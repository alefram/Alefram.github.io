import Head from 'next/head';
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import { getSortedPostsData } from '../lib/posts'

function Posts({allPostsData}) {
    return (
        <div>
            <Head>
                <title>Ale Ale Blog</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:ital@1&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Alegreya:wght@800&display=swap" rel="stylesheet"></link>
            </Head>

            <Navbar/>     

            <main>
                <div className="p-4">
                    <h1 className=" text-4xl text-center text-gray-900 font-Alegreya">Posts</h1>
                </div>
                <div  className="p-1">
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