import React from "react";
import { FaBookmark, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe }) => {
    const { id, recipeName, recipeImage, method, ingredients, rating } = recipe;
    // console.log(recipe);

    const handleFavourite = (event) => {
        // console.log("Favourite");
        toast("This is added as your Favourite recipe!");
        event.target.disabled = true;
    };
    return (
        <div>
            <div className="bg-gray-100 mx-auto p-5 rounded-md border border-gray-200 flex flex-col ">
                <img
                    className="h-80  w-full rounded-lg mb-3"
                    src={recipeImage}
                    alt=""
                />
                <p className="mb-3 ">
                    <span className="font-semibold mr-1"> Name:</span>{" "}
                    <span className="font-extrabold text-xl">{recipeName}</span>
                </p>
                <div className="flex items-center mb-4">
                    <div className=" mb-3 flex-grow">
                        <span className="font-semibold mr-2 ">Ratings:</span>
                        {rating}
                        <Rating
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={
                                <FaStar className="text-warning"></FaStar>
                            }
                            fullSymbol={<FaStar></FaStar>}
                        ></Rating>
                    </div>
                    <div>
                        <button
                            type="submit"
                            onClick={handleFavourite}
                            className="btn btn-success"
                        >
                            Favourite
                        </button>
                        <ToastContainer />
                    </div>
                </div>

                <p className="mb-3">
                    <span className="font-semibold mr-1">Ingridients:</span>
                    <span>
                        {ingredients.map((n) => (
                            <>{n}, </>
                        ))}
                    </span>
                </p>

                <p className="mb-2">
                    <span className="font-semibold mr-1"> Cooking Method:</span>
                    {method}
                </p>
            </div>
        </div>
    );
};

export default Recipe;
