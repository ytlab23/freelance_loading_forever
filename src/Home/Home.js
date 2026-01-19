import './Home.css';
import Neon from "../Neon";
import { useEffect, useState } from "react";

function Home() {
    const messages = [
        "Site is loading...",
        "Loading assets....",
        "We are working on it....",
        "Just a few more moments...",
        "Please hang tight...",
        "Loading is taking longer than expected...",
        "We appreciate your patience...",
        "We're doing our best to speed things up...",
        "Almost there...",
        "Thank you for waiting..."
    ];

    const [index, setIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % messages.length);
        }, 7000); // Change the delay according to your preference

        const timer = setTimeout(() => {
            setLoading(false);
            clearInterval(interval);
        }, 60000); // Set timeout to 1 minute (60000 milliseconds)

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [messages.length]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (progress < 100) {
                setProgress(progress + 1);
            }
        }, 600); // Adjusted interval for smoother progress

        return () => clearInterval(timer);
    }, [progress]);

    return (
        <div id="app">
            <div id="hero">
                <h1>{loading ? "Please wait" : "Loading complete"}</h1>
                {loading ? (
                    <>
                        <div className="loading-container">
                            <p className="loading-text">{messages[index]}</p>
                        </div>
                        <div className="loading-bar-container">
                            <span className="loading-bar-progress">
                                {progress}%
                            </span>
                            <div className="loading-bar-home" style={{ width: `${progress}%` }}></div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="home">
                            <p>
                                <b>Welcome to siteisloading.co!</b><br/>
                                <br/>

                                We specialize in providing an unparalleled loading experience. Whether you’re waiting for a page to load, an image to render, or your patience to run out, we’ve got you covered.
                            </p>
                        </div>
                    </>
                )}
                <nav>
                    <a href='/home'>Home</a>
                    <a href='/about'>About</a>
                    <a href='/contact_us'>Contact us</a>
                </nav>
                <Neon />
            </div>
        </div>
    )
}

export default Home;
