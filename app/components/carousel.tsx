import { useEffect, useState } from "react";
import { urlFor } from "~/lib/sanity";
import { Car } from "~/types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
export const CarouselComponent = ({
	cars,
	autoSlide,
	autoSlideIntervall = 4000,
}: {
	cars: Car[];
	autoSlide: boolean;
	autoSlideIntervall?: number;
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const prev = () =>
		setCurrentSlide(currentSlide === 0 ? cars.length - 2 : currentSlide - 2);
	const next = () =>
		setCurrentSlide(currentSlide === cars.length - 2 ? 0 : currentSlide + 2);
	useEffect(() => {
		if (!autoSlide) return;
		const slideIntervall = setInterval(next, autoSlideIntervall);
		return () => clearInterval(slideIntervall);
	});
	return (
		<div id="vehicles" className="relative my-4 hidden  lg:block">
			{/* <h1 className="text-2xl mx-4">Our cars</h1> */}
			<div className=" flex overflow-x-hidden w-full">
				{cars.map((car, index) => (
					<article
						key={index}
						className={`flex-shrink-0 flex-grow-0 h-full max-w-[50%] p-2 transition-transform ease-out duration-300 `}
						style={{
							transform: `translateX(-${currentSlide * 100}%)`,
							flexBasis: "50%",
						}}
					>
						<img
							className=" rounded-md object-cover object-center w-full max-h-60"
							src={urlFor(car.image).url()}
						/>
						<h3 className="">
							{car.name} {car.model}
						</h3>
						<p className="text-lg font-semibold">${car.price}/day</p>
					</article>
				))}
				<button
					className="absolute left-5 top-0 bottom-0 my-auto mx-0 bg-white/60 hover:bg-white/70 rounded-xl w-20 h-12 flex justify-center items-center"
					onClick={prev}
				>
					<ChevronLeftIcon className="w-10 h-10 text-white" />
				</button>
				<button
					className="absolute right-5 top-0 bottom-0 my-auto mx-0 bg-white/60 hover:bg-white/70 rounded-xl w-20 h-12 flex justify-center items-center"
					onClick={next}
				>
					<ChevronRightIcon className="w-10 h-10 text-white" />
				</button>
			</div>
		</div>
	);
};
