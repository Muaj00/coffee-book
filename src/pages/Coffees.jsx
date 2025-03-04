import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";


const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);

    const handleSort = (sortBy) => {
        if(sortBy == 'popularity'){
            //sort BY Popularity
            const sortedByPopularity = [...data].sort((a, b) => b.popularity - a.popularity);
            setCoffees(sortedByPopularity); 
        }
        else if(sortBy == 'rating'){
            //sort BY Rating
            const sortedByRating = [...data].sort((a, b) => b.rating - a.rating);
            setCoffees(sortedByRating); 
        }
    }
    return (
        <>
            <div className="flex justify-between items-center" >
                <div>
                    <h1 className=" text-xl md:text-3xl font-thin text-wrap md:text-nowrap"> Sort Coffee&apos;s by Popularity and Rating -&gt;</h1>
                </div>
                <div className="space-x-4 flex flex-col space-y-4 md:flex md:flex-row md:space-y-0">
                    <button onClick={() => handleSort('popularity')} className="btn btn-warning py-6 md:py-4" >Sort By Popularity</button>
                    <button onClick={() => handleSort('rating')} className="btn btn-warning py-6 md:py-4">Sort By Rating</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default Coffees;