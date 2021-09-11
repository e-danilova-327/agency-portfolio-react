import React from "react";

const ServicesList = ({ services }) => {
    return (
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Services</h2>
                    <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                    </h3>
                </div>
                <div className="row text-center">
                    {services.map((service, index) => (
                        <div className="col-md-4" key={index}>
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary" />
                                <i
                                    className={`fas ${service.icon} fa-stack-1x fa-inverse`}
                                />
                            </span>
                            <h4 className="service-heading">{service.title}</h4>
                            <p className="text-muted">{service.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
