import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import img from "../../assets/others/authentication2.png";
import Area from "../../Shear/area";
import useAuth from "../../Hooks/AuthHook/useAuth";

const Login = () => {
  const {loginUser}= useAuth()
  const captchaRef = useRef(null);
  const [captcha, setCaptcha] = useState(false);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLoginFrom = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
    .then(res=>{
      console.log(res.user)
    }).catch(error=>{
      console.log(error)
    })
    console.log(email, password);
  };
  const doSubmit = (e) => {
    e.preventDefault();
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value) == true) {
      setCaptcha(true);
    } else {
      alert("Captcha Does Not Match");
    }
  };

  return (
    <div>
      <Area>
        <div className="hero bg-authentication bg-cover bg-center bg-no-repeat min-h-screen bg-base-200">
          <div className="hero-content w-full">
            <img src={img} alt="" />
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <h1 className="text-4xl text-center mt-6 font-bold">Login</h1>
              <form onSubmit={handleLoginFrom} className="card-body">
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                {/* captcha */}
                <div className="form-control">
                  <label className="label w-full">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    ref={captchaRef}
                    name="captcha"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered"
                    required
                  />
                  <button onClick={doSubmit} className="btn btn-sm mt-5">
                    validate
                  </button>
                  {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
                </div>
                <div className="form-control mt-6">
                  <button
                    disabled={!captcha}
                    type="submit"
                    className="btn bg-[#D1A054] hover:bg-[#e6bd7f] text-white"
                  >
                    Login
                  </button>
                </div>
              </form>
              <p className="text-center mb-6 text-xl font-medium">
                New here? Create a New{" "}
                <NavLink to={"/signup"} className={"text-[#D1A054]"}>
                  Account
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </Area>
    </div>
  );
};

export default Login;
