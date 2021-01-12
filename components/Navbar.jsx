import Link from 'next/link'
// import Image from 'next/image'


function Navbar() {

  return (
    <>
      <nav className="flex p-4 container mx-auto lg:max-w-screen-md justify-between">
        <div className="mt-1 pr-4 py-4">
          <Link href="/">
            <a className="text-titles text-2xl font-Alegreya font-bold italic ">
              Alexis Fraudita
              {/* <Image
                src="/yo.jpeg"
                width={100}
                height={100}
                className=" rounded-full"
              /> */}
            </a> 
          </Link>
        </div>
        {/* <div>
          <h1 className=" text-titles">Alexis Fraudita</h1>
        </div> */}

        <div className="m-2 p-4 space-x-4 text-center">
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