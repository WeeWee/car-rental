import { Bars3Icon } from "@heroicons/react/20/solid";
import { Link } from "@remix-run/react";
import { useState } from "react";
import { urlFor } from "~/lib/sanity";
import { Identity } from "~/types";

export const Navbar = ({ identity }: { identity: Identity }) => {
	const [showMenu, setShowMenu] = useState(false);
	const handleMenuClick = () => {
		setShowMenu((prev) => !prev);
	};
	return (
		<nav className="flex items-center justify-between px-8 md:px-20 h-20 w-full ">
			<Link to="/">
				<img
					src={urlFor(identity.image).width(64).height(64).fit("crop").url()}
					className="h-16 object-center object-cover "
				/>
			</Link>
			<ul
				className={`${
					showMenu ? `top-20` : `top-[-100%] `
				}   absolute md:static left-0 w-full flex flex-col md:flex-row m bg-white md:bg-transparent rounded-b-lg min-h-[40vh] md:min-h-0 md:h-fit md:w-auto transition-all ease-in-out duration-500 md:transition-none p-4 z-40   md:justify-between items-center gap-2 md:gap-4`}
			>
				<li className={`hidden md:list-item`}>
					<Link
						to="#vehicles"
						onClick={(e) => {
							showMenu ? setShowMenu(false) : null;
						}}
					>
						Vehicles
					</Link>
				</li>
				<li>
					<Link
						to="#about-us"
						onClick={(e) => {
							showMenu ? setShowMenu(false) : null;
						}}
					>
						About us
					</Link>
				</li>
				<li>
					<Link
						to="#contacts"
						onClick={(e) => {
							showMenu ? setShowMenu(false) : null;
						}}
					>
						Contacts
					</Link>
				</li>
			</ul>
			<button className=" mr-20 bg-black/90 text-white p-[0.4rem] px-7 rounded-lg font-bold hover:shadow-md hover:shadow-gray-400">
				Rent now
			</button>
			<div
				className="md:hidden absolute inline-block right-10 top-[1.8rem] cursor-pointer"
				onClick={handleMenuClick}
			>
				<div
					className={` w-[25px] h-[3px] bg-black mt-1 duration-[400ms] ${
						showMenu ? `translate-y-2 -rotate-45` : ``
					} `}
				></div>
				<div
					className={` w-[25px] h-[3px] bg-black mt-1 duration-[400ms] ${
						showMenu ? `opacity-0` : ``
					}`}
				></div>
				<div
					className={` w-[25px] h-[3px] bg-black mt-1 duration-[400ms] ${
						showMenu ? `translate-y-[-6px] rotate-45` : ``
					}`}
				></div>
			</div>
		</nav>
	);
};
