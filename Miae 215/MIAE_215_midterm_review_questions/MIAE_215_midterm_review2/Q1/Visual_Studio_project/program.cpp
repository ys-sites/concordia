
// Q1. Determine the output of the program below
// without running the program.

#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

int main()
{
	int x;

	x = 2147483648;
	x++;
	cout << "\nx = " << x;
 
	double xf = 1.0e-308;
	double yf, zf;

	xf = xf/1e30;
	cout << "\nxf = " << xf;

	zf = -1/xf;
	cout << "\nzf = " << zf;

	bool b1 = 0, b2;
	int logical1, logical2;

	b1 = true;

	if( b1 ) cout << "\nb1 !";
	if( b2 ) cout << "\nb2 !";

	b1 = 0;
	b2 = false;

	cout << "\nb1 = " << b1;
	cout << "\nb2 = " << b2;

	logical1 = false;
	logical2 = true;

	if( b1 > false ) {
		cout << "\nlogical1 > false";
	}

	if( logical2 ) cout << "\nlogical2 is true";

	cout << "\n\n" << sizeof(int) - sizeof(bool);
	cout << "\n" << sizeof(double) - sizeof(float);
	
	cout << "\npress enter to continue.";	
    
	getchar();

	return 0;	
} 

