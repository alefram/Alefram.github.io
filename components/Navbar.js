import Link from 'next/link'


function Navbar() {

  return (
      <header>
        <nav className="flex p-4 md:p-10">
          <div>
            <Link href="/"> 
              <a>
                <img
                  src="/octocat.png"
                  className="rounded-full h-14 w-14 md:h-20 md:w-20"
                />
              </a>
            </Link>
          </div>

          <div className="ml-2 p-3 md:p-6 flex flex-row font-Roboto">
            <Link  href="/Posts">
              <a >Posts</a>
            </Link>
            <Link  href="/Projects">
              <a className=" mx-4">Projects</a>
            </Link>
            <Link href="/About">
              <a>About</a> 
            </Link>
          </div>
        </nav>
      </header>
  );
}

export default Navbar;