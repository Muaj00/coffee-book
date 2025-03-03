import { Link } from "react-router-dom";

const CoffeeCategory = ({ categories }) => {
    console.log(categories);
    return (
        <div className="">
            <div role="tablist" className="tabs tabs-lifted justify-center gap-48">

                {
                    categories.map(category => <Link key={category.id} to={`/category/${category.category}`} role="tab" className="tab">{category.category}</Link>)
                }
                
            </div>
        </div>
    );
};

export default CoffeeCategory;