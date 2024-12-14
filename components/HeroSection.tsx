import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroTyped from "./HeroTyped";

const slideImages = [];

function HeroSection() {
	return (
		<div className="hero__section section">
			<div className="hero--container">
				<div className="hero__text--box">
					<h1 className="primary--heading">
						Hire trusted <HeroTyped /> <br /> in just Minutes.
					</h1>
					<p>Access the best pool of skilled workers to simplify your task, meet deadlines, and reduce risk.</p>
				</div>

				<div className="hero__img--box">{/* <HeroCarousel slideImages={} /> */}</div>
			</div>
		</div>
	);
}

export default HeroSection;
