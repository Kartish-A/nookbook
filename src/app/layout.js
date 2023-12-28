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
          <div className="second-section w-full flex flex-col flex-shrink-1">
            <div className="NavContainer">
              <Navbar />
            </div>
            <div className="h-full">{children}</div>
          </div>
        </body>
      </SearchProvider>
    </html>
  );
}
