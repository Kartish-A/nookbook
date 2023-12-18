import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex bg-paleLeaf dark:bg-pickledBluewood">
        <Sidebar />
        <div className="NavContainer w-full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
