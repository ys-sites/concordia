
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() 
{ 

// Write a program that:

// a) Inputs two 1D arrays of doubles A[i] and B[i] from the keyboard 
// with a maximum size of 1000.  The elements are input one at time 
// alternating between A and B (ie A[0],B[0],A[1],B[1], …, A[i],B[i]) 
// until a value of less than -1.0e6 is input or i >= 1000.
// Then the program continues to part b).

	int i, n;
	double A[1000], B[1000], C[1000];

	i = 0;
	while(1) { // could also use a for loop from 0 to 999 here
		if( i >= 1000 ) break;

		cout << "\ninput A[i] ? ";
		cin >> A[i];
		if( A[i] < -1.0e6 ) break;

		cout << "\ninput B[i] ? ";
		cin >> B[i];
		if( A[i] < -1.0e6 ) break;

		i++;
	}

	n = i;

// b) Calculates C = A + B, where + is vector addition 
// (ie C[i] = A[i] + B[i]), and prints each element of C to the screen.
	cout << "\nC = \n";
	for(i=0;i<n;i++) {
		C[i] = A[i] + B[i];
		cout << C[i] << "\n";
	}

// c) Calculates the minimum value of A[i] and prints it to the screen.
	double min = 1.0e10;
	for(i=0;i<n;i++) {
		if( A[i] < min ) min = A[i];
	}
	cout << "\nmin(A[i]) = " << min;

// d) Adds the elements of B[i] and prints the result to the screen.
	double sum = 0.0;
	for(i=0;i<n;i++) sum += B[i];
	cout << "\nsum(B[i]) = " << sum;

// e) Multiplies the elements of A[i] and prints the result to the screen.
	double prod = 1.0;
	for(i=0;i<n;i++) prod *= A[i];
	cout << "\nprod(A[i]) = " << prod;

	// part f) is a bit difficult so make it a bonus out of 2

// f) Using an infinite loop, determines and prints out the positive 
// integer value of k for which the expression abs(x^k / k!) is less 
// than 1.0e-9 where x = A[0].

	double x, z;
	int k;

	x = A[0];
	prod = 1; // node prod should be a double since it could get big
	k = 1; 
	while(1) {
		prod *= k;
		z = abs( pow(x,k) / prod );
		cout << "\nz = " << z; // for testing purposes (not required)
		if( z < 1.0e-9 ) {
			cout << "\nk = " << k;
			break;
		}
		k++;
	}
	
	cout << "\ndone.\n";
	getchar();

	return 0;
}
