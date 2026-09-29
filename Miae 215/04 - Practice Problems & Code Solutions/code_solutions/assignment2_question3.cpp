
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// 3. Write a program that inputs an integer n and a double x from 
// the keyboard.  Then using an if-else ladder, perform the following 
// tasks:

// a) For n = 1 calculate and print out sin(x).
// b) For n = 2 calculate and print out the absolute value of x.
// c) For n = 3 calculate and print out exp(x).
// d) For n = 4 calculate and print out log base 10 of x 
// (check x for invalid values).
// e) Print out an error message if n is not one of the above values.

int main() 
{ 
	int n;
	double x;

	cout << "\ninput n (1-4) ? ";
	cin >> n;

	cout << "\ninput x ? ";
	cin >> x;

	if(n == 1) {
		cout << sin(x) << "\n";
	} else if (n == 2) {
		cout << abs(x) << "\n";
	} else if (n == 3) {
		cout << exp(x) << "\n";
	} else if (n == 4) {
		if( x > 0.0 ) { 
			cout << log10(x) << "\n";
		} else {
			cout << "\nerror x <= 0.0 in log10(x)";
		}
	} else {
		cout << "\nerror: n is out of range";
	}

	cout << "\ndone.\n";
	getchar();

	return 0;
}
