import Link from 'next/link';


const Navbar = () => {
  return (
    <>
      <nav className="flex flex-col md:flex-row p-4 container mx-auto lg:max-w-screen-md justify-between">
        <div className="mt-1 pr-4 py-4">
          <Link href="/">
            <a className="text-gradient bg-gradient-to-r from-title to-text text-2xl font-Alegreya font-bold ">
              Ale ale Blog
            </a> 
          </Link>
        </div>
        <div className=" md:m-2 md:p-4 space-x-4 md:text-center">
          <Link  href="/Posts">
            <a className="text-gray-600 font-Roboto font-semibold hover:underline hover:text-text">Posts</a>
          </Link>
          <Link  href="/Projects">
            <a className="text-gray-600 font-semibold font-Roboto hover:underline hover:text-text">Projects</a>
          </Link>
          <Link href="/About">
            <a className="text-gray-600 font-semibold font-Roboto hover:underline hover:text-text">About</a> 
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;