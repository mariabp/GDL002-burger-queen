const menuTypes = [
	{
		id: 1,
		name: 'breakfast',
		display:'DESAYUNOS'

	},
	{
		id: 2,
		name: 'meals',
		display:'COMIDAS'

	},
	{
		id: 3,
		name: 'beverages',
		display:'BEBIDAS'

	},

];

const MENU =  [

	{
		id: 101,
		name: 'hotCakes',
		price: 35,
		type: 'breakfast'

	},
	{
		id: 201,
		name: 'Hamburguesa Sencilla',
		price: 35,
		type: 'meals'

	},
	{
		id: 301,
		name: 'Kombucha CH',
		price: 35,
		type: 'beverages'

	},

];


export default (MENU, menuTypes);
