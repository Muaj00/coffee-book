import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const MainLayouts = () => {
    return (
        <div>
              {/*Navbarvomponent  */}
              <NavBar></NavBar>
              {/*Dynamic Section  */}
              <Outlet></Outlet>
              {/*Footer Component  */}
        </div>
    );
};

export default MainLayouts;