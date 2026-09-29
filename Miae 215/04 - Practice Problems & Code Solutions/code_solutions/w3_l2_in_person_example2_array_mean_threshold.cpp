
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q. Write a program that

// a) inputs a sequence of up to 100 doubles from the keyboard
// one at a time and store them into a 1D array A
	
// b) if a number less than 0 is input then stop the input
// and move on to step c)

// c) calculate and print out the mean (ie average) of A

// d) count and print out the number of elements where A[i] < 10	

int main() 
{
	double A[100]; // array/vector of 100 doubles from A[0] to A[99]
	double sum = 0.0, ave;
	int i, nmax = 100, n = 1, count = 0;
	
	// ave = sum(A[i])/n

	// input the data first
	for(i=0;i<nmax;i++) {
		cout << "\ninput A[i] ? ";
		cin >> A[i];
		if( A[i] < 0.0 ) { // move on to the next part of program
			n = i; // record the number of data points to process
			i = nmax; // stop the loop indirectly
		}
	}
	
	// process data using another for loop
	sum = 0.0; // best to initialize this key variable
	// just in front of where we use it -- keep in mind
	// programs can be long and alot can happen to sum in between
	count = 0; // same idea
	for(i=0;i<n;i++) {
		sum += A[i];
		if( A[i] < 10 ) count++;
	}

	if( n != 0 ) { 
		ave = sum/n;
		cout << "\naverage(A) = " << ave;
	}
	
	cout << "\ncount = " << count;

	cout << "\ndone.\n";
	getchar();

	return 0;
}
