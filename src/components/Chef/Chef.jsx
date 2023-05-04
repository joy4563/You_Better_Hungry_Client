import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";


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
        <div className="bg-gray-100 mx-auto p-5 rounded-md border border-gray-200 ">
            <LazyLoad offset={300} >
                <img
                    className=" w-full rounded-lg mb-3"
                    src={chefPicture}
                    alt=""
                />
            </LazyLoad>

            <p className="mb-3 ">
                <span className="font-semibold mr-1"> Name:</span>{" "}
                <span className="font-extrabold text-xl">{chefName}</span>
            </p>
            <p className="mb-2">
                <span className="font-semibold mr-1">Experience:</span>
                {yearsOfExperience} Years
            </p>
            <p className="mb-2">
                <span className="font-semibold mr-1"> Total Recipe: </span>
                {numberOfRecipes}
            </p>
            <p className="flex items-center gap-2">
                <span className="font-semibold mr-1"> Likes:</span>
                <span className="flex items-center gap-1 justify-center">
                    <span>{likes}</span>
                    <FaThumbsUp className="text-blue-500"></FaThumbsUp>
                </span>
            </p>
            <Link to={`/chefs/${id}`}>
                <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 my-3 w-full ">
                    View Recipes
                </button>
            </Link>
        </div>
    );
};

export default Chef;
