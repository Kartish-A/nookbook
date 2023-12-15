import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-paleLeaf dark:bg-pickledBluewood">
        {children}
      </body>
    </html>
  );
}
