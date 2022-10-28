
import DownloadApp from "../components/landingpage/downloadapp";
import Footer from "../components/landingpage/footer";
import Navbar from "../components/landingpage/navbar";
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