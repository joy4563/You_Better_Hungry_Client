import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";

const Home = () => {
    const chefs = useLoaderData();
    // console.log(chefs);

    return (
        <div className="container mx-auto">
            <h3>This is home</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {chefs.map((chef) => (
                    <Chef key={chef.id} chef={chef}></Chef>
                ))}
            </div>
        </div>
    );
};

export default Home;
