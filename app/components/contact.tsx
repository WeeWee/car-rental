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
			<div className="flex items-center justify-between w-2/3">
				<div className="flex gap-2 items-center">
					<MapPinIcon className="w-14 h-14" />
					<div className="">
						<p>Location</p>
						<p className="text-sm">
							Mobalpa, P.º de Sancha, 2, 29016 Málaga, Spain
						</p>
					</div>
				</div>
				<div className="flex gap-2 items-center">
					<EnvelopeIcon className="w-16 h-16" />
					<div className="">
						<p>Email</p>
						<p className="text-sm">car-rental-spain@contact.us</p>
					</div>
				</div>
				<div className="flex gap-2 items-center">
					<PhoneIcon className="w-12 h-12 " />
					<div className="">
						<p>Telephone number</p>
						<p className="text-sm">+{"(46)"} 721236970 </p>
					</div>
				</div>
			</div>
		</div>
	);
};
