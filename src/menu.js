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

const MENU =  {

		breakfast: [{

			"name": "hotCakes",
			"price": 35

		}, {

			"name": "frenchToast",
			"price": 35

		}


		]
}

const breakfastItems = MENU.breakfast;

export default(breakfastItems, menuTypes)
