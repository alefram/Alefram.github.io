import Link from 'next/link'
import Image from 'next/image'

function Project({description,title,id}) {
    return (
        <>
            <div className="p-2 flex flex-col md:flex-row m-2 space-x-8  mt-5  shadow-lg rounded-lg border border-titles">
                <div className="mx-auto md:m-2">
                    <Image
                        src="/images/twitter.png"
                        width={100}
                        height={100}
                    />
                </div>
                <div className="flex flex-col m-4 p-4">
                    <Link href={`/projects/${id}`}>
                        <a className="text-lg  font-bold text-titles">{title}</a>
                    </Link>
                    <small className="mt-1 text-gray-50">
                        {description}
                    </small>
                </div>
            </div>
        </>
    );
}

export default Project