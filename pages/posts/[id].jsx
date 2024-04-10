import Head from 'next/head';
import { getAllPostsIds, getPostsData } from '../../lib/posts';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TableOfContent from '../../components/TableOfContent';

const Post = ({postData}) => {
    const headings = extractHeadings(postData.contentHtml);

    return (
		<div>
			<Head>
				<title>{postData.title}</title>
				<meta name="description" content={postData.description}/>
				<meta name="author" content="Alexis Fraudita"/>
				<meta name="keywords" content={postData.keywords}/>
				<meta property="title" content={postData.title} />
                <meta property="url" content={`https://alefram.github.io/posts/${postData.title}`} />
                <meta property="type" content="website" />
                <meta 
                    name="viewport" content="initial-scale=1.0, 
                    widt
                    h=device-width" key="viewport" 
                />
                <meta name="robots" content="index, follow"/>
                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content={`https://alefram.github.io/posts/${postData.title}`}/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content={postData.title}/>
                <meta property="og:description" content={postData.description}/>
                <meta property="og:image" content="🏓"/>
                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_short_image"/>
                <meta property="twitter:domain" content="alefram.github.io"/>
                <meta property="twitter:url" content={`https://alefram.github.io/posts/${postData.title}`}/>
                <meta name="twitter:title" content={postData.title}/>
                <meta name="twitter:description" content={postData.description}/>
                <meta name="twitter:image" content="🏓"/> 
			</Head>

			<Navbar/> 
			<main className="mt-10 px-4">
					<div className='mx-auto max-w-2xl'>
						<h1 className="text-2xl md:text-4xl text-neutral-900 dark:text-neutral-100 font-bold font-nunito">
							{postData.title}
						</h1>
                        <TableOfContent headings={headings} />
                        <article 
                            className="text-base max-w-2xl mt-10 font-Roboto markdown prose 
                             prose-blue text-neutral-800 dark:text-neutral-400 dark:prose-invert" 
                            dangerouslySetInnerHTML={{ 
                                __html: postData.contentHtml 
                            }} 
                        />
					</div>
			</main>
			<Footer/>
		</div>  
		);
};

const extractHeadings = (contentHtml) => {
    const headings = [];
    const regex = /<h([1-6])[^>]*>(.*?)<\/h\1>/g;
    let match;
    
    while ((match = regex.exec(contentHtml)) !== null) {
        const level = parseInt(match[1]);
        const title = match[2];
        const id = `${title.toLowerCase().replace(/\s+/g, '-')}`;
        headings.push({ id, level, title });
    }

    return headings;
}

export async function getStaticPaths() {
	const paths = getAllPostsIds()
	return {
		paths,
		fallback: false
	}
};

export async function getStaticProps({ params }) {
	const postData = await getPostsData(params.id)
	return {
		props: {
			postData
		}
	}
};

export default Post;
