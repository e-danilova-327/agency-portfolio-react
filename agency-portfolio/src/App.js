import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import ServicesList from "./Components/ServicesList";
import PortfolioGrid from "./Components/PortfolioGrid";
import About from "./Components/About";
import Team from "./Components/Team";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import PortfolioModals from "./Components/PortfolioModals";

function App() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const services = [
            {
                icon: "fa fa-shopping-cart",
                title: "E-Commerce",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
            },
            {
                icon: "fa fa-laptop",
                title: "Responsive Design",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
            },
            {
                icon: "fa fa-lock",
                title: "Web Security",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
            },
        ];
        setServices(services);
    }, []);

    const [about, setAbout] = useState([]);
    useEffect(() => {
        const about = [
            {
                period: "2009-2011",
                title: "Our Humble Beginnings",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
            },
            {
                period: "March 2011",
                title: "An Agency is Born",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
            },
            {
                period: "December 2015",
                title: "Transition to Full Service",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
            },
            {
                period: "July 2020",
                title: "Phase Two Expansion",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!",
            },
        ];
        setAbout(about);
    }, []);

    const [team, setTeam] = useState([]);
    useEffect(() => {
        const team = [
            {
                name: "Parveen Anand",
                position: "Lead Designer",
            },
            {
                name: "Diana Petersen",
                position: "Lead Marketer",
            },
            {
                name: "Larry Parker",
                position: "Lead Developer",
            },
        ];
        setTeam(team);
    }, []);

    const [portfolioGrid, setPortfolioGrid] = useState([]);
    useEffect(() => {
        const portfolioGrid = [
            { title: "Threads", section: "Illustration" },
            { title: "Explore", section: "Graphic Design" },
            { title: "Finish", section: "Identity" },
            { title: "Lines", section: "Branding" },
            { title: "Southwest", section: "Website Design" },
            { title: "Window", section: "Photography" },
        ];
        setPortfolioGrid(portfolioGrid);
    }, []);

    const [togglers, setTogglers] = useState([]);
    useEffect(() => {
        const togglers = [
            {
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                client: "Threads",
                category: "Illustration",
            },
            {
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                client: "Explore",
                category: "Graphic Design",
            },
            {
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                client: "Finish",
                category: "Identity",
            },
            {
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                client: "Lines",
                category: "Branding",
            },
            {
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                client: "Southwest",
                category: "Website Design",
            },
            {
                text: "Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!",
                client: "Window",
                category: "Photography",
            },
        ];
        setTogglers(togglers);
    }, []);

    return (
        <div>
            <Navigation />
            <Header />
            <ServicesList services={services} />
            <PortfolioGrid portfolioGrid={portfolioGrid} />
            <About about={about} />
            <Team team={team} />
            <Clients />
            <Contact />
            <Footer />
            <PortfolioModals togglers={togglers} />
        </div>
    );
}

export default App;
