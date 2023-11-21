const AdminHome = () => {
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
    </div>
  );
};

export default AdminHome;
