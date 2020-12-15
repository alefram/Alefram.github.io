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
            </Head>

            <Navbar/> 
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date} />
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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