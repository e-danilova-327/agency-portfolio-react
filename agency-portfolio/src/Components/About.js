import React from "react";
import one from "../assets/img/about/1.jpg";
import two from "../assets/img/about/2.jpg";
import three from "../assets/img/about/3.jpg";
import four from "../assets/img/about/4.jpg";

const About = ({ about }) => {
    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                    </h3>
                </div>
                <ul className="timeline">
                    {about.map((item, index) => {
                        return (
                            <li
                                className={
                                    index % 2 === 0 ? "" : "timeline-inverted"
                                }
                                key={index}
                            >
                                <div className="timeline-image">
                                    <img
                                        className="rounded-circle img-fluid"
                                        src={
                                            index === 0
                                                ? one
                                                : index === 1
                                                ? two
                                                : index === 2
                                                ? three
                                                : four
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>{item.period}</h4>
                                        <h4 className="subheading">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
