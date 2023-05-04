import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useState } from "react";
import "./Blog.css";

const Blog = () => {
    const [loader, setLoader] = useState(false);
    const downloadToPdf = () => {
        const capture = document.getElementById("download_section");
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL("img/png");
            const doc = new jsPDF("p", "mm", "a4");
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save("blog.pdf");
        });
    };
    return (
        <div className="container mx-auto mt-20">
            <section>
                <p className="text-3xl text-center font-bold mb-10">
                    Information about React, Node and Express
                </p>
            </section>
            <section id="download_section">
                <div className="back">
                    <section className="first-section">
                        <div className="section-style">
                            <h2 className="font-bold text-xl mb-3">
                                Tell us the differences between uncontrolled and
                                controlled components?
                            </h2>
                            <p className="">
                                {" "}
                                In React, a controlled component is a component
                                that is controlled by React state, while an
                                uncontrolled component is a component that
                                maintains its own internal state. <br /> <br />{" "}
                                A controlled component receives its current
                                value and an update callback via props, and the
                                parent component manages the state of the
                                component. When the user interacts with the
                                component, the parent component updates the
                                state, which in turn updates the component's
                                value. <br />
                                <br /> An uncontrolled component, maintains its
                                own internal state, and when the user interacts
                                with the component, it updates its own state,
                                which in turn updates the component's value.
                            </p>
                        </div>
                    </section>

                    <section className="first-section">
                        <div className="section-style">
                            <h2 className="font-bold text-xl mb-3">
                                How to validate React props using PropTypes?
                            </h2>
                            <div className="mb-3">
                                {" "}
                                Props are used to passing the read-only
                                attributes to React components. For the proper
                                functioning of components and to avoid future
                                bugs and glitches it is necessary that props are
                                passed correctly. Hence, it is required to use
                                props validation for improving react component’s
                                performance. React JS has an inbuilt feature for
                                validating props data type to make sure that
                                values passed through props are valid. React
                                components have a property called propTypes
                                which is used to setup data type validation.{" "}
                                <br />
                                <br />
                                PropTypes exports a range of validators that can
                                be used to make sure the data you receive is
                                valid. In this example, we’re using
                                PropTypes.string. When an invalid value is
                                provided for a prop, a warning will be shown in
                                the JavaScript console. For performance reasons,
                                propTypes is only checked in development mode.
                            </div>
                        </div>
                    </section>

                    <section className="first-section">
                        <div className="section-style">
                            <h2 className="font-bold text-xl mb-3">
                                Tell us the difference between nodejs and
                                express js?
                            </h2>
                            <div>
                                Developers describe ExpressJS as "Sinatra
                                inspired web development framework for node.js
                                -- insanely fast, flexible, and simple". Express
                                is a minimal and flexible node.js web
                                application framework, providing a robust set of
                                features for building single and multi-page, and
                                hybrid web applications. On the other hand,
                                Node.js is detailed as "A platform built on
                                Chrome's JavaScript runtime for easily building
                                fast, scalable network applications". Node.js
                                uses an event-driven, non-blocking I/O model
                                that makes it lightweight and efficient, perfect
                                for data-intensive real-time applications that
                                run across distributed devices. <br /> <br />{" "}
                                ExpressJS belongs to "Microframeworks (Backend)"
                                category of the tech stack, while Node.js can be
                                primarily classified under "Frameworks (Full
                                Stack)". <br /> <br /> "Simple", "Node.js" and
                                "Javascript" are the key factors why developers
                                consider ExpressJS; whereas "Npm", "Javascript"
                                and "Great libraries" are the primary reasons
                                why Node.js is favored. <br /> <br /> ExpressJS
                                and Node.js are both open source tools.
                                ExpressJS with 44.6K GitHub stars and 7.48K
                                forks on GitHub appears to be more popular than
                                Node.js with 35.5K GitHub stars and 7.78K GitHub
                                forks. <br />
                                <br /> According to the StackShare community,
                                Node.js has a broader approval, being mentioned
                                in 4104 company stacks & 4042 developers stacks;
                                compared to ExpressJS, which is listed in 854
                                company stacks and 790 developer stacks.
                            </div>
                        </div>
                    </section>

                    <section className="first-section">
                        <div className="section-style">
                            <h2 className="font-bold text-xl mb-3">
                                What is a custom hook, and why will you create a
                                custom hook?
                            </h2>
                            <p>
                                {" "}
                                Custom hooks are a handy way to encapsulate
                                hook-related logic that can be re-used across
                                components when using component composition
                                isn’t really something that will help, make
                                sense, or just look semantically right. Think of
                                a custom hook as a super-powered helper
                                function.
                            </p>
                            <p>
                                With custom React Hooks, we can reuse stateful
                                logic easily across different components in an
                                optimized and scalable format. Custom Hooks also
                                produce a clean and structured codebase that
                                reduces complexity and redundancy in your React
                                project.
                            </p>
                        </div>
                    </section>
                </div>
            </section>
            <section className="flex items-center justify-center">
                <button
                    onClick={downloadToPdf}
                    disabled={!(loader === false)}
                    className="btn btn-primary mt-9"
                >
                    {loader ? (
                        <span>Downloading</span>
                    ) : (
                        <span>Download as PDF</span>
                    )}
                </button>
            </section>
        </div>
    );
};

export default Blog;
