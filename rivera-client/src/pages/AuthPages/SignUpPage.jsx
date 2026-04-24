import { Link } from "react-router-dom";
import signupImg from "../../assets/l.jpg";

const inputClasses =
  "w-full bg-[#f8f8f8] border-none rounded-lg px-4 py-4 text-sm text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-orange-200 transition-all";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-6xl overflow-hidden rounded-[3rem] bg-white shadow-2xl">
        
        <div className="relative hidden w-1/2 flex-col bg-[#fceec7] p-16 lg:flex">
          <div className="z-10">
            <h2 className="text-4xl font-bold text-[#4a3a2a]">Welcome to F1</h2>
            <p className="mt-3 text-lg text-[#8a7a6a]">For better experience with your Cars!</p>
          </div>
          
          <div className="mt-auto flex justify-center pb-10">
            <img 
              src={signupImg} 
              alt="Pet Illustration" 
              className="w-full max-w-md object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Decorative elements to mimic the PetShree style */}
          <div className="absolute top-32 right-12 h-20 w-20 rounded-full border-[12px] border-white/30"></div>
          <div className="absolute bottom-60 left-12 h-10 w-10 rounded-full bg-white/40"></div>
          <div className="absolute bottom-20 right-20 h-14 w-14 rounded-full border-8 border-[#f2a93b]/20"></div>
        </div>

        <div className="flex w-full flex-col justify-center bg-white p-10 sm:p-20 lg:w-1/2">
          <div className="mx-auto w-full max-w-md">
            <h1 className="text-4xl font-extrabold text-[#1a1a1a]">Sign Up</h1>

            <form className="mt-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Email or Phone" className={inputClasses} />
              <input type="text" placeholder="Full Name" className={inputClasses} />
              <input type="password" placeholder="Password" className={inputClasses} />

              <button className="mt-4 w-full rounded-2xl bg-[#f2a93b] py-4 text-white font-bold text-lg shadow-lg shadow-orange-200 transition-all hover:bg-[#e0962d] active:scale-95">
                Let's Get Started!
              </button>

              <div className="relative my-8 flex items-center py-2">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="mx-4 flex-shrink text-sm text-gray-400 font-medium">If nothing else?</span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>

              <div className="flex gap-4">
                <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#4b5a94] py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95">
                  <span className="text-lg">f</span> Facebook
                </button>
                <button className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#4285f4] py-3.5 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95">
                  <span className="text-lg">G</span> Google
                </button>
              </div>
            </form>

            <p className="mt-12 text-center text-gray-500 font-medium">
              Already a member?{" "}
              <Link to="/auth/signin" className="font-bold text-[#f2a93b] hover:text-[#d18a2a] transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
