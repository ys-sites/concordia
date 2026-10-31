
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q1. Describe in 1-2 sentences the errors made in each 
// part of the program below (a, b, c, ...).

// Also indicate if the error is a complier error (compile-time error) 
// or an error with program execution (run-time error).

// Finally, indicate what negative consequences will occur
// or potentially occur if the part of the program is compiled
// and/or executed.

// This is the same program from array_example_2D_typical_errors
// from the lecture examples -- you can compile and/or execute 
// parts of this program if you need a hint.

int main() 
{ 
	// a) 
	//int A1[2][3];
	//cout << A1[1][1];
	
	// - array A1 is not initialized before using it
	
	// - run-time error, but the compiler could give a warning
	
	// - since A1 is uninitialized the output will be 
	// garbage / unpredictable

	// b) 
	//int A2[100000000][3], B2[2][100000000];

	// - the array dimension 100000000 is possibly too large
	// (up to 10000 is normally OK, but much higher than that
	// may cause problems)
	
	// - run-time error
	
	// - the program may run unpredictably, it could crash/close,
	// it could run out of memory, etc.

	// c) 
	//int A3[2][3]; // where A represents a real matrix
	
	// - need a double / float array to store real matrix elements
	
	// - run-time error
	
	// - the array can't hold decimal part of real numbers
	// -- potential loss of precision

	// d) 
	//int n = 2, m = 3;
	//int A4[n][m];
	
	// - the size of an array can't be a variable -- it must be 
	// constant
	
	// - compile-time error
	
	// - the program won't compile

	// e) 
	//int A5[][], B5[3][], C5[][3];

	// - the size of an array can't be a undefined
	// -- the compiler has no way of knowing the sizes in []
	// (it can't even automatically compute the sizes as
	// there is no initialization data such as {1,2,3})
	
	// - compile-time error
	
	// - the program won't compile

	// f) 
	//int A6[2][3], i = 1, k;	
	//cout << A6[i+1][i+1]; // out of bounds row index i+1 = 2
	//A6[-1][i] = 1; // out of bounds row index -1
	//A6[i][3] = 3; // out of bounds col index 3
	//A6[1][k] = 7; 
	// k is uninitialized so the value is unpredictable/garbage
	// -- it could thus be out of bounds 

	// - run-time error
	
	// - cout statement will output a unpredictable / garbage value
	// - the remaining statements could overwrite parts of the
	// program (variables, statements, etc.) and crash it

	// g) 
	//int A7[2][3];
	//A7 = { 1, 2, 3, 4, 5, 6 };

	// - can't put an array name on the LHS of an assignment
	// -- outside of array declaration you must access array 
	// elements one at a time, ie A[1][2] = 3

	// - compile-time error
	
	// - program won't compile

	// h) 
	//int A8[2][3] = { 1, 2, 3, 4, 5, 6 }, B8[2][3];
	//B8 = A8;

	// - similar error to part g), but also can't put array
	// name on RHS of an assignment statement

	cout << "\ndone.\n";
	getchar();

	return 0;
}
