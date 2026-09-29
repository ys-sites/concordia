
// Arrays exercises

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// Question #1
	// What is the output of the following program ?
	int i;
	double A[3], x;
	
	A[0] = 1.25;
	A[1] = 2.25;
	A[2] = 3.25;
	
	x = 0.0;
	for(i=0;i<3;i++) {
		x = x + A[i];
	}
	cout << "\nx = " << x << "\n";
	cout << A[3];
    
	
	// Question #2
	// a) Write a program that calculates a table of t (1st column) 
	// and sin(t) (2nd column) over a range from t = 0.0 to 
	// t = 3.14159 with intervals of 0.1 seconds and stores the 
	// result in a 2D array called H.
	// eg
	// 0.0	sin(0.0)
	// 0.1	sin(0.1)
	// 0.2	...	
	//
	// b) Write a program that takes table H from part a) and finds
	// the first value of the table with sin(t) > 0.77, printing
	// the corresponding values of t and sin(t) to the screen.
    
	
	// Question #3
	// Write a program that initialzes two 5 dimensional vectors v1 and v2
	// from the keyboard one element at a time and then calculates 
	// the dot product of the two vectors using appropriate for loops.
	// Print the dot product result to the screen.
	// note: the dot product is given by d = v1[1]*v2[1] + v1[2]*v2[2] + ...
	// note: use the arrays v1, v2 starting at index 1 (ie ignore the 0 element)
	
	
	cout << "\npress enter to continue.";	
	getchar();
		
	return 0;	
} 

