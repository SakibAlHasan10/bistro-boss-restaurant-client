import { NavLink } from "react-router-dom";
import img from "../../assets/others/authentication2.png";
import Area from "../../Shear/area";
import useAuth from "../../Hooks/AuthHook/useAuth";
const SignUp = () => {
  const { createUser } = useAuth();
  const handleSignupFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(name, email, password);
  };
  return (
    <div>
      <Area>
        <div className="hero bg-authentication bg-cover bg-center bg-no-repeat min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse w-full">
            <img src={img} alt="" />
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-4xl text-center mt-6 font-bold">Sign Up</h1>
              <form onSubmit={handleSignupFrom} className="card-body">
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="btn bg-[#D1A054] hover:bg-[#e6bd7f] text-white"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <p className="text-center mb-6 text-xl font-medium">
                Already registered?{" "}
                <NavLink to={"/login"} className={"text-[#D1A054]"}>
                  Go to log in
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </Area>
    </div>
  );
};

export default SignUp;
