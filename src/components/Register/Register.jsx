import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    const [errors, setErrors] = useState("");
    // console.log(user?.displayName);

    const handleRegister = (event) => {
        event.preventDefault();
        setErrors("");

        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(email, name, password);

        if (password.length < 6) {
            setErrors("Password at least 6 chaaracter");
            return;
        } else {
            createUser(email, password, name)
                .then((result) => {
                    const loggedUser = result.user;
                    loggedUser.displayName = name;
                    console.log(loggedUser);
                    form.reset();
                })
                .catch((error) => {
                    console.log(error);
                    setErrors(error.message);
                });
        }
    };
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    placeholder="name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Photo URL
                                    </span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="photoURL"
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                />
                                <label className="my-2 ">
                                    Already have an account? <Link
                                        to="/login"
                                        className="label-text-alt link link-hover"
                                    >
                                        <span className="text-blue-800 font-bold text-lg">
                                        Log in now!
                                        </span>
                                    </Link>
                                </label>
                            </div>
                            <p className="text-red-500 font-semibold ">
                                {errors}
                            </p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>{" "}
        </div>
    );
};

export default Register;
