import { FaceFrownIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <FaceFrownIcon className="w-40 h-40 text-yellow-500" />
                <div>
                    {" "}
                    <img
                        className=" rounded-lg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWru8q17zpOzzzT1s475ZS_8fOL1GS0teSw&usqp=CAU"
                        alt=""
                    />
                </div>

                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-yellow-500">
                        <span className="sr-only">Error</span>
                        {status || 404}
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
                        {error?.message}
                    </p>
                    <p className="text-xl text-red-500 font-bold my-8">
                        There has been occured an error.
                    </p>
                    <Link to="/" className="btn">
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
