import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const ChefRecipe = () => {
    const chefDetails = useLoaderData();
    // console.log(chefDetails[0].recipe);
    const {
        id,
        chefPicture,
        chefName,
        likes,
        numberOfRecipes,
        recipe,
        shortBio,
        yearsOfExperience,
    } = chefDetails[0];
    return (
        <div className="text-lg container mx-auto">
            {/* banner */}
            <div className="md:flex gap-6  items-center bg-gray-300 border border-gray-400 px-4 py-9 mb-11 rounded-md">
                <div>
                    <img
                        className="mb-4 md:mb-0 md:mr-72  rounded-md"
                        src={chefPicture}
                        alt=""
                    />
                </div>
                <div className="">
                    <p className="text-3xl font-bold mb-4">{chefName}</p>
                    <p className="mb-2">
                        <span className="font-semibold text-xl mr-1">
                            {" "}
                            Experience:
                        </span>
                        {yearsOfExperience} Years{" "}
                    </p>
                    <p className="mb-2">
                        {" "}
                        <span className="font-semibold text-xl mr-1">
                            Number of recipe:
                        </span>{" "}
                        {numberOfRecipes}
                    </p>
                    <p className="flex items-center mb-2">
                        <span className="font-semibold text-xl mr-1">
                            Likes:
                        </span>
                        {likes}{" "}
                        <span className="ml-1">
                            <FaThumbsUp className="text-blue-500"></FaThumbsUp>
                        </span>
                    </p>
                    <p className="mb-2">
                        {" "}
                        <span className="font-semibold text-xl mr-1">
                            Bio:{" "}
                        </span>
                        {shortBio}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                {recipe.map((recipe) => (
                    <Recipe key={recipe.recipeId} recipe={recipe}></Recipe>
                ))}
            </div>
        </div>
    );
};

export default ChefRecipe;
