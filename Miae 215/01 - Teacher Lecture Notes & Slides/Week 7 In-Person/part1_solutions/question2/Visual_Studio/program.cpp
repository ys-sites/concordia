
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() 
{ 
	// a) 
	//int n = 3;
	//int A1[n];	
	
	// a) correction
	const int n = 3; // make n constant
	int A1[n];

	// b) 
	//int A2[];

	// b) correction
	int A2[10000]; 
	// not sure what size of A2 is needed so make it large 
	// to help avoid out of bounds errors (since we are 
	// not sure what size is required in this question)

	// c) 
	//int A3[100000000];

	// c) correction
	int A3[10000]; 
	// reduce the size to 10000 which is normally not too large

	// d) 
	//int A4[3]; // where A represents a real vector

	// d) correction
	double A4[3]; // where A represents a real vector
	// change int to double so it can store real elements

	// e) 
	//int A5[3];
	//cout << A5[1];

	// e) correction
	int A5[3] = { 0 }; // initialize A5 before using it
	cout << A5[1];

	// f) 
	//int A6[3] = { 1, 2, 3 }, B6[3];
	//B6 = A6;

	// f) correction
	int A6[3] = { 1, 2, 3 }, B6[3];
	for(int i=0;i<3;i++) B6[i] = A6[i];
	// set all elements in B6 to A6

	// g) 
	//int A7[3], i = 3, k;
	//cout << A7[i];
	//A7[-1] = 1;
	//A7[5] = 3;
	//A7[k] = 5;

	// g) correction
	int A7[6] = { 0 }, i = 3, k = 0;

	cout << A7[i]; // increase size of array A7 to 6 
	// -- could have also changed i to i-1 to avoid out of bounds
	// -- must also initialize A7[i] before printing it out

	A7[0] = 1; // increase index so it's not out of bounds

	A7[5] = 3; // increase size of array A7 to 6
	// -- could have also changed 5 to 2 to avoid out of bounds

	A7[k] = 5; // initialize k to something

	// h) 
	//int A8[3];
	//A8 = { 1, 2, 3 }; 

	// h) correction
	int A8[3] = { 1, 2, 3 }; 
	// initialize A8 during declaration
 
	// *** please try exercise question3 if you haven't
	// done so already -- it's similar to question2, but
	// it's still good practice

	cout << "\ndone.\n";
	getchar();

	return 0;
}
