import React from "react";

import {
    FaGoogle,
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-black mt-28">
            <div className="text-white pt-12">
                <p className="text-5xl font-bold text-center mb-5">
                    American Food
                </p>
            </div>

            <div className="flex gap-3 items-center justify-center mt-10 mb-5">
                <FaFacebook className="me-2 text-white" />
                <FaGoogle className="me-2 text-white" />
                <FaGithub className="me-2 text-white" />
                <FaInstagram className="me-2 text-white" />
                <FaTwitter className="me-2 text-white" />
            </div>
            <div className="text-white flex md:flex-row flex-col items-center justify-center gap-8 mt-5">
                <p className="text-lg font-bold ">YOU BETTER HUNGRY</p>
                <p>Advertising</p>
                <p>Terms and Condition</p>
                <p>Privacy Policy</p>
            </div>
            <div className="text-white flex md:flex-row flex-col items-center justify-center gap-5 mt-5 pb-20">
                <p>@Copyright 2023</p>
                <p>
                    Developed by{" "}
                    <span className="text-lg font-bold"> Joy Mondal</span>
                </p>
            </div>
        </div>
    );
};

export default Footer;
