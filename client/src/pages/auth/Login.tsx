import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loginUser, resetAuthState } from "../../store/auth/authSlice";
import type { RootState } from "../../store/store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, loading, error, accessToken } = useAppSelector(
    (state: RootState) => state.auth
  );

  // Handle login submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  // Redirect after successful login
  useEffect(() => {
    if (user && accessToken) {
      navigate("/auth/allocation"); // redirect to your protected route
    }
  }, [user, accessToken, navigate]);

  // Cleanup errors when leaving page
  useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-sm bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Enter your email and passkey to continue
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
                         border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         outline-none transition-all duration-200"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="text-md text-gray-300 mb-2 block font-medium"
            >
              Passkey
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
                         border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         outline-none transition-all duration-200"
              placeholder="Enter your passkey"
              autoComplete="current-password"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 
                       hover:from-blue-500 hover:to-blue-400 font-semibold text-white tracking-wide 
                       shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Login"}
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm text-center mt-4">{error}</p>
        )}

        {/* Footer */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-gray-500 tracking-wide">
            🔒 Authorized access only
          </p>
          <p className="text-sm text-gray-400">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
