import { SearchProvider } from "./SearchContext";

import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SearchProvider>
        <body className="flex bg-paleLeaf dark:bg-pickledBluewood">
          <Sidebar />
          <div className="second-section h-full w-full flex flex-col py-2 justify-between">
            <div className="NavContainer w-full">
              <Navbar />
              <div className="h-full">{children}</div>
            </div>
          </div>
        </body>
      </SearchProvider>
    </html>
  );
}
