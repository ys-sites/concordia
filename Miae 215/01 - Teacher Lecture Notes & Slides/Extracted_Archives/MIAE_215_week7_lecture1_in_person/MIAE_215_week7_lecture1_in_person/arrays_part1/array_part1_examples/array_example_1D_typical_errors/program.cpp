
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// indicate how to fix the errors below for 
// the cases indicated in the lecture slides

int main() 
{ 
	// typical errors for 1D arrays
	
	// a) 
	//int n = 3;
	//int A1[n];

	const int n = 3;
	int A1[n];

	// b) 
	//int A2[];
	int A2[10000]; 
	// when unsure go big -- will work for most applications
	// where you are not sure what size you need
	// -- however you should check if your index to make
	// sure it's less than this max value, 
	// eg if(i>10000) cout << "error";

	// c) 
	//int A3[100000000];
	int A3[10000];

	// d) 
	//int A4[3]; // where A represents a real vector 
	double A4[3]; // where A represents a real vector 
	
	// e) 
	//int A5[3];
	//cout << A5[1];
	int A5[3] = { 0 };
	cout << A5[1];
	
	// f) 
	//int A6[3] = { 1, 2, 3 }, B6[3];
	//B6 = A6;
	int A6[3] = { 1, 2, 3 }, B6[3], i;
	for(i=0;i<3;i++) B6[i] = A6[i];
	
	// g) 
	//int A7[3], i = 3, k;
	//cout << A7[i];
	//A7[-1] = 1;
	//A7[5] = 3;
	//A7[k] = 5;
	int A7[3] = { 0 }, i = 2, k = 0;
	cout << A7[i];
	A7[0] = 1;
	A7[2] = 3;
	A7[k] = 5;

	// h) 
	//int A8[3];
	//A8 = { 1, 2, 3 }; 
	int A8[3] = { 1, 2, 3 }; 
	
    // note: outside of an array declaration you can only set arrays 
	// one element at a time (eg A[i] = 3)
 
	cout << "\ndone.\n";
	getchar();

	return 0;
}
