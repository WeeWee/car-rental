import { urlFor } from "~/lib/sanity";
import { Car } from "~/types";

export const Cars = ({ cars }: { cars: Car[] }) => {
	return (
		<div className="my-4 mx-2">
			<h2 className="text-2xl">Avaiable Cars</h2>
			<div className="grid grid-cols-4 gap-4 grid-flow-col">
				{cars.map((car, index) => (
					<article key={index} className="w-full h-full">
						<img
							className=" rounded-md object-cover object-center"
							src={urlFor(car.image).url()}
						/>
						<h3 className=" text-xl">
							{car.name} {car.model}
						</h3>
						<p>${car.price}/day</p>
					</article>
				))}
			</div>
		</div>
	);
};
