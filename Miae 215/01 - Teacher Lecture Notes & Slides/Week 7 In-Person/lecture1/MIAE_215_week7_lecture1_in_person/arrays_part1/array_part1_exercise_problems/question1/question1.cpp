
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

	// b) 
	//int A2[100000000][3], B2[2][100000000];

	// c) 
	//int A3[2][3]; // where A represents a real matrix

	// d) 
	//int n = 2, m = 3;
	//int A4[n][m];

	// e) 
	//int A5[][], B5[3][], C5[][3];

	// f) 
	//int A6[2][3], i = 1, k;	
	//cout << A6[i+1][i+1];
	//A6[-1][i] = 1;
	//A6[i][3] = 3;
	//A6[1][k] = 7;

	// g) 
	//int A7[2][3];
	//A7 = { 1, 2, 3, 4, 5, 6 };

	// h) 
	//int A8[2][3] = { 1, 2, 3, 4, 5, 6 }, B8[2][3];
	//B8 = A8;

	cout << "\ndone.\n";
	getchar();

	return 0;
}
