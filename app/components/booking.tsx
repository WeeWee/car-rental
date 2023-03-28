import { forwardRef, useState } from "react";
import { Car } from "~/types";

export const Booking = ({ cars }: { cars: Car[] }) => {
	const [startDate, setStartDate] = useState(new Date());
	const [returnDate, setReturnDate] = useState(addDays(startDate, 3));
	function addDays(date: Date, days: number) {
		let result = new Date(date);
		result.setDate(result.getDate() + days);
		return result;
	}
	const DatePicker = ({ date, name }: { date: Date; name: string }) => {
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		const valueOptions = {
			year: "numeric",
			month: "numeric",
			day: "numeric",
		};

		const dateToString = () => date.toLocaleString("en-US", options);
		const dateToValue = () => date.toLocaleString("en-US", valueOptions);

		return (
			<select className="select-field" name={name}>
				<option value={dateToValue()}>{dateToString()}</option>
			</select>
		);
	};
	return (
		<div className="lg:px-10 px-2 bg-black flex justify-center items-center lg:block">
			<form
				className="flex flex-col  lg:flex-row  justify-between rounded-lg w-1/2 lg:w-full text-white"
				method="get"
			>
				<div className="flex flex-col">
					<label htmlFor="locations">Choose a location</label>
					<select
						name="locations"
						id="locations"
						defaultValue="Enter location"
						className="select-field"
					>
						<option value="Malaga">Malaga, Spain</option>
					</select>
				</div>
				<div className="flex flex-col">
					<label htmlFor="pickup">Pick-up date</label>
					<DatePicker name="pickup" date={startDate} />
				</div>
				<div className="flex flex-col">
					<label htmlFor="return">Return date</label>
					<DatePicker name="return" date={returnDate} />
				</div>
				<div className="flex flex-col">
					<label htmlFor="cars">Choose a Car</label>
					<select
						name="cars"
						id="cars"
						multiple
						className="select-field   h-16 mb-4"
					>
						{cars.map((car, index) => (
							<option key={index} value={`${car.name}, ${car.model}`}>
								{car.name}, {car.model}
							</option>
						))}
					</select>
				</div>
				<div className="flex items-center justify-center md:items-start md:justify-start md:pt-6 md:w-24 lg:w-32">
					<button
						type="submit"
						className="mb-4 lg:mb-0 py-1 md:p-2 md:mt-0.5 font-semibold bg-gray-700 hover:bg-gray-600 rounded-md w-1/2 lg:w-full "
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
};
