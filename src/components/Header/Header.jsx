import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaUser } from "react-icons/fa";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const picture = user?.photoURL;
    // console.log(user.photoURL);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch((error) => {
                console.error(error);
            });
    };

    // hoover
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div>
            <div className="flex justify-between  bg-primary text-primary-content px-2 py-3">
                <div className="">
                    <div className="flex flex-col items-center md:flex-row ">
                        <Link className="btn btn-ghost normal-case text-lg md:text-xl  hover:bg-green-300 hover:text-black">
                            You Better HUngry
                        </Link>

                        <div>
                            {" "}
                            <Link
                                className="btn btn-ghost normal-case  hover:bg-green-300 hover:text-black"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="btn btn-ghost normal-case hover:bg-green-300 hover:text-black"
                                to="/blog"
                            >
                                Blog
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center ">
                    {user ? (
                        <>
                            <p className="flex items-center">
                                <span>
                                    {isHovering && (
                                        <span>{user?.displayName}</span>
                                    )}
                                </span>{" "}
                                <span
                                    onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOut}
                                    className="text-black bg-white rounded-full p-1 ml-2"
                                >
                                    <span>
                                        {picture ? (
                                            <img
                                                className="h-10 w-10 rounded-full"
                                                src={picture}
                                                alt=""
                                            />
                                        ) : (
                                            <FaUser className="h-6 w-6"></FaUser>
                                        )}
                                    </span>
                                </span>
                            </p>

                            <button
                                onClick={handleLogOut}
                                className="btn  ml-2 text-white bg-gradient-to-r from-green-500 to-pink-500 hover:bg-gradient-to-l  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <Link to="/login">
                            <button className="btn  ml-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Log In
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
