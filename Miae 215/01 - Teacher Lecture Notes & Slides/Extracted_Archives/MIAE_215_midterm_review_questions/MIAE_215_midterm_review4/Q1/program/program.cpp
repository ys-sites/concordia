
#include <iostream>
#include <fstream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q. Write a program that:

// a) Inputs an array A of n elements from the keyboard.
// n which is <= than 100 is also input from the keyboad.
// -- make sure to check n for errors

// b) Calculates and prints the standard deviation of A, where
// stddev = ( sum (A[i]-ave)^2 ) / ( n - 1 )

// c) Shifts all elements of A forward one element
// -- the element at the end wraps around to to the beginning, eg
// A = [1 2 3 4 5] -> A_shift = [5 1 2 3 4]
// Hint: Store the result in the array A_shift

int main() 
{ 
	int i, n;
	double A[100], sum, ave, stddev, A_shift[100];

	cout << "\ninput n ? ";
	cin >> n;
	
	if( (n <= 1) || (n > 100) ) {
		cout << "\nerror n is out of range, n = " << n;
		exit(1);
	}

	cout << "\ninput A one element at a time\n";
	for(i=0;i<n;i++) cin >> A[i];
	
	// printing out A here is FYI -- not part of the problem
	cout << "\nA = ";
	for(i=0;i<n;i++) cout << A[i] << " ";
	
	// stddev = ( sum (A[i]-ave)^2 ) / ( n - 1 )
	
	sum = 0.0;
	for(i=0;i<n;i++) sum += A[i];
	ave = sum/n;
	
	sum = 0.0;
	for(i=0;i<n;i++) sum += pow(A[i] - ave,2);
	stddev = sum / (n - 1);
	
	cout << "\nstddev = " << stddev;
	
	// shift forward
	// A = [1 2 3 4 5] -> A = [5 1 2 3 4]
	
	// we should use a separate variable A_shift
	// for the answer, because if we use A for the ans
	// then it input data gets corrupted by the output data
	// -- ie it doesn't work

	// *** the moral of the story is it's best 
	// to put the answer in a separate variable
	// -- don't use the input variables to store
	// the answer or you might corrupt the input
	// data before you use it

	// A       = [1 2 3 4 5]
	// A_shift = [1 1 2 3 4]	
	for(i=0;i<n-1;i++) {
		A_shift[i+1] = A[i];
//		A[i+1] = A[i]; // this doesn't work
	}
	// A_shift = [5 1 2 3 4]	
	A_shift[0] = A[n-1];
	
	// if we really wanted the shifted values in A 
	// we could just copy A_shift into A
	for(i=0;i<n;i++) A[i] = A_shift[i];
	
	cout << "\nA = ";
	for(i=0;i<n;i++) cout << A[i] << " ";	
	
	// going backwards would also work, but this isn't 
	// as general as using A_shift
//	for(i=n-2;i>=0;i--) {
//		A[i+1] = A[i];
//	}
	
	cout << "\n\ndone.\n";
	getchar();
	
	return 0;
}

