
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// 1.a) Write a program that approximately determines when a float 
// is too large.  It does this by repeatedly multiplying a 
// float x (initially set to 1.0) by 10 and printing the result 
// to the screen.  The user can then see when the number is too large.
// Use a for loop for i from 1 to 50 in order to perform the 
// multiplications.  Based on the test results, what is the 
// approximate largest value a float can hold ?

// Example output:

// 10
// 100
// 1000
// ...

// b) Repeat part a) using division in order to find the smallest 
// possible float. Based on the test results, what is the smallest 
// approximate value a float can hold ?

int main() 
{ 
	int i;
	float x;

	x = 1.0;
	for(i=1;i<=50;i++) {
		x = x * 10; 
//		x *= 10; // alternative
		cout << x << "\n";
	}

	// ANS: approximate maximum value is 1.0e38

	cout << "\npress enter to continue";
	getchar();

	x = 1.0;
	for(i=1;i<=50;i++) {
		x = x / 10; 
//		x /= 10; // alternative
		cout << x << "\n";
	}

	// ANS: 1.4013e-45 is the approximate smallest number

	// *** note this is smaller than the minimum value given
	// in the notes (1.2e-38).  The reason for this is that value
	// in the notes is only approximate for smallest numbers.
	// in some cases smaller numbers than that are possible.
	// for largest numbers the value in the notes is more
	// accurate / consistent.

	cout << "\ndone.\n";
	getchar();

	return 0;
}
