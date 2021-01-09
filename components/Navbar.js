import Link from 'next/link'
import Image from 'next/image'


function Navbar() {

  return (
      <header>
        <nav className="flex p-4 md:p-10 lg:mx-72">
          <div>
            <Link href="/">
              <a>
                <Image
                  src="/yo.jpeg"
                  width={100}
                  height={100}
                  className=" p-10 rounded-full"
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