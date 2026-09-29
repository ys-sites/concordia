
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() 
{ 

// 2. Write a program that:
// a) Declares a 1D array A with 30 elements

	double A[30]; // note part c) implies double or float, not int

// b) Inputs an integer n from 1-30 from the keyboard.  
// If n < 1 set n = 1.  If n > 30 set n = 30.

	int n, i;

	cout << "\ninput an integer n (1-30) ? ";
	cin >> n;

	if(n < 1) n = 1;
	if(n > 30) n = 30;

// c) Sets the array elements to A[i] = sin(0.5*i), for i = 0 to n-1, 
// and prints them out to the screen with each element on a new line.

// d) If A is between 0.5 and 0.7 then print out "\nin range", 
// otherwise print out "\nout of range".  
// Hint: you will need a logical operator for this part.

	for(i=0;i<n;i++) {

		A[i] = sin(0.5*i);
		cout << "\n" << A[i];

		// must have 0.5 < A[i] < 0.7 
		// -- both inequalities at same time -> AND
		if( (A[i] > 0.5) && (A[i] < 0.7) ) {
			cout << "\nin range";
		} else {
			cout << "\nout of range";
		}

	}

	cout << "\ndone.\n";
	getchar();

	return 0;
}
