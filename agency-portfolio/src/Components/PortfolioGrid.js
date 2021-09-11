import React from "react";
import one from "../assets/img/portfolio/1.jpg";
import two from "../assets/img/portfolio/2.jpg";
import three from "../assets/img/portfolio/3.jpg";
import four from "../assets/img/portfolio/4.jpg";
import five from "../assets/img/portfolio/5.jpg";
import six from "../assets/img/portfolio/6.jpg";

const PortfolioGrid = ({ portfolioGrid }) => {
    return (
        <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">
                        Portfolio
                    </h2>
                    <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                    </h3>
                </div>
                <div className="row">
                    {portfolioGrid.map((portfolio, index) => {
                        return (
                            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
                                <div className="portfolio-item">
                                    <a
                                        className="portfolio-link"
                                        data-toggle="modal"
                                        href={
                                            index === 0
                                                ? "#portfolioModal1"
                                                : index === 1
                                                ? "#portfolioModal2"
                                                : index === 2
                                                ? "#portfolioModal3"
                                                : index === 3
                                                ? "#portfolioModal4"
                                                : index === 4
                                                ? "#portfolioModal5"
                                                : "#portfolioModal6"
                                        }
                                    >
                                        <div className="portfolio-hover">
                                            <div className="portfolio-hover-content">
                                                <i className="fas fa-plus fa-3x"></i>
                                            </div>
                                        </div>
                                        <img
                                            className="img-fluid"
                                            src={
                                                index === 0
                                                    ? one
                                                    : index === 1
                                                    ? two
                                                    : index === 2
                                                    ? three
                                                    : index === 3
                                                    ? four
                                                    : index === 4
                                                    ? five
                                                    : six
                                            }
                                            alt=""
                                        />
                                    </a>
                                    <div className="portfolio-caption">
                                        <div className="portfolio-caption-heading">
                                            {portfolio.title}
                                        </div>
                                        <div className="portfolio-caption-subheading text-muted">
                                            {portfolio.section}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
