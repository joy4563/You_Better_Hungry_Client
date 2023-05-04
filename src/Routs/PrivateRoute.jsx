import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div
                className="radial-progress bg-primary text-primary-content border-4 border-primary text-center items-center justify-center"
                style={{ "--value": 70 }}
            >
                70%
            </div>
        );
    }
    if (user) {
        return children;
    }
    return (
        <Navigate
            state={{ from: location }}
            to="/login"
            replace={true}
        ></Navigate>
    );
};

export default PrivateRout;
