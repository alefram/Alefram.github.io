import Link from 'next/link'


function Navbar() {

  return (
      <div>
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

          <div className="ml-4 p-3 md:p-6">
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
      </div>
  );
}
  
  {/* <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

  // <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
export default Navbar;