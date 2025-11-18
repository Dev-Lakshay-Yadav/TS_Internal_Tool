import { useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../store/auth/authSlice"; // adjust path
import { useAppDispatch } from "../../store/hooks";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const navItems = [
    { label: "Live Cases", path: "/auth/allocate-live" },
    { label: "Redesigns", path: "/auth/allocate-redesign" },
    { label: "Allocated", path: "/auth/allocated" },
    { label: "Employees", path: "/auth/employees" },
  ];

  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-8 py-4 shadow-lg">
      {/* Left Section - Logo or Title */}
      <div
        className="text-2xl font-semibold text-blue-400 cursor-pointer hover:text-blue-300 transition"
        onClick={() => navigate("/")}
      >
        ToothSketch
      </div>

      {/* Center Section - Links */}
      <div className="flex space-x-6">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`font-medium transition-colors duration-200 cursor-pointer ${
                isActive
                  ? "text-blue-400 border-b-2 border-blue-400 pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Right Section - User Info + Logout */}
      <div className="flex items-center space-x-4">
        <p className="text-sm text-gray-300">
          Logged in as: <span className="font-semibold text-white">test</span>
        </p>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
