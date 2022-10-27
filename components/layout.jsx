import DownloadApp from "../pages/sections/downloadapp";
import Footer from "../pages/sections/footer";
import Navbar from "../pages/sections/navbar";
import TopNavbar from "./topnavbar";


const Layout = ({ children }) => {

    
    return (
      <>
        
        <TopNavbar/>
        <Navbar/>
        <div >{children}</div>
        <DownloadApp/>
        <Footer/>
      </>
    );
  };

  export default Layout;