import { Link } from "react-router";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";

export default function HomePage() {
    return (
        <div className="home-page">
            <Hero />
            <Carousel />
            </div>
    );
}