import {useState} from 'react';
import Image from 'next/image'

function Navbar() {

  const [show, setShow] = useState(false);
  const [mode, setMode] = useState(true);

  const push = () => {
    setShow(true);
    if (show === true) {
      setShow(false);
    }      
  }

  const styleMode = () => {
    setMode(true);
    if (mode === true) {
      setMode(false);
    }
    console.log(mode);
  }

  return (
      <div>
        <div className="flex">
          <div className="mx-4">
            <button className="block" onClick={push}>
              <Image
                src="/octocat.png"
                width={50}
                height={50}
                className="rounded-full"
              />
              {/* <img src="/octocat.png" className="w-11 h-11 rounded-full"/>   */}
            </button>
          </div>

          <header className="text-2xl mt-2 ml-2 mr-4 font-semibold italic text-gray-900">
            Alexis Fraudita
          </header>
        </div>

        {show ? 
          (
            <div className="bg-blue-200 p-5  mx-5  rounded-lg font-semibold">
              <ul>
                <li><a href="/" className=" mr-2">Who I am?</a></li>
                <li><a href="/Articles"className="mr-2">Articles</a></li>
                <li><a href="/Projects"className="mr-2">Projects</a></li>
                <li><a href="/ContactMe"className="mr-2">Contact me</a></li>
              </ul>
            </div>
          ):
          (<div/>)
        }

      </div>
  );
}
  
  {/* <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

  // <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
export default Navbar;