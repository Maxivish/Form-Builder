import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="mt-[100px] bg-violet-50">
        <main className="min-h-[calc(100vh-72px)]">
          <Suspense
            fallback={
              <div className="w-full min-h-[calc(100vh-72px)] flex justify-center items-center">
                <div className="border-8 border-solid border-t-violet-800 border-r-violet-600 border-b-violet-400 border-l-violet-200 rounded-full w-20 h-20 animate-spin"></div>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Layout;
