import Link from 'next/link'


function Navbar() {

  return (
    <>
      <nav className="flex flex-col md:flex-row p-4 container mx-auto lg:max-w-screen-md justify-between">
        <div className="mt-1 pr-4 py-4">
          <Link href="/">
            <a className="text-titles text-2xl font-Alegreya font-bold italic ">
              Ale-Ale Blog
            </a> 
          </Link>
        </div>
        <div className=" md:m-2 md:p-4 space-x-4 md:text-center">
          <Link  href="/Posts">
            <a className="text-gray-50 font-Roboto font-normal hover:underline hover:text-titles">Posts</a>
          </Link>
          <Link  href="/Projects">
            <a className="text-gray-50 font-normal font-Roboto hover:underline hover:text-titles ">Projects</a>
          </Link>
          <Link href="/About">
            <a className="text-gray-50 font-normal font-Roboto hover:underline hover:text-titles">About</a> 
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;