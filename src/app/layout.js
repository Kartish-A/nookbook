

import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
  
      <html lang="en">
        <body className="container bg-paleLeaf dark:bg-pickledBluewood">
          <Sidebar />
          <Navbar />
          {children}
        </body>
      </html>
  );
}
