import useAuth from "../../Hooks/AuthHook/useAuth";

const UserHome = () => {
    const {user} = useAuth()
  return (
    <div>
      <h2 className="text-3xl font-semibold my-6">Hi, Welcome Back!</h2>
      <div className="grid text-white grid-cols-1 md:grid-cols-3 text-center gap-6">
        <div className="rounded-lg py-8 bg-gradient-to-r from-[#9a15d3] to-[#d1a5e4]">
          <div>
            <p className="text-4xl font-extrabold">205</p>
            <p className="text-2xl font-normal">Menu</p>
          </div>
        </div>
        <div className="rounded-lg py-8 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
          <div>
            <p className="text-4xl font-extrabold">103</p>
            <p className="text-2xl font-normal">Shop</p>
          </div>
        </div>
        <div className="rounded-lg py-8 bg-gradient-to-r from-[#FE4880] to-[#f7c0df]">
          <div>
            <p className="text-4xl font-extrabold">03</p>
            <p className="text-2xl font-normal">Contact</p>
          </div>
        </div>
      </div>
      <div className="flex mt-6 w-full">
        <div className="w-1/2 py-12 flex justify-center items-center bg-[#FFEDD5]">
          <div className="flex flex-col items-center">
            <img src={user?.photoURL} alt="" className="w-44 h-44 rounded-full" />
            <h2 className="text-3xl font-semibold mt-8">{user?.displayName}</h2>
          </div>
        </div>
        <div className="w-1/2 flex-1 py-12 pl-14 bg-[#FEF9C3]">
        <h2 className="text-4xl mb-6 font-semibold uppercase">Your Activities</h2>
        <p className="text-[#0088FE] text-2xl font-semibold">Orders: 6</p>
        <p className="text-[#00C4A1] text-2xl font-semibold">Reviews: 2</p>
        <p className="text-[#FFBB28] text-2xl font-semibold">Bookings: 1</p>
        <p className="text-[#FF8042] text-2xl font-semibold">Payment: 3</p>

        </div>
      </div>
    </div>
  );
};

export default UserHome;
