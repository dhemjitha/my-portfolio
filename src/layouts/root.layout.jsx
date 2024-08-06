import Footer from "@/components/shared/Footer";
import Hello from "@/components/shared/hello";
import Navigation from "@/components/shared/Navigation";
import { Outlet } from "react-router-dom";

function RootLayout() {
    return (
      <main className="container">
        <Navigation/>
        <Hello/>
        <Outlet/>
        <Footer/>
      </main>
    );
  }
  
  export default RootLayout;