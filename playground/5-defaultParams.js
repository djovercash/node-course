const greeter = (name = 'User', { age = 'Number', status = 'Single' } = {}) => {
	console.log(`Hello, ${name}(age: ${age}. status: ${status})`);
}

greeter('Drew', {age: '31', status: 'single'});
greeter();
