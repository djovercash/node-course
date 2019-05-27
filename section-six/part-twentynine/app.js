console.log('STARTING');

setTimeout(() => {
	console.log('TIMEOUT')
}, 2000)

setTimeout(() => {
	console.log('TIMEOUT 2')
}, 0)

console.log('STOPPING');
