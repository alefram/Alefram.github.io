import Link from 'next/link'

function Project({description,title,id}) {
    return (
        <>
            <div className="p-2 flex m-2 flex-col">
                <Link href={`/projects/${id}`}>
                    <a className="text-lg  font-normal text-titles">{title}</a>
                </Link>
                <small className="mt-1 text-gray-50">
                    {description}
                </small>
            </div>
        </>
    );
}

export default Project