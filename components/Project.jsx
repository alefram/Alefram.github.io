import Link from 'next/link';
import Date from './Date';

export default function Project({id, title, description}) {
    return (
        <>

            <div className='flex flex-col p-0 content-center m-2 md:flex-row md:space-x-5'>
                <Link href={`/projects/${id}`}>
                    <a href="">
                        <img src={`/images/projects/${title}.jpeg`} alt="" className='rounded-t-xl md:w-40 md:rounded-xl' />
                    </a>
                </Link> 
                <div className=" flex flex-col">
                    <Link href={`/projects/${id}`}>
                        <a className="mt-2 md:mt-0 prose-2xl font-semibold font-nunito text-gray-100 text-lg lg:text-xl">
                            {title}
                        </a>
                    </Link>
                    <small className="prose-lg mt-1 font-nunito text-sm text-gray-400">
                        {description}
                    </small>
                </div>
            </div>
        </>
    );
}