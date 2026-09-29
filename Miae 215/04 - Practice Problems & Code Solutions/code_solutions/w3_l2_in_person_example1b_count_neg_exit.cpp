
// Q. Write a program that:

// a) inputs 5 doubles from the keyboard one at a time and
// count the number of doubles with values < 7.7.
// print out the final count to the screen.

// b) If a negative number is input then stop the program immediately.

#include <iostream>
#include <cstdio>
#include <cmath>
#include <cstdlib>

using namespace std;

int main()
{
	double x;
	int count = 0, i;

	for(i=0;i<5;i++) {
		cout << "\ninput x ? ";
		cin >> x;
		if( x < 0.0 ) exit(0); // stop the program immediately
		if( x < 7.7 ) count++;
	}

	cout << "\ncount = " << count;

	cout << "\ndone.\n";
	getchar();

	return 0;
} 

