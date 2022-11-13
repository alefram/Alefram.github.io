import Link from 'next/link';
import Date from './Date';

const Post = ({date,title,id}) => {
    return (
        <>
            <div className="flex justify-between">
                <Link href={`/posts/${id}`}>
                    <a 
                        className=" font-bold font-nunito 
                         text-blue-700 text-lg lg:text-xl">
                        {title}
                    </a>
                </Link>
                <small 
                    className="mt-1 font-nunito text-gray-700 text-sm 
                        lg:text-base"
                >
                    <Date dateString={date}/>
                </small>
            </div>
        </>
    );
}

export default Post;
