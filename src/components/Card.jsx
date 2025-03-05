import { Link, useLocation } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
const Card = ({ coffee }) => {
    const { name, image, ingredients, category, origin, type, id, rating, popularity } = coffee || {};

    const {pathname} = useLocation();
    return (
        <div className=" mx-auto ">
            <div className="card card-compact bg-base-100 w-96 shadow-xl rounded-2xl">
                <Link to={`/coffee/${id}`} 
                className="transition hover:scale-105 shadow-xl  rounded-2xl overflow-hidden">

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
                {
                    pathname === '/dashboard' && (
                        <div className="absolute p-3 bg-warning rounded-full cursor-pointer -top-5 -right-5 "><FaTrashCan /></div>
                    )
                }
            </div>
        </div>
    );
};

export default Card;