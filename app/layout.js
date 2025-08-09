import Footer from "./bar-component/Footer";
import Navbar from "./bar-component/Navbar";
import "./globals.css";

export const metadata = {
  title: "PAUNC",
  description: "Primeasia University Nutrition Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/paunclogo.png" sizes="30px" type="image/png" />
       
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
