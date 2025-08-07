
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
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
