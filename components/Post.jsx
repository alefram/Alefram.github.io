import Link from 'next/link'
import Date from './Date'

function Post({date,title,id}) {
    return (
        <>
            <div className="p-2 flex m-2 flex-col">
                <Link href={`/posts/${id}`}>
                    <a className="text-lg  font-normal text-titles">{title}</a>
                </Link>
                <small className="mt-1 text-gray-50">
                    <Date dateString={date}/>
                </small>
            </div>
        </>
    );
}

export default Post
