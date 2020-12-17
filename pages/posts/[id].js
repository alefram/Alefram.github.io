import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts'
import Navbar from '../../components/Navbar'
import Date from '../../components/Date'

function Post({postData}) {
  return (
        <div>
            <Head>
                <title>{postData.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto:ital@0&display=swap" rel="stylesheet"/>
            </Head>

            <Navbar/> 
            <main className="p-4">
              <div>
                <h1 className="text-4xl font-Alegreya font-semibold ">{postData.id}</h1>
                <small className="mt-1">
                  <Date dateString={postData.date}/>
                </small>
              </div>
              <div className=" mt-4 text-justify font-Roboto" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </main>
        </div>  
    );
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default Post