import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks"; // adjust import path
import { registerUser, resetAuthState } from "../store/auth/authSlice"; // adjust path to your slice
import type { RootState } from "../store/store"; // adjust path if needed

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    emp_name: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { loading, error, user } = useAppSelector(
    (state: RootState) => state.auth
  );

  // Handle field input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(form));
  };

  // Redirect on successful registration
  useEffect(() => {
    if (user) {
      navigate("/"); // redirect to login or dashboard
      dispatch(resetAuthState());
    }
  }, [user, navigate, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Register Card */}
      <div className="relative w-full max-w-sm bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-white tracking-tight">
            Create Account
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Register to access your employee dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-md text-gray-300 mb-2 block font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
                         border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         outline-none transition-all duration-200"
              placeholder="Enter your email"
              autoComplete="off"
            />
          </div>

          {/* Employee Name */}
          <div>
            <label
              htmlFor="emp_name"
              className="text-md text-gray-300 mb-2 block font-medium"
            >
              Employee Name
            </label>
            <input
              type="text"
              id="emp_name"
              name="emp_name"
              required
              value={form.emp_name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
                         border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         outline-none transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="text-md text-gray-300 mb-2 block font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
                         border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         outline-none transition-all duration-200"
              placeholder="Create a strong password"
              autoComplete="new-password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 
                       hover:from-blue-500 hover:to-blue-400 font-semibold text-white tracking-wide 
                       shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Error Message */}
        {error && (
          <p className="text-red-400 text-sm text-center mt-4">{error}</p>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 tracking-wide">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-blue-400 hover:text-blue-300 cursor-pointer"
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
