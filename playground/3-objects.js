// Object property shorthand

const name = 'Andrew';
const userAge = 27;

const user = {
	name,
	age: userAge,
	location: 'Philadelphia'
};

console.log('USER: ', user);

// Object destructuring
const product = {
	label: 'Red notebook',
	price: 3.00,
	stock: 201,
	salesPrice: undefined
}

const { label, price, stock, salesPrice, rating = 5 } = product;

console.log('LABEL: ', label);
console.log('PRICE: ', price);
console.log('STOCK: ', stock);
console.log('SALES PRICE: ', salesPrice);
console.log('RATING: ', rating)

const transaction = (type, { label, stock }) => {
	console.log('TYPE": ', type);
	console.log('LABEL: ', label);
	console.log('STOCK: ', stock);
}

transaction('order', product)
