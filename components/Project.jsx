import Link from 'next/link';

export default function Project({id, title, description, image, altImage}) {
    return (
        <>

            <div 
                className='flex flex-col p-0 content-center m-2 md:flex-row 
                md:space-x-5 mt-5'
            >
                <img 
                    src={image} 
                    alt={altImage} 
                    className='rounded-xl md:w-40 md:rounded-xl h-28' 
                />
                <div className=" flex flex-col">
                    <Link href={`/projects/${id}`}>
                        <a 
                            className="mt-2 md:mt-0 font-bold text-background 
                            text-lg lg:text-2xl font-nunito"
                        >
                            {title}
                        </a>
                    </Link>
                    <small 
                        className="mt-1 font-Roboto text-gray-600 text-base"
                    >
                        {description}
                    </small>
                </div>
            </div>
        </>
    );
}