import Link from 'next/link';

const Navbar = () => {
  return (
    <>
		<nav>
			<div className="flex flex-col md:flex-row p-4 container mx-auto lg:max-w-screen-md justify-between">
				<div className="mt-1 pr-4 py-4">
					<Link href="/">
						<a className="text-gradient bg-gradient-to-r from-gray-600 to-supertext text-4xl font-banger font-semibold ">
							Alexis Fraudita 
						</a>
					</Link>
				</div>
				<div className=" md:m-2 md:p-4 space-x-4 md:text-center">
					<Link href="/Posts">
						<a className="text-gray-200 font-semibold font-Roboto hover:underline hover:text-blue-500">Posts</a>
					</Link>
					<Link href="/Projects">
						<a className="text-gray-200 font-semibold font-Roboto hover:underline hover:text-blue-500">Projects</a>
					</Link>
					<Link href="/About">
						<a className="text-gray-200 font-semibold font-Roboto hover:underline hover:text-blue-500">About</a>
					</Link>
				</div>
			</div>
		</nav>
    </>
  );
};

export default Navbar;
