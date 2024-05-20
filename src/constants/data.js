import images from './imgSrc';

const navItems = [
	{
		title: 'Home',
		link: '#home',
	},
	{
		title: 'About',
		link: '#about',
	},
	{
		title: 'Menu',
		link: '#menu',
	},
	{
		title: 'Awards',
		link: '#awards',
	},
	{
		title: 'Contact',
		link: '#contact',
	},
];

const drinks = [
	{
		title: 'Fresh Lemonade',
		price: '$56',
		tags: 'AU | Bottle',
	},
	{
		title: 'Iced Tea',
		price: '$59',
		tags: 'AU | Bottle',
	},
	{
		title: 'Fruit Smoothie',
		price: '$44',
		tags: 'AF | 750ml',
	},
	{
		title: 'Herbal Tea',
		price: '$31',
		tags: 'BD | 500mg',
	},
	{
		title: 'Sparkling Water',
		price: '$56',
		tags: 'ML | Bottle',
	},
];

const cocktails = [
	{
		title: 'Aperol Sprtiz',
		price: '$20',
		tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
	},
	{
		title: "Dark 'N' Stormy",
		price: '$16',
		tags: 'Dark rum | Ginger beer | Slice of lime',
	},
	{
		title: 'Daiquiri',
		price: '$10',
		tags: 'Rum | Citrus juice | Sugar',
	},
	{
		title: 'Old Fashioned',
		price: '$31',
		tags: 'Bourbon | Brown sugar | Angostura Bitters',
	},
	{
		title: 'Negroni',
		price: '$26',
		tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
	},
];

const awards = [
	{
		imgUrl: images.award02,
		title: 'Bib Gourmond',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		imgUrl: images.award01,
		title: 'Rising Star',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		imgUrl: images.award05,
		title: 'AA Hospitality',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
	},
	{
		imgUrl: images.award03,
		title: 'Outstanding Chef',
		subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
	},
];

// eslint-disable-next-line import/no-anonymous-default-export
export default { navItems, drinks, cocktails, awards };
