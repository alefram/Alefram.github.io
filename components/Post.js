import Link from 'next/link'
import Date from './Date'

function Post({date,title,id}) {
    return (
        <div>
            <div className="p-2 flex flex-col">
                <Link href={`/posts/${id}`}>
                    <a className="text-lg  font-medium">{title}</a>
                </Link>
                <small className="mt-1 text-gray-500">
                    <Date dateString={date}/>
                </small>
            </div>
        </div>
    );
}

export default Post