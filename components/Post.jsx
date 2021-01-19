import Link from 'next/link';
import Date from './Date';

const Post = ({date,title,id}) => {
    return (
        <>
            <div className="p-2 flex m-2 flex-col">
                <Link href={`/posts/${id}`}>
                    <a className="text-lg  font-semibold text-gray-600">{title}</a>
                </Link>
                <small className="mt-1 text-base text-gray-500">
                    <Date dateString={date}/>
                </small>
            </div>
        </>
    );
}

export default Post;
