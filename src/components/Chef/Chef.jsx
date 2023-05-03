import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Chef = ({ chef }) => {
    const {
        id,
        chefName,
        chefPicture,
        numberOfRecipes,
        likes,
        yearsOfExperience,
    } = chef;

    return (
        <div className="bg-gray-100 mx-auto p-5 rounded-md border border-gray-200">
            <img
                className="h-80  w-full rounded-lg mb-3"
                src={chefPicture}
                alt=""
            />
            <p className="mb-1">
                Name: <span className="font-bold text-xl">{chefName}</span>
            </p>
            <p className="mb-1">{yearsOfExperience} Years of Experience</p>
            <p className="mb-1">Total Recipe:{numberOfRecipes}</p>
            <p className="flex items-center gap-2">
                <span> Likes:</span>
                <span className="flex items-center gap-1 justify-center">
                    <span>{likes}</span>
                    <FaThumbsUp></FaThumbsUp>
                </span>
            </p>
            <Link to= {`/chefs/${id}`} ><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded my-5">
                View Recipes
            </button></Link>
            
        </div>
    );
};

export default Chef;
