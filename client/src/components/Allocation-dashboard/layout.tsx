import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white">
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <div className="flex w-full overflow-hidden bg-green-500">
        <main className="h-full w-full overflow-y-auto bg-white p-4 md:p-6">
          <Outlet />
        </main>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
