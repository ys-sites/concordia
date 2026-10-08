
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q1. Write a program that inputs two "vectors" v1 and v2
// from the keyboard where each vector has 5 components.
// It then calculates v3 = v1 + v2 and prints out v3 to the screen,
// where + represents vector addition.

// *** Note that a vector index i should vary from i = 1 to i = 5 
// in your solution, following standard vector notation
// (eg v1[1] to v1[5]).

// eg n=5
// normal 1D array - i = 0 to n-1
// eg v1[5] -- v1[0] to v1[4]

// vector - i = 1 to n
// eg v1[6] -- v1[1] to v1[5] -- ignore v1[0]

int main() 
{ 
	// 1. DECLARE
	double v1[6], v2[6], v3[5+1]; // size + 1 for vectors
	int i, n = 5;

	// 2. INITIALIZE
	// - we did n above, v3 is calculated, v1,v2 are are input, i is index

	// 3. INPUT
	// - inputs: v1, v2, n = 5
//	for(i=0;i<n;i++) { // for arrays
	for(i=1;i<=n;i++) { // for vectors
		cout << "\ninput v1[i] ? ";
		cin >> v1[i];
	}
	
	for(i=1;i<=n;i++) { // for vectors
		cout << "\ninput v2[i] ? ";
		cin >> v2[i];
	}
	
	// 4. CONTROL STATEMENTS
	// calculates v3 = v1 + v2 and prints out v3 to the screen
	// - from our previous experience in math class we know
	// vector addition we need to add the components
	// -- can use a for loop for that
	for(i=1;i<=n;i++) {
		v3[i] = v1[i] + v2[i]; // 5. EXPRESSIONS
	}
	
	// 6. OUTPUTS
	// outputs: v3
	cout << "\nv3 =\n";
	for(i=1;i<=n;i++) {
		cout << v3[i] << "\n";
	}
	
	// 7. TEST/DEBUG
	// - run the program for various known inputs/outputs and check
	// if they are correct
	
	cout << "\ndone.\n";
	getchar();

	return 0;
}
