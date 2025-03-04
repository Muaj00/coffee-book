import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CoffeeDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [coffee, setCoffee] = useState({});
    const { ingredients } = coffee;
    console.log(ingredients);
    useEffect(() => {
        const singleData = data.find(coffee => coffee.id === parseInt(id));
        setCoffee(singleData);
    }, [data, id])
    return (
        <>
            <div className="flex flex-col space-y-4">
                <h1 className="text-3xl font-thin text-orange-900 font-serif">{coffee.description}</h1>
                <div className="">
                    <img className=" rounded-2xl w-1/2 mx-auto" src={coffee.image} alt="" />
                </div>
            </div>











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
        </>
    );
};

export default CoffeeDetails;