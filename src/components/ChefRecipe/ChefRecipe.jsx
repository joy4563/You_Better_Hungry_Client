import React from "react";
import { useLoaderData } from "react-router-dom";

const ChefRecipe = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails[0].id);
    const { id } = chefDetails[0];
    return (
        <div>
            <h1>this is recipes for :{id}</h1>
        </div>
    );
};

export default ChefRecipe;
