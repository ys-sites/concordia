
// Variable types 1, exercise problems

// Q1. Please determine the output of the program below
// without running the program.  

// If a line of the program has a compiler error then indicate 
// there is an error for that line.  Then comment out / remove 
// the line and continue predicting the output of the program
// assuming that line has been removed.

#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

int main()
{
	int x;

	x = -2147483648;
	x--;
	cout << "\nx = " << x;

	int y, z = 0;

//	z = 1/(y*z); // ERROR: integer divide by zero -- terminates program
	cout << "\nz = " << z;

	float xf = 1.0e-38;
	float yf, zf;

	xf = xf/10;
	cout << "\nxf = " << xf;

	zf = -1/xf;
	cout << "\nzf = " << zf;

	yf = 0.0;
	zf = -1/(yf*zf);
	cout << "\nzf = " << zf;

	yf = 1.0e-10;
	zf = 1.0 + 100*yf;

	cout << "\nzf - 1.0 = " << 100*(zf - 1.0);

	double xd;

	xd = 1.0e308;
	xd = (1.0/xd)/10.0;
	cout << "\nxd = " << xd;

	xd = 1.0/(xd*xd);
	cout << "\nxd = " << xd;

	xd = 1.0/(1.0/(xd*xd));
	cout << "\nxd = " << xd;

	char c1, c2 = 'a', c3, newline = '\n';

    c1 = 'b';
//	c2 = "x"; // ERROR: need to use single quotes for char
    cout << "\n" << c1 << c2 << c3 << newline;

	bool b1 = 3, b2 = 0;
	int logical1, logical2;

	b1 = true;

	if( b1 ) cout << "\nb1 !";
	if( b2 ) cout << "\nb2 !";

	cout << "\nb1 = " << b1;
	cout << "\nb2 = " << b2;

	b1 = -7;
	b2 = false;

	cout << "\nb1 = " << b1;
	cout << "\nb2 = " << b2;

	logical1 = true;
	logical2 = false;

	if( b1 > false ) {
		cout << "\nlogical1 > false";
	}

	if( logical2 ) cout << "\nlogical2 is true";

//	logical1 = 1/logical2; // ERROR: integer divide by zero
	logical2 = 1/logical1;

	cout << "\nlogical1 = " << logical1;
	cout << "\nlogical2 = " << logical2;

	// note the part below is the same as the lecture example,
	// but see if you can remember the output of sizeof
	// for the most common variable types -- it's good for
	// you to remember this information

	cout << "\n\nsizeof(int) = " << sizeof(int);
    cout << "\nsizeof(float) = " << sizeof(float); 
    cout << "\nsizeof(double) = " << sizeof(double);
    cout << "\nsizeof(char) = " << sizeof(char); 
    cout << "\nsizeof(bool) = " << sizeof(bool);

	cout << "\npress enter to continue.";	
    
	getchar();

	return 0;	
} 

