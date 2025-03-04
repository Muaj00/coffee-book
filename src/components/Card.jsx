import { Link } from "react-router-dom";

const Card = ({ coffee }) => {
    const { name, image, ingredients, category, origin, type, id, rating, popularity } = coffee || {};
    return (
        <div className=" mx-auto ">
            <div className="card card-compact bg-base-100 w-96 shadow-xl rounded-2xl">
                <Link to={`/coffee/${id}`} 
                className="transition hover:scale-105 shadow-xl overflow-hidden">

                    <figure className="w-full h-48 overflow-hidden rounded-t-2xl">
                        <img
                            src={image}
                            alt={category} />
                    </figure>
                    <div className="card-body">
                        <h1 className="card-title">Name: {name}!</h1>
                        <p>Category: {category}</p>
                        <p>Type: {type}</p>
                        <p>Origin: {origin}</p>
                        <p>Rating: {rating}</p>
                        <p>Popular: {popularity}</p>   
                    </div>

                </Link>
            </div>
        </div>
    );
};

export default Card;