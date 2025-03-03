import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Header from "../components/Header";
import CoffeeCategory from "../components/CoffeeCategory";


const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* heading */}
            <Header title={'Browse Coffees By Category'} subTitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'}></Header>
            {/* category tab section */}
            
            <CoffeeCategory categories={categories}></CoffeeCategory>
        
            {/* Dynamic nested component */}
            <Outlet></Outlet>
        </div>
    );
};

export default Home;