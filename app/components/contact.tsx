import {
	MapPinIcon,
	EnvelopeIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";
export const Contact = () => {
	return (
		<div
			id="contacts"
			className="py-2 pb-4 mt-4  bg-black text-white flex justify-center"
		>
			<div className="flex flex-col md:flex-row items-center justify-between w-2/3">
				<div className="flex gap-2 items-center min-w-full md:min-w-0">
					<MapPinIcon className="md:w-14 md:h-14 h-12 w-12" />
					<div className="">
						<p>Location</p>
						<p className="text-sm">
							Mobalpa, P.º de Sancha, 2, 29016 Málaga, Spain
						</p>
					</div>
				</div>
				<div className="flex gap-2  items-center min-w-full md:min-w-0">
					<EnvelopeIcon className="md:w-16 md:h-16 h-10 w-10" />
					<div className="">
						<p>Email</p>
						<p className="text-sm">car-rental-spain@contact.us</p>
					</div>
				</div>
				<div className="flex gap-2  items-center min-w-full md:min-w-0">
					<PhoneIcon className="md:w-12 md:h-12 h-10 w-10 " />
					<div className="">
						<p>Telephone number</p>
						<p className="text-sm">+{"(46)"} 721236970 </p>
					</div>
				</div>
			</div>
		</div>
	);
};
