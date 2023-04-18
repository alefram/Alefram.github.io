import Link from 'next/link';
import Date from './Date';


const Post = ({ post }) => {
    return (
        <>
            <div className="flex justify-between">
                <Link href={`/posts/${post.id}`}>
                    <a 
                        className=" font-bold font-nunito 
                     text-blue-900 text-opacity-90 text-lg lg:text-xl">
                        {post.title}
                    </a>
                </Link>
                <small 
                    className="mt-1 font-nunito text-gray-700 text-sm 
                        lg:text-base"
                >
                    <Date dateString={post.date}/>
                </small>
            </div>
        </>
    );
}

export default Post;
