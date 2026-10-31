
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() 
{ 
	// typical errors for 2D arrays
	
	// a) 
	//int A1[2][3];
	//cout << A1[1][1];
	
	// a) correction
	int A1[2][3] = { 0 }; // initialize array before using it
	cout << A1[1][1];	

	// b) 
	//int A2[100000000][3], B2[2][100000000];

	// b) correction
	int A2[10000][3], B2[2][10000];
	// reduce size of arrays to a size that is normally OK

	// c) 
	//int A3[2][3]; // where A represents a real matrix

	// c) correction
	double A3[2][3]; // where A represents a real matrix
	// change array to double so the elements can store real values

	// d) 
	//int n = 2, m = 3;
	//int A4[n][m];

	// d) correction
	const int n = 2, m = 3; // make array sizes constant
	int A4[n][m];

	// e) 
	//int A5[][], B5[3][], C5[][3];

	// e) correction
	int A5[100][100], B5[3][3000], C5[3000][3];
	// set sizes of arrays to something large to help 
	// avoid out of bounds errors (since we are not sure
	// what size is needed for this question)

	// *** note want to make sure the total number of elements
	// is no larger than 10000 -- for 2D arrays it's the total
	// number of elements that's important since that dictates
	// the amount of memory needed for the variable
	// -- therefore, for A5 we have 100x100 = 10000 elements, etc.

	// *** it can be seen from this example that the amount of 
	// elements / memory increases much faster with size for
	// 2D arrays than with 1D arrays

	// f) 
	//int A6[2][3], i = 1, k;	
	//cout << A6[i+1][i+1];
	//A6[-1][i] = 1;
	//A6[i][3] = 3;
	//A6[1][k] = 7;

	// f) correction
	
	int A6[3][4] = { 0 }, i = 1, k = 0;	
	
	cout << A6[i+1][i+1]; // increase array size so it's not out 
	// of bounds and initialize A6 before using it
	// -- alternatively you could decrease the row index so it's not
	// out of bounds instead of increasing the array size
	
	A6[0][i] = 1; // increase row index so it's not out of bounds
	
	A6[i][3] = 3; // increase array size so it's not out of bounds
	// -- alternatively you could decrease the col index so it's not
	// out of bounds instead of increasing the array size
	
	A6[1][k] = 7; // initialize k to a valid index (in bounds)

	// g) 
	//int A7[2][3];
	//A7 = { 1, 2, 3, 4, 5, 6 };

	// g) correction
	int A7[2][3] = { 1, 2, 3, 4, 5, 6 }; 
	// initialize array during declaration

	// h) 
	//int A8[2][3] = { 1, 2, 3, 4, 5, 6 }, B8[2][3];
	//B8 = A8;

	// h) correction
	int A8[2][3] = { 1, 2, 3, 4, 5, 6 }, B8[2][3];
	
	// copy each element of A8 into B8
	for(int i = 0; i < 2; i++) {
		for(int j = 0; j < 3; j++) {
			B8[i][j] = A8[i][j];
		}
	}
	
	// you could have also typed the following, however it's 
	// less general since if you change the first list 
	// (eg A8 to { 5, 3, 3, 2, 1, 0 }) you would have to 
	// make the same change to the second list for B8
	
	// int A8[2][3] = { 1, 2, 3, 4, 5, 6 };
	// int B8[2][3] = { 1, 2, 3, 4, 5, 6 };

	cout << "\ndone.\n";
	getchar();

	return 0;
}
