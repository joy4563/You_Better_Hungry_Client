import React from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";
// import bgImage from "https://7esl.com/wp-content/uploads/2022/08/American-Food.jpg";

const Home = () => {
    const chefs = useLoaderData();
    const latest= chefs[0].recipe
    const latest2= chefs[5].recipe
    // console.log(latest);

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10 items-center gap-5 text-justify bg-slate-200 px-5 py-10  ">
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
            <p className="text-3xl md:text-5xl font-extrabold text-center my-10">
                Available Chefs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {chefs.map((chef) => (
                    <Chef key={chef.id} chef={chef}></Chef>
                ))}
            </div>

            {/* latest from american chef */}

            <p className="text-3xl md:text-5xl font-extrabold text-center my-10">
                Latest from American Chefs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 mx-3">
                {latest.map((rec) => (
                    <div
                        key={rec.recipeId}
                        className="border border-gray-400 bg-gray-200 p-2 rounded-md"
                    >
                        <img
                            className="rounded-md mb-2"
                            src={rec.recipeImage}
                            alt=""
                        />
                        <p className="font-semibold mr-1">{rec.recipeName}</p>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-3">
                {latest2.map((rec) => (
                    <div
                        key={rec.recipeId}
                        className="border border-gray-400 bg-gray-200 p-2 rounded-md"
                    >
                        <img
                            className="rounded-md mb-2"
                            src={rec.recipeImage}
                            alt=""
                        />
                        <p className="font-semibold mr-1">{rec.recipeName}</p>
                    </div>
                ))}
            </div>

            {/* 2nd extra section */}
            <div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-center mt-16 mb-5">
                    The Life of a Chef
                </h2>
                <p className="text-center text-lg">
                    The life of a chef can be demanding and challenging, yet
                    also rewarding. Here are some aspects of what a chef's life
                    might entail:
                </p>
                <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 mx-3">
                    <li className=" border border-gray-300 bg-gray-200 p-4 rounded-md text-lg">
                        <strong>Long hours:</strong> Chefs often work long,
                        irregular hours that can include weekends, evenings, and
                        holidays. They might have to wake up early in the
                        morning to prepare for the day or stay late into the
                        night to close the kitchen.
                    </li>
                    <li className=" border border-gray-300 bg-gray-200 p-4 rounded-md text-lg">
                        <strong>High-pressure environment:</strong> Working in a
                        kitchen can be high-pressure and fast-paced, with many
                        tasks to complete in a short amount of time. Chefs need
                        to be able to multitask, stay organized, and work
                        efficiently to keep up with demand.
                    </li>
                    <li className=" border border-gray-300 bg-gray-200 p-4 rounded-md text-lg">
                        <strong>Creative expression:</strong> Chefs have the
                        opportunity to express their creativity and culinary
                        skills through developing new dishes, experimenting with
                        new ingredients, and creating unique flavor
                        combinations.
                    </li>
                    <li className=" border border-gray-300 bg-gray-200 p-4 rounded-md text-lg">
                        <strong>Physical demands:</strong> The job of a chef can
                        be physically demanding, as it requires standing for
                        long periods of time, lifting heavy pots and pans, and
                        working in hot environments.
                    </li>
                    <li className=" border border-gray-300 bg-gray-200 p-4 rounded-md text-lg">
                        <strong>Teamwork:</strong> Chefs need to work closely
                        with their team, including line cooks, prep cooks, and
                        servers, to ensure that the kitchen runs smoothly and
                        dishes are prepared and served on time.
                    </li>
                    <li className=" border border-gray-300 bg-gray-200 p-4 rounded-md text-lg">
                        <strong>Continuous learning:</strong> Chefs need to stay
                        up-to-date with industry trends, new cooking techniques,
                        and emerging ingredients to stay relevant in the
                        competitive culinary world.
                    </li>
                </ol>
                <p className="text-center text-lg">
                    Despite the challenges, many chefs find their work
                    incredibly fulfilling and enjoy the opportunity to share
                    their passion for food with others.
                </p>
            </div>
        </div>
    );
};

export default Home;
