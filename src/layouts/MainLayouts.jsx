import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const MainLayouts = () => {
    return (
        <div>
              {/*Navbarvomponent  */}
              <NavBar></NavBar>
              {/*Dynamic Section  */}
              <div className="min-h-[calc(100vh-232px)]">
              <Outlet></Outlet>
              </div>
              {/*Footer Component  */}
              <Footer></Footer>
        </div>
    );
};

export default MainLayouts;