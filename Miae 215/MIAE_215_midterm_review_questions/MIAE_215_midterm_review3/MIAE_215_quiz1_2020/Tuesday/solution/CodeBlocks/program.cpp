
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() 
{ 

// 1) Write a program that inputs 3 real numbers from the keyboard.  
// It then calculates and prints out the average of the 3 numbers.  
// If an input is greater than 7.5 the program prints out 
// “input is greater than 7.5”.

	double x1, x2, x3, ave;

	// note you could also use arrays and for loops here,
	// but since there are only 3 numbers you can do it one
	// at a time with regular doubles

	cout << "\ninput x1 ? ";
	cin >> x1;
	if( x1 > 7.5 ) cout << "\ninput is greater than 7.5";

	cout << "\ninput x2 ? ";
	cin >> x2;
	if( x2 > 7.5 ) cout << "\ninput is greater than 7.5";

	cout << "\ninput x3 ? ";
	cin >> x3;
	if( x3 > 7.5 ) cout << "\ninput is greater than 7.5";

	ave = (x1 + x2 + x3)/3;
	cout << "\naverage = " << ave << "\n";

// 2) Write a program that calculates a table of function values 
// with 11 rows and 3 columns.  Your program should exactly produce 
// the following output:

// x 			sin(x)	exp(x)
// 0.00000e0    ...		...
// 1.00000e-1   ...		...
// 2.00000e-1   ...		...
// ...
// 1.0			...		...

	// could also use a for loop with i

	double x;

	// need to set scientific notation of precision 5
	// to make output numbers the same as the table.
	// it's also needed for the tabs to work consistently
	// -- try without doing this and see what happens.
	cout << scientific;
	cout.precision(5);

	// use two tabs per col to get the proper spacing

	// note: the 1.0e-5 protects against round off error
	// -- in case case x gets a small bit above 1.0
	// but is still approximately equal to 1.0

	cout << "x\t\tsin(x)\t\texp(x)\n";
	for( x = 0.0; x < 1.0 + 1.0e-5; x = x + 0.1 ) {
		cout << x << "\t" << sin(x) << "\t" << exp(x) << "\n";
	}
	
// 3) Write a program that determines the largest value possible 
// for an unsigned long integer by incrementing an unsigned long 
// integer i by one until the largest value is achieved. Then 
// print out the largest value to the screen.  

// Hint: use a double x in your for loop since it can hold 
// very large numbers.  What is the smallest value possible 
// for i ?  What is the size in bytes of i ?

	unsigned long int i;

	// note we can't use i in the for loop () expressions
	// since i must stay in range in a for loop
	// otherwise it won't function properly.
	// therefore, we need a varible type (double)
	// with a larger range in the for loop.

	i = 0;
	for(x=0;x<1.0e100;x++) {
		i++;
		if( (i+1) == 0 ) { // check for roll of i
//		if( (i+1) < i ) { // alternative: check for peak
			cout << "\nmax = " << i;
			x = 1.0e101; // stop the loop
		}
	}

	// note this the long way of doing it
	// we could also just write:
//	i = 0;
//	cout << "\nmax = " << (i - 1);

	cout << "\nsize = " << sizeof(unsigned long int); // 4 bytes
	
	cout << "\ndone.\n";
	getchar();

	return 0;
}
