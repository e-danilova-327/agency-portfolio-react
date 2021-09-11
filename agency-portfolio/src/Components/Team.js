import React from "react";
import first from "../assets/img/team/1.jpg";
import second from "../assets/img/team/2.jpg";
import third from "../assets/img/team/3.jpg";

const Team = ({ team }) => {
    return (
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">
                        Our Amazing Team
                    </h2>
                    <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                    </h3>
                </div>
                <div className="row">
                    {team.map((member, index) => {
                        return (
                            <div className="col-lg-4" key={index}>
                                <div className="team-member">
                                    <img
                                        className="mx-auto rounded-circle"
                                        src={
                                            index === 0
                                                ? first
                                                : index === 1
                                                ? second
                                                : third
                                        }
                                        alt=""
                                    />
                                    <h4>{member.name}</h4>
                                    <p className="text-muted">
                                        {member.position}
                                    </p>
                                    <a
                                        className="btn btn-dark btn-social mx-2"
                                        href="#!"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a
                                        className="btn btn-dark btn-social mx-2"
                                        href="#!"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a
                                        className="btn btn-dark btn-social mx-2"
                                        href="#!"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <p className="large text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Aut eaque, laboriosam veritatis, quos non quis
                            ad perspiciatis, totam corporis ea, alias ut unde.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
