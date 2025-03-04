import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import toast, { Toaster } from 'react-hot-toast';

const MainLayouts = () => {
    return (
        <div>
            <Toaster></Toaster>
            {/*Navbarvomponent  */}
            <div className="h-16">
                <NavBar></NavBar>
            </div>
            {/*Dynamic Section  */}
            <div className="min-h-[calc(100vh-232px)] container mx-auto px-12 py-12">
                <Outlet></Outlet>
            </div>
            {/*Footer Component  */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;