
// Control Statements exercises

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// Question #1
	// What is the output of the following program ?
	
	int i;  double x=1.1, y=0.25, z=-3.0;
	if( (x/y) > 4 ) {
		z = abs(z);
		z = z*z;
		x = -x;
	}
	if( (x/y) > 4 ) x = -x;
    cout << x << "\t" << y << "\t" << z << "\n";
    
	for(i=10;i>-1;i--) cout << "\n" << i;
	cout << "\ni = " << i << "\n";
	
	for(i=-1;i<=5;i=i+2) {
		cout << "\n" << i;
		if(i==3) i = 7;
	}
    
	// Question #2
	// Write a program that prints a table of t (1st column) and 
	// sin(t) (2nd column) to the screen over a range from 
	// t = 0.0 to t = 3.14159 in 100 equal increments
	// (ie make a table with 100 entries).
	// eg
	// t		sin(t)
	// 0.0		0.0
	// dt		...
	// 2*dt		...	
	// ...		...
	// 3.14159	...	

	// Question #3
	// Write a program that prints a table of t (1st column) and 
	// sin(t) (2nd column) to the screen over a range from 
	// t = 0.0 to t = 3.14159 with intervals of 0.1 seconds
	// (ie the t column should increase in increments of 0.1).
	// eg
	// t	sin(t)
	// 0.0	0.0
	// 0.1	...
	// 0.2	...
	// hint: make your for loop in terms of t (ie t is your index variable)
    
	// Question #4
	// Write a program that reads the variable u 10 times from the keyboard 
	// using a for loop. It prints the result exp(-u) to the screen each time
	// and if the result is less than 1e-7 the loop terminates
	// by appropriately changing the loop index.
    
	cout << "\npress enter to continue.";	
	getchar();
	
	return 0;
} 