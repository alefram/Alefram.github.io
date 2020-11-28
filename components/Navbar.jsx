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
              <button className="block " onClick={push}>
                <img src="/octocat.png" className="w-11 h-11 rounded-full"/>  
              </button>
            </div>
            <header className="text-2xl mt-2 ml-2 mr-4"> Alexis Fraudita</header>

            <div className="h-9 w-9 mt-1">
              <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iR3VpZGUiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNDk3LjEzOSAyOTEuMDc5YTcuOTU1IDcuOTU1IDAgMCAwIC05LjgzNyAyLjkgMjA2LjIgMjA2LjIgMCAwIDEgLTE3My4xMzUgOTAuOTUxYy01NS4xMi0uNDU1LTEwNi42NjYtMjIuMDUzLTE0NS4xNDQtNjAuODE0YTIwMy42ODUgMjAzLjY4NSAwIDAgMSA1LjcyMy0yOTIuNzM2IDguMDEyIDguMDEyIDAgMCAwIC04LjQ0LTEzLjMgMjQ4LjE1OCAyNDguMTU4IDAgMCAwIC0xMTMuMDcxIDkwLjE4NiAyNDYuMTQ1IDI0Ni4xNDUgMCAwIDAgMzAuMjggMzE0Ljc5NGM0Ni44MTMgNDYuMDY5IDEwOS4wNDYgNzEuNDQgMTc1LjIzMiA3MS40NGEyNTAuMjgzIDI1MC4yODMgMCAwIDAgMTU3LjEtNTUuNSAyNDcuNjI5IDI0Ny42MjkgMCAwIDAgODUuOTYzLTEzOC44NjMgNy45MDkgNy45MDkgMCAwIDAgLTQuNjcxLTkuMDU4em0tODguODQ3IDEzOC42YTIzOC4yNDYgMjM4LjI0NiAwIDAgMSAtMTQ5LjU0NSA1Mi44MjFjLTYzLjAxOCAwLTEyMi4yNjEtMjQuMTQ3LTE2Ni44MTUtNjcuOTk0YTIzNC4xNDEgMjM0LjE0MSAwIDAgMSAtMjguODExLTI5OS40MzcgMjM2LjA4OSAyMzYuMDg5IDAgMCAxIDg4LjczOC03Ny4zNjQgMjE1Ljg0MSAyMTUuODQxIDAgMCAwIDguNjQ4IDI5NC44NjJjNDAuNzIxIDQxLjAyMSA5NS4yNTcgNjMuODc4IDE1My41NiA2NC4zNi42MTcgMCAxLjIyNi4wMDggMS44NDIuMDA4YTIxOC4xMjMgMjE4LjEyMyAwIDAgMCAxNjguOTExLTc5LjU3IDIzNi4yMDcgMjM2LjIwNyAwIDAgMSAtNzYuNTI4IDExMi4zMXoiIGZpbGw9InJnYigwLDAsMCkiLz48L3N2Zz4="
              />
            </div>

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
  
  {/* <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
  export default Navbar;