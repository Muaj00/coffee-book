import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import myCoffee from '../assets/nutrition.png';
import { addCoffee } from "../utilitis";

const CoffeeDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [coffee, setCoffee] = useState({});
    const { ingredients } = coffee;
    console.log(ingredients);
    useEffect(() => {
        const singleData = data.find(coffee => coffee.id === parseInt(id));
        setCoffee(singleData);
    }, [data, id]);

    const handleFavourite = (coffee) => {
        addCoffee(coffee);
    }
    return (
        <>
            <div className="flex flex-col space-y-4">
                <h1 className="text-3xl font-thin text-orange-900 font-serif">{coffee.description}</h1>
                <div className="">
                    <img className=" rounded-2xl w-1/2 mx-auto" src={coffee.image} alt="" />
                </div>

                <div className="flex justify-between items-center my-6">
                    <div className="font-semibold">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-thin">Name: {coffee.name}</h1>
                        <p className="text-base">Popular: {coffee.popularity}</p>
                        <p className="text-base">Rating: {coffee.rating}</p>
                    </div>

                    <div>
                        <button onClick={()=> handleFavourite(coffee)} className="btn btn-warning text-black">
                            Add to Favourite
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mt-24"> 
                <div className="hero mt-24">
                    <div className=" flex flex-col space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold">Making Process</h1>
                            <p className="py-4 text-lg">
                                {coffee.making_process}
                            </p>
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold">ingredients</h1>
                            <ul>
                                {ingredients?.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="w-2/3">
                    <img src={myCoffee} alt="myCoffee" />
                </div>
            </div>
        </>
    );
};

export default CoffeeDetails;