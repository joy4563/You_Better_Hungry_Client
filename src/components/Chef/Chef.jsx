import React from "react";
import { FaThumbsUp } from "react-icons/fa";

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
        <div className="bg-red-600">
            <img
                className="h-80  w-5/6 rounded-lg mb-4"
                src={chefPicture}
                alt=""
            />
            <p className="font-bold text-xl">Name:{chefName}</p>
            <p>{yearsOfExperience} Years of Experience</p>
            <p>Total Recipe:{numberOfRecipes}</p>
            <p className="flex items-center gap-2">
                <span>
                    <FaThumbsUp></FaThumbsUp>
                </span>
                <span>{likes}</span>
            </p>
        </div>
    );
};

export default Chef;
