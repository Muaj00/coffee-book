import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getAllItems } from "../utilitis";
import Card from "../components/Card";


const Dashboard = () => {

    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        const favorite = getAllItems();
        setCoffees(favorite);
    }, [])
    return (
        <>

            <Header title={'Welcome To Dashboard'} subTitle={'Manage Coffees that you have previously added as favourite. You can view and remove them from here.'}>

            </Header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
                {
                    coffees.map(coffee => <Card key={coffee.id} coffee={coffee}></Card>)
                }
            </div>


        </>

    );
};

export default Dashboard;