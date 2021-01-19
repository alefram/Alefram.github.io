import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Navbar from '../../components/Navbar';
import Date from '../../components/Date';
import Footer from '../../components/Footer';

const Post = ({postData}) => {
  return (
        <div className="bg-background">
            <Head>
                <title>{postData.title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet"/>
            </Head>

            <Navbar/> 
            <main className="container mx-auto px-5 lg:max-w-screen-md">
              <div>
                <h1 className="text-5xl text-text font-bebasNue">{postData.id}</h1>
                <small className="mt-1 text-base text-text">
                  <Date dateString={postData.date}/>
                </small>
              </div>
              <div className=" mt-4 text-justify text-lg
               font-nunito text-text markdown" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </main>
            <footer>
              <Footer/>
            </footer>
        </div>  
    );
};

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
};

export default Post;