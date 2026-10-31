
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() 
{ 
	// typical errors for 1D arrays
	
	// a) 
	//int n = 3;
	//int A1[n];

	// b) 
	//int A2[];

	// c) 
	//int A3[100000000];

	// d) 
	//int A4[3]; // where A represents a real vector

	// e) 
	//int A5[3];
	//cout << A5[1];

	// f) 
	//int A6[3] = { 1, 2, 3 }, B6[3];
	//B6 = A6;

	// g) 
	//int A7[3], i = 3, k;
	//cout << A7[i];
	//A7[-1] = 1;
	//A7[5] = 3;
	//A7[k] = 5;

	// h) 
	//int A8[3];
	//A8 = { 1, 2, 3 }; 



    // outside of an array declaration you can only set arrays one 
    // element at a time (eg A[i] = 3)
 
	cout << "\ndone.\n";
	getchar();

	return 0;
}
