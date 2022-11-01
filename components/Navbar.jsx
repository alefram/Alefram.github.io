import Link from 'next/link';

const Navbar = () => {
  return (
    <>
		<nav>
			<div className="flex flex-col md:flex-row p-4 container mx-auto 
				lg:max-w-screen-md justify-between md:items-center"
			>
				<div className="mt-1">
					<Link href="/">
						<a className=' text-background font-bold text-4xl font-square-peg'>
							AleBlog
						</a>
					</Link>
				</div>
				<div className="mt-2 md:m-2 md:p-4 space-x-4 md:text-center">
					<Link href="/Posts">
						<a 
							className="text-background font-bold hover:underline 
							hover:text-blue-500">
							Posts
						</a>
					</Link>
					<Link href="/Projects">
						<a 
							className="text-background font-bold hover:underline 
							hover:text-blue-500">
							Projects
						</a>
					</Link>
					<Link href="/About">
						<a 
							className="text-background font-bold hover:underline 
							hover:text-blue-500">
							About
						</a>
					</Link>
				</div>
			</div>
		</nav>
    </>
  );
};

export default Navbar;
