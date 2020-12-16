import Link from 'next/link'

function Project({description,title,id}) {
    return (
        <div>
            <div className="p-2 flex flex-col">
                <Link href={`/projects/${id}`}>
                    <a className="text-lg  font-medium">{title}</a>
                </Link>
                <small className="mt-1 text-gray-500">
                    {description}
                </small>
            </div>
        </div>
    );
}

export default Project