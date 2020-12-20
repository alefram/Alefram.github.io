import Link from 'next/link'

function Navbar() {

  return (
      <header>
        <nav className="flex p-4 md:p-10 lg:mx-72">
          <div>
            <Link href="/"> 
              <a>
                <img
                  src="/octocat.png"
                  className="transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 shadow rounded-full h-14 w-14 md:h-20 md:w-20"
                />
              </a>
            </Link>
          </div>

          <div className="ml-2 p-3 md:p-6 flex flex-row font-Roboto font-bold text-gray-500">
            <Link  href="/Posts">
              <a className="hover:text-blue-600 transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">Posts</a>
            </Link>
            <Link  href="/Projects">
              <a className=" mx-4 hover:text-blue-600 transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">Projects</a>
            </Link>
            <Link href="/About">
              <a className="hover:text-blue-600 transform duration-500 ease-in-out hover:-translate-y-1 hover:scale-110">About</a> 
            </Link>
          </div>
        </nav>
      </header>
  );
}

export default Navbar;