import Head from 'next/head';
import Navbar from '../components/Navbar'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date'

function Posts({allPostsData}) {
    return (
        <div>
            <Head>
                <title>Ale Ale Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar/>     

            <main>
                <div className="p-4">
                    <h1 className=" text-4xl text-center text-gray-900">Posts</h1>
                </div>
                <div>
                    <ul>
                        {allPostsData.map(({ id, date, title }) => (
                            <li key={id}>
                                <Link href={`/posts/${id}`}>
                                    <a>{title}</a>
                                </Link>
                                <small>
                                    <Date dateString={date} />
                                </small>
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