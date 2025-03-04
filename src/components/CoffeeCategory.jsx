import { NavLink } from "react-router-dom";

const CoffeeCategory = ({ categories }) => {
    console.log(categories);
    return (
        <div className="">
            <div role="tablist" className="tabs tabs-lifted justify-center gap-48">

                {
                    categories.map(category => <NavLink key={category.id} to={`/category/${category.category}`} role="tab" className={({isActive}) => `tab text-2xl font-thin ${isActive ? 'tab-active font-black text-yellow-950 border-b-2 border-yellow-950' : ''}`}>{category.category}</NavLink>)
                }

            </div>
        </div>
    );
};

export default CoffeeCategory;