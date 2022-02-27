import Link from 'next/link';
import Date from './Date';

export default function Project({id, title, date}) {
    return (
        <>
            <div className="p-2 flex m-2 flex-col">
                <Link href={`/projects/${id}`}>
                    <a className=" prose-2xl font-semibold font-nunito text-gray-100">{title}</a>
                </Link>
                <small className="prose-lg mt-1 font-nunito text-gray-50">
                    <Date dateString={date}/>
                </small>
            </div>
        </>
    );
}