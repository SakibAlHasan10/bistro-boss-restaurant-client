import Area from "../../Shear/area";
import logo from "../../../src/assets/logo.png";
import defaultProfile from "../../../src/assets/others/profile.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/AuthHook/useAuth";
const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const nav = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? " text-yellow-400 border-b-2 border-yellow-400" : ""
          }
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Contact"}
          className={({ isActive }) =>
            isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
          }
        >
          Contact us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Dashboard"}
          className={({ isActive }) =>
            isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="hover:text-yellow-400 hover:border-yellow-400">
        <NavLink
          to={"/Menu"}
          className={({ isActive }) =>
            isActive ? "border-b-2 border-yellow-400 text-yellow-400" : ""
          }
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Shop"}
          className={({ isActive }) =>
            isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
          }
        >
          Our Shop
        </NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <div className="bg-[#0000004e] fixed z-10 w-full">
      <Area>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {nav}
              </ul>
            </div>
            <img src={logo} className="btn btn-ghost text-xl" alt="" />
          </div>
          <div className="flex-none navbar-end">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal uppercase px-1">{nav}</ul>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    {user ? (
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    ) : (
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={defaultProfile}
                      />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleLogOut} className="btn btn-sm">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to={"/login"}>
                <button className="btn btn-sm">Login</button>
              </NavLink>
            )}
          </div>
        </div>
      </Area>
    </div>
  );
};

export default Navbar;
