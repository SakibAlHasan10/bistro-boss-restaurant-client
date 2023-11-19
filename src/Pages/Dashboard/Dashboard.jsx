import { NavLink } from "react-router-dom";
import Area from "../../Shear/area";

const Dashboard = () => {
//   const adminMenu = ["admin home"];
  const userMenu = ["user home", "reservation", "payment history", "my cart", "add review", "my booking"];
  return (
    <Area>
      <div className="flex text-black max-h-screen h-[100vh]">
        <div className="w-72 bg-[#D1A054] p-6">
          rouret
          {userMenu?.map((nav) => (
            <div key={nav} className=" uppercase list-none text-base font-medium">
              <li className="my-3">
                <NavLink
                  to={`Dashboard/${nav}`}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                    {nav}
                </NavLink>
              </li>
            </div>
          ))}
        </div>
        <div className="w-full bg-red-400 p-6">content</div>
      </div>
    </Area>
  );
};

export default Dashboard;
