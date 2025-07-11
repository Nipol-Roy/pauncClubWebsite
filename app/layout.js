
import "./globals.css";
import Navbar from "./bar-component/Navbar";
import Footer from "./bar-component/Footer";




export const metadata = {
  title: "PAUNC",
  description: "Primeasia University Nutrition Club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#edeee5]">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
