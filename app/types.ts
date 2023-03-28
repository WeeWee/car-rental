export type Car = {
	name: string;
	model: string;
	price: string;
	image: Image;
};
export type Image = {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
};
export type Identity = {
	name: string;
	image: Image;
};
export type HeroType = {
	slogan: string;
	image: Image;
};
