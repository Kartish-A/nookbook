import { SearchProvider } from "./SearchContext";
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SpeedInsights>
      <SearchProvider>
        <body className="flex bg-paleLeaf dark:bg-pickledBluewood">
          <Sidebar />
          <div className="second-section w-full flex flex-col">
            <div className="NavContainer">
              <Navbar />
            </div>
            <div>{children}</div>
          </div>
        </body>
      </SearchProvider>
      </SpeedInsights>
    </html>
  );
}
