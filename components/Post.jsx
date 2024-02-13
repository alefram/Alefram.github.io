import Link from 'next/link';
import Date from './Date';


const Post = ({ post }) => {
    return (
        <>
            <div className="flex justify-between">
                <div>
                    <Link href={`/posts/${post.id}`} 
                        className="font-bold font-nunito 
                        text-blue-600 hover:text-blue-900
                        dark:text-blue-300 dark:hover:text-blue-600 text-opacity-90 text-lg lg:text-xl"
                    >
                        {post.title}
                    </Link>
                </div>
                <div className='justify-end whitespace-nowrap'>
                    <small 
                        className="mt-1 font-nunito text-neutral-800 dark:text-neutral-400 text-sm 
                            lg:text-base"
                    >
                        <Date dateString={post.date}/>
                    </small>
                </div>
            </div>
        </>
    );
}

export default Post;
