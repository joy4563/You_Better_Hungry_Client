import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    const { signIn, googleSignIn, gitHubSignIn } = useContext(AuthContext);

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
            })
            .catch((error) => {
                console.log("error", error.message);
            });
        // console.log(user);
    };

    const handleGitHubSignIn = () => {
        gitHubSignIn()
            .then((result) => {
                const currentUser = result.user;
                console.log(currentUser);
            })
            .catch((error) => {
                console.log("error", error.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="form-control mt-6 mx-2">
                        <button
                            className="btn bg-green-500"
                            onClick={handleGoogleSignIn}
                        >
                            <span className="mr-2">
                                <FaGoogle></FaGoogle>
                            </span>{" "}
                            Log In with Google
                        </button>
                    </div>

                    <div className="form-control my-6 mx-2 ">
                        <button
                            className="btn bg-gray-700"
                            onClick={handleGitHubSignIn}
                        >
                            <span className="mr-2">
                                <FaGithub></FaGithub>
                            </span>
                            Log In with GitHub
                        </button>
                    </div>
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
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

                            <p className="mt-3">
                                New here?{" "}
                                <span className="text-blue-800 font-bold text-lg">
                                    <Link to="/register"> Register now!</Link>
                                </span>
                            </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
