import Link from 'next/link';


const Navbar = () => {
  return (
    <>
      <nav>
        <div className="flex flex-col md:flex-row p-4 container mx-auto lg:max-w-screen-md justify-between">
          <div className="mt-1 pr-4 py-4">
            <Link href="/">
              <a className="text-gradient bg-gradient-to-r from-gray-500 to-supertext text-3xl font-banger font-semibold ">
                Aleale Blog
              </a> 
            </Link>
          </div>
          <div className=" md:m-2 md:p-4 space-x-4 md:text-center">
            <Link  href="/Posts">
              <a className="text-gray-200 font-Roboto font-semibold hover:underline hover:text-supertext">Posts</a>
            </Link>
            <Link href="/About">
              <a className="text-gray-200 font-semibold font-Roboto hover:underline hover:text-supertext">About</a> 
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;