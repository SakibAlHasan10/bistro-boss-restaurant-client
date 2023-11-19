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
  const isAdmin = true;
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
      <div className="flex text-black max-h-screen h-[100vh]">
        <div className="w-72 bg-[#D1A054] p-6">
          rouret
          <div>
            {isAdmin
              ? adminMenu?.map((nav) => (
                  <div
                    key={nav}
                    className=" uppercase list-none text-base font-medium"
                  >
                    <li className="hover:text-yellow-400 my-3 hover:border-yellow-400">
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
                    <li className="hover:text-yellow-400 my-3 hover:border-yellow-400">
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
        <div className="w-full bg-white p-6">
          <Outlet />
        </div>
      </div>
    </Area>
  );
};

export default Dashboard;
