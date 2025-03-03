import Banner from "../components/Banner";
import Header from "../components/Header";


const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* heading */}
            <Header title={'Browse Coffees By Category'} subTitle={'Choose your desired coffee category to browse through specific coffees that fit in your taste'}></Header>
            {/* category tab section */}
            {/* Dynamic nested component */}
        </div>
    );
};

export default Home;