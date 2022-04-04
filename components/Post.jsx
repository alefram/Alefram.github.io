import Link from 'next/link';
import Date from './Date';

const Post = ({date,title,id}) => {
    return (
        <>
            <div className="p-2 flex m-2 flex-col">
                <Link href={`/posts/${id}`}>
                    <a className=" prose-2xl font-semibold font-nunito text-gray-100 text-lg lg:text-xl">{title}</a>
                </Link>
                <small className="prose-lg mt-1 font-nunito text-gray-400 text-sm lg:text-lg">
                    <Date dateString={date}/>
                </small>
            </div>
        </>
    );
}

export default Post;
