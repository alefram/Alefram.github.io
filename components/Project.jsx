import Link from 'next/link';

export default function Project({id, title, description, image, altImage}) {
    return (
        <>

            <div className='flex flex-col p-0 content-center m-2 md:flex-row md:space-x-5 mt-5'>
                <img src={image} alt={altImage} className='rounded-t-xl md:w-40 md:rounded-xl' />
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