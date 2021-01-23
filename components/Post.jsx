import Link from 'next/link';
import Date from './Date';

const Post = ({date,title,id}) => {
    return (
        <>
            <div className="p-2 flex m-2 flex-col">
                <Link href={`/posts/${id}`}>
                    <a className="text-xl  font-semibold font-nunito text-gray-100">{title}</a>
                </Link>
                <small className="mt-1 text-lg font-nunito font-medium text-gray-50">
                    <Date dateString={date}/>
                </small>
            </div>
        </>
    );
}

export default Post;
