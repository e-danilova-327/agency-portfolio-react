import React from "react";
import closeIcon from "../assets/img/close-icon.svg";
import one from "../assets/img/portfolio/1.jpg";
import two from "../assets/img/portfolio/2.jpg";
import three from "../assets/img/portfolio/3.jpg";
import four from "../assets/img/portfolio/4.jpg";
import five from "../assets/img/portfolio/5.jpg";
import six from "../assets/img/portfolio/6.jpg";

const PortfolioModals = ({ togglers }) => {
    return (
        <>
            {togglers.map((toggler, index) => {
                return (
                    <div
                        className="portfolio-modal modal fade"
                        id="portfolioModal1"
                        tabIndex="-1"
                        role="dialog"
                        aria-hidden="true"
                        key={index}
                    >
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div
                                    className="close-modal"
                                    data-bs-dismiss="modal"
                                >
                                    <img src={closeIcon} alt="Close modal" />
                                </div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-8">
                                            <div className="modal-body">
                                                <h2 className="text-uppercase">
                                                    Project Name
                                                </h2>
                                                <p className="item-intro text-muted">
                                                    Lorem ipsum dolor sit amet
                                                    consectetur.
                                                </p>
                                                <img
                                                    className="img-fluid d-block mx-auto"
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
                                                    alt="..."
                                                />
                                                <p>{togglers.text}</p>
                                                <ul className="list-inline">
                                                    <li>
                                                        <strong>Client:</strong>
                                                        {togglers.client}
                                                    </li>
                                                    <li>
                                                        <strong>
                                                            Category:
                                                        </strong>
                                                        {togglers.category}
                                                    </li>
                                                </ul>
                                                <button
                                                    className="btn btn-primary btn-xl text-uppercase"
                                                    data-bs-dismiss="modal"
                                                    type="button"
                                                >
                                                    <i className="fas fa-times me-1"></i>
                                                    Close Project
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default PortfolioModals;
