import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";
// import bgImage from "https://7esl.com/wp-content/uploads/2022/08/American-Food.jpg";

const Home = () => {
    const chefs = useLoaderData();
    // console.log(chefs);

    return (
        <div className="container mx-auto">
            <div
                className="grid grid-cols-1 md:grid-cols-2 mb-10 items-center gap-5 text-justify bg-slate-200 px-5 py-10  "
                
            >
                <img
                    className="rounded-md border border-gray-800 "
                    src="https://7esl.com/wp-content/uploads/2022/08/American-Food.jpg"
                    alt=""
                />
                <p className="text-lg">
                    American food is a rich and diverse culinary tradition that
                    is influenced by a variety of cultures and regions within
                    the United States. The cuisine is often associated with
                    classic comfort foods such as hamburgers, hot dogs, and mac
                    and cheese, which have become staples in American
                    households. These dishes are characterized by their
                    simplicity, hearty portions, and use of local ingredients.{" "}
                    <br />
                    <br />
                    American cuisine continues to evolve and incorporate new
                    flavors and culinary trends from around the world. The
                    country's diverse population and cultural landscape make it
                    a rich source of culinary inspiration, and American chefs
                    and foodies are constantly experimenting with new dishes and
                    techniques. Overall, American food is a testament to the
                    country's unique history and diverse culture, and it remains
                    a source of pride and enjoyment for many Americans and food
                    enthusiasts around the world.
                </p>
            </div>
            <p className="text-3xl md:text-5xl font-extrabold text-center my-10">Available Chefs</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {chefs.map((chef) => (
                    <Chef key={chef.id} chef={chef}></Chef>
                ))}
            </div>
        </div>
    );
};

export default Home;
