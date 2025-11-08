import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (password === "asd") {
        navigate("/allocation");
      } else {
        setError("Invalid passkey. Please try again.");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated gradient blob */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>

      {/* Login Card */}
      <div className="relative w-full max-w-sm bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Enter your secure passkey to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
              autoComplete="new-password"
              name="fake-password"
              inputMode="none"
            />
          </div>

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

        {error && (
          <p className="text-red-400 text-sm text-center mt-4">{error}</p>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 tracking-wide">
            🔒 Authorized access only
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
