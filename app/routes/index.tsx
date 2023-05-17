import {
	ActionFunction,
	LoaderArgs,
	LoaderFunction,
	json,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import {
	Booking,
	Cars,
	Hero,
	Navbar,
	Contact,
	Location,
	Carousel,
	About,
} from "~/components";

import { client, urlFor } from "~/lib/sanity";
import { Car, HeroType, Identity } from "~/types";
import { hasFetched } from "~/utils/cookies";
type Returntype = {
	cars: Car[];
	identity: Identity;
	hero: HeroType;
	selectedCars: string[];
};
export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
	const url = new URL(request.url);
	const selectedCars = url.searchParams.getAll("cars");
	const cookieHeader = request.headers.get("Cookie");
	const hasfetched = await hasFetched.parse(cookieHeader);
	let carQuery = `*[_type == "car"]`;
	let websiteQuery = `*[_type == "identity"][0]`;
	let cars: Car[] = hasfetched?.cars;
	let identity: Identity = hasfetched?.identity;
	let heroQuery = `*[_type == "hero"][0]`;
	let hero: HeroType = hasfetched?.hero;
	let shouldFetchAgain = false;
	if (hasfetched) {
		const checkUpdate = {
			cars: (await client.fetch(carQuery)) as Car[],
			identity: (await client.fetch(websiteQuery)) as Identity,
			hero: (await client.fetch(heroQuery)) as HeroType,
		};
		for (const [key, value] of Object.entries(checkUpdate)) {
			if (value.length > 0 && value.length !== hasfetched[key].length) {
				shouldFetchAgain = true;
			} else if (!value.length) {
				if (value._id !== hasfetched[key]._id) {
					shouldFetchAgain = true;
				}
			}
		}
		if (shouldFetchAgain) {
			return json(
				{ ...checkUpdate },
				{
					headers: {
						"Set-Cookie": await hasFetched.serialize({ ...checkUpdate }),
					},
				}
			);
		}
		return { cars, identity, hero, selectedCars };
	}
	cars = await client.fetch(carQuery);
	identity = await client.fetch(websiteQuery);
	hero = await client.fetch(heroQuery);
	console.log(hasfetched);
	return json(
		{ cars, identity, hero, selectedCars },
		{
			headers: {
				"Set-Cookie": await hasFetched.serialize({ cars, identity, hero }),
			},
		}
	);
};

export default function Index() {
	const { cars, identity, hero, selectedCars } = useLoaderData() as Returntype;
	const selectedCarsArr = cars?.filter((car, index) => {
		return (
			`${car.name}, ${car.model}` ==
			selectedCars.filter((car2) => car2 === `${car.name}, ${car.model}`)[0]
		);
	});

	console.log(selectedCarsArr);
	return (
		<div className=" min-h-screen h-screen">
			{identity ? <Navbar identity={identity} /> : ""}
			{hero ? <Hero hero={hero} /> : ""}
			{cars ? <Booking cars={cars} /> : ""}
			{selectedCarsArr?.length > 0 ? (
				<Cars cars={selectedCarsArr as Car[]} />
			) : (
				""
			)}
			{cars && selectedCarsArr.length <= 0 ? (
				<Carousel cars={cars} autoSlide />
			) : (
				""
			)}
			<About />
			{/* <Location /> */}
			<Contact />
		</div>
	);
}
