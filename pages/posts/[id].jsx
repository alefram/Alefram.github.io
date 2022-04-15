import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Navbar from '../../components/Navbar';
import Date from '../../components/Date';
import Footer from '../../components/Footer';

const Post = ({postData}) => {
  return (
        <div>
            <Head>
                <title>{postData.title}</title>
                <meta name="author" content="Alexis Fraudita"/>
                <meta name="keywords" content="Machine Learning, Robotics, Electronics, Reinforcement Learning, Blog, Portfolio, Alexis, Fraudita, Alexis Fraudita, Python, Pytorch"/>
                <meta property="og:title" content={postData.title} />
                <meta property="og:description" content={postData.description} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://alexfm101.github.io/posts/${postData.title}`} />
            </Head>

            <Navbar/> 
            <main className="container mx-auto px-5 lg:max-w-screen-md">
                <div>
                    <h1 className="text-5xl text-supertext font-bebasNue">{postData.id}</h1>
                    <small className="mt-1 text-base text-gray-400">
                        <Date dateString={postData.date}/>
                    </small>
                </div>
                <div 
                    className="prose prose-lg text-justify mt-4 font-nunito markdown" 
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
                />
            </main>
            <Footer/>
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