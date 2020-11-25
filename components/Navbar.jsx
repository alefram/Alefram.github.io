import {useState} from 'react';

 function Navbar() {

  const [show, setShow] = useState(false);

    const push = () => {
      setShow(true);
      if (show === true) {
        setShow(false);
      }      
    }
    return (
        <div>
          <div className="flex">
            <div className="mx-4">
              <button className="block h-10 w-10" onClick={push}>
                <img src="/myphoto.jpg" className=" rounded-full"/>  
              </button>
            </div>
            <header className="text-2xl mt-4 ml-5"> Alexis Fraudita</header>
          </div>

          {show ? 
            (
              <div className="bg-blue-200 p-5 mt-5 mx-4 rounded-lg">
                <ul>
                  <li><a href="#" className=" mr-2">About me</a></li>
                  <li><a href="#"className="mr-2">Articles</a></li>
                  <li><a href="#"className="mr-2">Proyects</a></li>
                  <li><a href="#"className="mr-2">Contact me</a></li>
                </ul>
              </div>
            ):
            (<div/>)
          }



        </div>
    );
}

export default Navbar;