import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../../services/UserService";

import loginImg from "../../assets/j.jpg";

const inputClasses =
  "w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:border-white transition-all";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        email,
        password,
      });

      if (response.user.type === "viewer") {
        alert("Viewers are not allowed to login");
        return;
      }

      alert(response.message);
      console.log(response);

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-200 p-4">
     
      <div className="flex w-full max-w-5xl overflow-hidden rounded-[2.5rem] shadow-2xl">
      
        <div className="hidden w-1/2 flex-col items-center justify-center bg-[#f3f2eb] p-12 lg:flex">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

        
        <div className="flex w-full flex-col justify-center bg-[#1a4335] p-8 sm:p-16 lg:w-1/2">
          <div className="mx-auto w-full max-w-sm text-white">
            <h1 className="text-4xl font-bold">Login</h1>
            <p className="mt-2 text-lg text-white/90">
              I'm a professional
            </p>

            <form
              className="mt-10 space-y-5"
              onSubmit={handleLogin}
            >
              <input
                type="email"
                placeholder="Email address"
                className={inputClasses}
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <input
                type="password"
                placeholder="Password"
                className={inputClasses}
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 cursor-pointer rounded border-none bg-white/20 accent-orange-500"
                />

                <label
                  htmlFor="remember"
                  className="cursor-pointer text-sm text-white/80"
                >
                  Keep me logged in
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#ff6b00] py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:bg-[#e65a00] active:scale-95"
              >
                Log in
              </button>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  className="text-sm font-medium text-orange-500 hover:text-orange-400 hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-white/60">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-white hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;