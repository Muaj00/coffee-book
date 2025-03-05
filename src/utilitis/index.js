import toast from "react-hot-toast";

// get all coffees from local storage
const getAllItems = () => {
    const all = localStorage.getItem('favourite');

    if(all){
        const addFav = JSON.parse(all);
        return addFav;
    }
    else{
        return [];
    }
}





//add coffees to local storage

const addCoffee = (coffee) => {
    const favourite = getAllItems();
    const isExist = favourite.find(item => item.id == coffee.id);
    if(isExist) return toast.error('already exist');
    favourite.push(coffee);
    localStorage.setItem('favourite', JSON.stringify(favourite));
    toast.success('Successfully added!');
}

// remove coffees from local storage

const removeCoffee = (id) => {
    const favourite = getAllItems();
    const remaining = favourite.filter(coffee => coffee.id != id);
    localStorage.setItem('favourite', JSON.stringify(remaining));
    toast.success('Successfully removed!');
}

export {addCoffee, getAllItems, removeCoffee};