import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ChefRecipe = () => {
    const chefDetails = useLoaderData();
    console.log(chefDetails[0].recipe);
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
        <div className="text-lg ">
            {/* banner */}
            <div className="md:flex gap-6  items-center bg-gray-300 border border-gray-400 px-4 py-9">
                <div>
                    <img
                        className="mb-4 md:mb-0  rounded-md"
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
                            <FaThumbsUp></FaThumbsUp>
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

            <div>
                {recipe.map((recipe) => (
                    <>{recipe.recipeName}</>
                ))}
            </div>
        </div>
    );
};

export default ChefRecipe;
