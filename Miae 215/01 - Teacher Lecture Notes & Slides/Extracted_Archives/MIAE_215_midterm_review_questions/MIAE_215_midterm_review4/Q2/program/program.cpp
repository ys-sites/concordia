
#include <iostream>
#include <fstream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q. Write a program that repeatedly inputs integers k
// (from 1 to 7) from the keyboard.

// The program stops when every integer has been input
// at least once.

// eg
// 1
// 2
// 3
// 4
// 5
// 6
// 6
// 6
// 7
// -- done -- all numbers between 1 and 7 have been entered

// Hints: 

// Use an array A that records the number of times
// each integer k has been input, eg
// A = [1 1 0 1 3 4 5]
// integer 1 has been input 1 times
// ...
// integer 7 has been input 5 times

// Use A[k]++ to increment the array when 
// an integer k is input

// All integers have been input when the minimum
// element of A is > 0

int main() 
{ 
	// note we use A[7+1] here since A[k] goes from 1 to 7
	int k, i, A[7+1] = { 0 }, min_A;

	while(1) {
		cout << "\ninput an integer k (from 1 to 7) ? ";
		cin >> k;
		
		// TODO: in practice we should check if k is valid input
		// -- the question didn't ask to check for errors,
		// so it's not strictly required for the solution
		A[k]++;
		
		// find the minimum of A -- if min > 0 break
		min_A = A[1];
		for(i=1;i<=7;i++) {
			if( A[i] < min_A ) min_A = A[i];
		}
		if( min_A > 0 ) break;
	}

	cout << "\n\ndone.\n";
	getchar();
	
	return 0;
}

