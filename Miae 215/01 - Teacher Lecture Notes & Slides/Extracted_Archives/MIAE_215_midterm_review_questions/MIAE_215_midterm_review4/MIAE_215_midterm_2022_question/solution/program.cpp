
#include <iostream>
#include <cmath>
#include <cstdio>

using namespace std;

int main()
{ 

// a) Inputs two 1D arrays of doubles A and B (size of 10) 
// from the keyboard.

	int i, n = 10, count, k, i_sum;
	double A[10], B[10], C[20], sum, PI;
	
	cout << "\ninput array A (10 elements) ?\n";
	for(i=0;i<n;i++) cin >> A[i];
	
	cout << "\ninput array B (10 elements) ?\n";
	for(i=0;i<n;i++) cin >> B[i];	

// b) Calculates the dot product of A and B and prints 
// out the result.

	sum = 0.0;
	for(i=0;i<n;i++) sum += A[i]*B[i];
	cout << "\ndot product of A and B = " << sum;
	
// c) Determines the number elements of B that are strictly 
// between 0 and  and prints out the result.  
	count = 0;
	PI = 4*atan(1.0);
	for(i=0;i<n;i++) {
		if( (B[i] > 0.0) && (B[i] < PI) ) count++;
	}
	cout << "\nnumber of elements of B between 0 and PI = " << count;

// d) Combines arrays A and B into a single array C, where the 
// first 10 elements are given by A and the next 10 elements 
// are given by B.  

	for(i=0;i<n;i++) C[i]   = A[i];
	for(i=0;i<n;i++) C[i+n] = B[i];
	
	cout << "\nC =\n"; // for testing
	for(i=0;i<2*n;i++) cout << C[i] << " "; 

// e) Repeatedly inputs an integer k from the keyboard.  
// The keyboard input continues until a negative value is input.
// Then print out the number of positive integers entered and 
// their sum.  For example,

	count = 0;
	i_sum = 0;
	while(1) {
		cout << "\ninput k ? ";
		cin >> k;
		if( k < 0 ) break;
		count++;
		i_sum += k;
	}

	cout << "\nnumber of positive integers entered = " << count;
	cout << "\nsum = " << i_sum;
	
	cout << "\ndone.\n\n";
	getchar();

	return 0;
}

