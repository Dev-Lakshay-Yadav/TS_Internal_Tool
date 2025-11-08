import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    setTimeout(() => {
      if (name && password.length >= 4) {
        setSuccess("Account created successfully!");
        setTimeout(() => navigate("/login"), 1200);
      } else {
        setError("Please enter a valid name and password (min 4 characters).");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Gradient blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/40 rounded-full blur-3xl animate-pulse"></div>

      {/* Signup Card */}
      <div className="relative w-full max-w-sm bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-white tracking-tight">
            Create Account
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Join the platform securely
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="text-md text-gray-300 mb-2 block font-medium"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
                         border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         outline-none transition-all duration-200"
              placeholder="Enter your name"
            />
          </div>

          {/* Password Input */}
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
              required
              minLength={4}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
                         border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         outline-none transition-all duration-200"
              placeholder="Create a password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 cursor-pointer
                       hover:from-purple-500 hover:to-blue-400 font-semibold text-white tracking-wide 
                       shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-60"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        {/* Feedback */}
        {error && (
          <p className="text-red-400 text-sm text-center mt-4">{error}</p>
        )}
        {success && (
          <p className="text-green-400 text-sm text-center mt-4">{success}</p>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/")}
              className="text-blue-400 hover:text-blue-300 font-medium transition cursor-pointer"
            >
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
