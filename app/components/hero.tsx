import { urlFor } from "~/lib/sanity";
import { HeroType } from "~/types";

export const Hero = ({ hero }: { hero: HeroType }) => {
	return (
		<article className="relative h-2/3 w-full">
			<img
				src={urlFor(hero.image).fit("fill").url()}
				className="absolute top-0 z-0 h-full w-full object-cover object-center"
			/>
			<p className="text-white left-10 z-10 absolute top-10 text-5xl leading-relaxed font-bold w-[10%]">
				{hero.slogan}
			</p>
		</article>
	);
};
