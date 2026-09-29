
#include <iostream>
#include <cmath> // for sin(x), cos(x), ...
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q. Write a program that inputs a double x and an integer k from the 
// keyboard. Depending on the value of k it does the following:

// if k is equal to 1 then print out the value of sin(x)

// if k is equal to 2 then print out the value of cos(x)

// if k is equal to 3 then print out the value of exp(x)

// otherwise print out "\nincorrect integer selected".

// Use an if-else ladder to solve the problem.	

int main() 
{ 
	double x, y = -1;
	int k;

	cout << "\nx = ? ";
	cin >> x;
	
	cout << "\nk = ? ";
	cin >> k;
	
	if( k == 1 ) {
		y = sin(x);
	} else if ( k == 2 ) {
		y = cos(x);
	} else if ( k == 3 ) {
		y = exp(x);
	} else {
		cout << "\nk is none of the above, k = " << k;
		y = -1;
	}
	
	cout << "\ny = " << y;
	
	cout << "\ndone.\n";
	getchar();

	return 0;
}
