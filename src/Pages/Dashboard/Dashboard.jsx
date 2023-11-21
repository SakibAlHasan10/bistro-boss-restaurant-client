import { NavLink, Outlet } from "react-router-dom";
import Area from "../../Shear/area";
const nav = (
  <>
    <li className="hover:text-yellow-400 my-3 hover:border-yellow-400">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? " text-yellow-400 border-b-2 border-yellow-400" : ""
        }
      >
        home
      </NavLink>
    </li>
    <li className="hover:text-yellow-400 my-3 hover:border-yellow-400">
      <NavLink
        to={"/Contact"}
        className={({ isActive }) =>
          isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
        }
      >
        Contact us
      </NavLink>
    </li>
    <li className="hover:text-yellow-400 my-3 hover:border-yellow-400">
      <NavLink
        to={"/Menu"}
        className={({ isActive }) =>
          isActive ? "border-b-2 border-yellow-400 text-yellow-400" : ""
        }
      >
        Our Menu
      </NavLink>
    </li>
    <li className="hover:text-yellow-400 my-3 hover:border-yellow-400">
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
const Dashboard = () => {
  const isAdmin = false;
  const adminMenu = [
    "admin home",
    "add items",
    "manage items",
    "manage bookings",
    "all users",
  ];
  const userMenu = [
    "user home",
    "reservation",
    "payment history",
    "my cart",
    "add review",
    "my booking",
  ];
  return (
    <Area>
      {/* <div className="flex text-black max-h-screen h-[100vh]"></div> */}
      {/* drawer */}
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
            <div className="w-full bg-white p-6">
              <Outlet />
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            {/* <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] text-base-content "> */}
            {/* Sidebar content here */}
            <div className="menu p-4 text-black w-80 min-h-full bg-[#D1A054] ">
              <div>
                {isAdmin
                  ? adminMenu?.map((nav) => (
                      <div
                        key={nav}
                        className=" uppercase list-none text-base font-medium"
                      >
                        <li className="">
                          <NavLink
                            to={`${nav}`}
                            className={({ isActive, isPending }) =>
                              isActive
                                ? "active text-yellow-400"
                                : isPending
                                ? "pending"
                                : ""
                            }
                          >
                            {nav}
                          </NavLink>
                        </li>
                      </div>
                    ))
                  : userMenu?.map((nav) => (
                      <div
                        key={nav}
                        className=" uppercase list-none text-base font-medium"
                      >
                        <li className="">
                          <NavLink
                            to={`${nav}`}
                            className={({ isActive, isPending }) =>
                              isActive
                                ? "active text-yellow-400"
                                : isPending
                                ? "pending"
                                : "hover:text-yellow-400 my-1 hover:border-yellow-400"
                            }
                          >
                            {nav}
                          </NavLink>
                        </li>
                      </div>
                    ))}
              </div>
              {/* divider */}
              <div className=" text-white w-full">
                <p className="border-b my-6 border-white w-full"></p>
              </div>
              <div className=" uppercase list-none text-base font-medium">
                {nav}
              </div>
            </div>

            {/* </ul> */}
          </div>
        </div>
      </div>
    </Area>
  );
};

export default Dashboard;
