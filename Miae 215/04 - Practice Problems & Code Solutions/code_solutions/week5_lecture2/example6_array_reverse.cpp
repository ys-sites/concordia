
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q2. 

// a) Write a program that inputs an n element array A
// from the keyboard, where it's assumed n <= 10.

// check for errors with n -- print out an error message
// and stop the program if that occurs

// The components are input one at a time until a value 
// greater than 1.0e9 is input at which point n is recorded
// and the input stops and the program continues.

// eg
// 1
// 2.1
// 3.14
// 1e10
// ->
// n = 3
//    i     0   1   2  
// -- A = { 1, 2.1, 3.14 }

// After the input is complete then print out the array 
// components of A to the screen.

// b) Calculate and print out an array A_rev which contains 
// the elements of array A in the reverse order, eg
// A_rev = { 3.14, 2.1, 1 }

int main() 
{ 
	// 1. DECLARE
	double A[10], A_rev[10];
	int i, n, nmax = 10;

	// 2. INITIALIZE
	// A is input, n is calculated, A_rev is calculated, i is index
	// -- nothing to initialize
	
	// 3. INPUT
	// inputs: A
	for(i=0;i<nmax;i++) {
		cout << "\nA[i] = ? ";
		cin >> A[i];
		if( A[i] > 1.0e9 ) break;
	}
	n = i;
	
	// 6. OUTPUT
	cout << "\nA =\n";
	for(i=0;i<n;i++) cout << A[i] << "\n";
	
	// 4. CONTROL STATEMENTS

	// b) Calculate and print out an array A_rev which contains 
	// the elements of array A in the reverse order, eg

	//    i      0  1    2  
	// -- A  = { 1, 2.1, 3.14 }
	// A_rev = { 3.14, 2.1, 1 }

	// solve the simple example one step at a time
	// and then try to program each step using control statements
	
	// n = 3
	// A_rev[0] = A[2] = A[n-1]
	// A_rev[1] = A[1]
	// A_rev[2] = A[0]
	for(i=0;i<n;i++) {
		A_rev[i] = A[n-1-i]; // 5. EXPRESSIONS
	}
	
	// 6. OUTPUT
	cout << "\nA_rev =\n";
	for(i=0;i<n;i++) cout << A_rev[i] << "\n";

	// 7. TEST/DEBUG

	cout << "\ndone.\n";
	getchar();


	return 0;
}
