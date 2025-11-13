import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [show, setShow] = useState(false);
  const { signInUser, signInWithGoogle } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        event.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100  w-full  mx-auto max-w-sm shrink-0 shadow-2xl border border-gray-200">
      <div className="card-body">
        <h1 className="text-xl md:text-3xl font-extrabold text-center text-primary">
          Login
        </h1>
        <form onSubmit={handleLogIn}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Email"
            />
            <div className="relative">
              <label className="label">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                required
                className="input rounded-full focus:border-0 focus:outline-gray-200"
                placeholder="Password"
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[25px] top-[25px] cursor-pointer z-50"
              >
                {show ? <Eye /> : <EyeOff />}
              </span>
            </div>

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn text-white mt-4 rounded-full bg-linear-to-r from-[#662222] to-[#A3485A]">
              Login
            </button>
          </fieldset>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white rounded-full text-secondary border-[#e5e5e5]"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Login with Google
        </button>
        <p className="text-center">
          New to our website? Please{" "}
          <Link
            className="text-blue-500 hover:text-blue-800"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
