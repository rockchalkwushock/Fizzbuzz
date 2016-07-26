// ########################################

/*
*	Table of Contents
*	1)	Variables
*	2)	Parent Function
*	3)	Child Functions
*/

// ########################################
/* ------------- Variables ------------- */
// ########################################

var i = 1;
var isFizz = function(i) {return i % 3 === 0};
var isBuzz = function(i) {return i % 5 === 0};
var isFizzBuzz = function(i) {return i % 15 === 0};

// ########################################
/* ---------- Parent Function ---------- */
// ########################################

$(document).ready(function()
{
	fizz_Buzz();
});

// ########################################
/* ---------- Child Functions ---------- */
// ########################################


function fizz_Buzz ()
{
	// Will evaluate i from 1 to 100 incrementing once every interation.
	for (i; i <= 100; ++i) 
	{
		// Will evaluate i against i % 15 === 0.
		// If evaluated as true, FizzBuzz will print.
		// If evaluated as false it will proceed with the other checks.
		if (isFizzBuzz(i)) 
		{
			// console.log('FizzBuzz');
			document.write('FizzBuzz');
			document.write('<br/>');
		} 
		// Will evaluate i against i % 3 === 0.
		// If evaluated as true, Fizz will print.
		// If evaluated as false it will proceed with the other checks.
		else if (isFizz(i)) 
		{
			// console.log('Fizz');
			document.write('Fizz');
			document.write('<br/>');
		} 
		// Will evaluate i against i % 5 === 0.
		// If evaluated as true, Buzz will print.
		// If evaluated as false it will proceed with the other checks.
		else if (isBuzz(i)) 
		{
			// console.log('Buzz');
			document.write('Buzz');
			document.write('<br/>');
		// Will print the value of i every iteration that the above checks are evaluate as false.
		} else {
			// console.log(i);
			document.write(i);
			document.write('<br/>');
		}
	};
};






