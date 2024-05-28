import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-indigo-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Add Book</a>
            </li>
            <li>
              <a>Book-List</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Sell-Books</a>
            </li>
          </ul>
        </div>
       <Link to={"/"}><a className="btn btn-ghost text-xl">TestBOOK</a></Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/addbooks"}><a className="text-lg">Add Book</a></Link>
          </li>
          <li>
            <Link to={"/books"}><a className="text-lg">Books_list</a></Link>
          </li>
          <li>
            <a className="text-lg">Sell-Books</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
