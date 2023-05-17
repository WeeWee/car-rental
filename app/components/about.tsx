import {
	ClockIcon,
	BanknotesIcon,
	CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import Image from "public/assets/car-rental-image.jpg";
export const About = () => {
	return (
		<div id="about-us" className=" flex flex-col md:flex-row pl-2">
			<img src={Image} className="w-full md:w-1/2 rounded-md" />
			<div className="flex flex-col w-full md:w-1/2 px-4 lg:px-10">
				<h3 className="text-2xl font-semibold">About Us</h3>
				<p className="py-2 font-semibold">Car Rental Spain</p>
				<p className="py-2 pb-6">
					A car rental service with a range of different cars from business to
					luxury cars, currently located in Spain and planning to expand our
					services in France, Italy and Greece. Our goal is for the costumer to
					rent a car affordably, whilst still maintaining luxury comfort and
					class.
				</p>

				<div className="bg-black rounded-lg text-white flex flex-col lg:flex-row justify-between max-w-xs lg:max-w-lg p-2">
					<div className="flex flex-col md:flex-row lg:flex-col items-center">
						<ClockIcon className="w-8 h-8 " />
						<p className="text-sm ml-2">Open 8am - 11pm</p>
					</div>
					<div className="flex flex-col md:flex-row lg:flex-col items-center">
						<CheckBadgeIcon className="w-8 h-8" />
						<p className="text-sm ml-2">Authorized Car rental</p>
					</div>
					<div className="flex flex-col md:flex-row lg:flex-col items-center">
						<BanknotesIcon className="w-8 h-8" />
						<p className="text-sm ml-2">Book online, pay in person</p>
					</div>
				</div>
			</div>
		</div>
	);
};
