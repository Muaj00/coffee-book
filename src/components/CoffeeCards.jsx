import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const {category} = useParams();
    const data = useLoaderData();
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const filteredCoffeeCategory = [...data].filter(coffee => coffee.category === category)
        setCoffees(filteredCoffeeCategory);
    }, [data, category])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card> )
            }
        </div>
    );
};

export default CoffeeCards;