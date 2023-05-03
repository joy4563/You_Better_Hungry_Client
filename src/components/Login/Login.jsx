import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const currentUser = result.user;
                console.log(currentUser);
                setUser(currentUser);
            })
            .catch((error) => {
                console.log("error", error.message);
            });
        // console.log(user);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="form-control mt-6">
                        <button
                            className="btn btn-primary"
                            onClick={handleGoogleSignIn}
                        >
                            <span className="mr-2">
                                <FaGoogle></FaGoogle>
                            </span>{" "}
                            Log In with Google
                        </button>
                    </div>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <div className="form-control my-6">
                                <button className="btn btn-primary">
                                    <span className="mr-2">
                                        <FaGithub></FaGithub>
                                    </span>
                                    Log In with GitHub
                                </button>
                            </div>
                            <hr />
                            <p className=" text-center">or</p>
                            <hr />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a
                                    href="#"
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <Link to="/register">New here? Register now!</Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
