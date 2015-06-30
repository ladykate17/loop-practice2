var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

		// Problem:

		// rat
		// cat
		// butterfly
		// marmot
		// ocelot


		// Solution:

		// for(var i=0; i<animals.length; i++) {
		//  console.log(animals[i]);
		// }

// --- Problem #1 --- //
// rat
// cat
// butterfly
// marmot

for( var i = 0; i < (animals.length - 1) ; i++) {
	console.log(animals[i]);
}
console.log('End P1')


// --- Problem #2 --- //
// rat
// butterfly
// ocelot

for ( var i = 0; i <= (animals.length - 1); i+=2){
	console.log(animals[i]);
}
console.log('End P2')


// --- Problem #3 --- //
// ocelot
// marmot
// butterfly
// cat
// rat

for (var i = (animals.length -1); i >= 0; i--){
	console.log(animals[i]);
}
console.log('End P3')


// --- Problem #4 --- //
// rat
// cat
// cat
// butterfly
// butterfly
// marmot
// marmot
// ocelot
for ( var x = 0; x <=(animals.length -1); x+=animals.length){
	console.log(animals[x]);

	for ( var i = 1; i <= (animals.length-2); i++) {

		for (var j = 1; j <= 2; j++){
		console.log(animals[i]);
		}

	}

	console.log(animals[(animals.length-1)])

}



console.log('End P4')

