
// Q1. Please determine the output of the program below
// without running the program.

#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

int main()
{
	double x = 5.999; 
	char ch = '$'; 
	int y, z;

	y = (int)x;
	z = (int)ch;

	cout << "\ny = " << y;
	cout << "\nz = " << z;

	// for this question recall the range of char is -128 to 127
	// hint y = 131 is equivalent to:
	// y = 0; y = y + 127; y = y + 1; y = y + 3
	y = 131;
	ch = (char)y;
	cout << "\n(int)ch = " << (int)ch;

	cout << "\n(int)'c' = " << (int)'c';

	y = (int)'a' - (int)'A';
	cout << "\ny = " << y;
	cout << "\ny2 = " << (int)'b' - (int)'B';
	cout << "\ny3 = " << (int)'c' - (int)'C';

	y = 'G' + y;
	cout << "\n(char)y = " << (char)y;

	y = 35;
	cout << "\n(char)y = " << (char)y;

	cout << scientific;
	cout.precision(10);

	int i1 = 0, i2 = 5;
	double d1 = i1, d2;
	float f1 = 3.0000005f, f2 = 3.000000005, f3;

	d2 = f1 - f2;
	f3 = f1 - f2;

	cout << "\nd1 = " << d1;
	cout << "\nd2 = " << d2;
	cout << "\nf1 = " << f1;
	cout << "\nf2 = " << f2;
	cout << "\nf3 = " << f3;

	short int xs = 32700;

	xs = xs + 777;
	cout << "\nxs = " << xs;

	cout << "\nsizeof(short int) = " << sizeof(short int);

	cout << "\nsizeof(const double) = " << sizeof(const double);

	cout << "\nsizeof(long double) = " << sizeof(long double);

	cout << "\nsizeof(long float) = " << sizeof(long float);

	cout << "\nsize1 = " << sizeof(const unsigned int);

	cout << "\nsize2 = " << sizeof(unsigned long int);

	cout << "\nsize3 = " << sizeof(const unsigned short int);

	// Q2. fill in the blanks for the program below.

	// declare a constant 1 byte integer a1 with a range from -128 to 128 
	// and initialize it to 27
//	___ a1 ___; 

	// declare a constant 1 byte integer a2 with a range from 0 to 255 
	// and initialize it to 37
//	___ a2 ___; 

	// declare an unsigned constant 2 byte integer a3
	// and initialize it to a2 (avoid warnings using a cast)
//	___ a3 ___; 

	// declare a constant float b1 and initialize it to 1.618
	// (avoid warnings using a cast)
//	___ b1 ___; 

	// declare a double b2 and initialize it to b1
	// (avoid warnings using a cast)
//	___ b2 ___; 

	// Q3. compile the program from Q2 and add a program part
	// to output the variables using cout in order to verify 
	// the program for Q2 works properly (also with no warnings).

	cout << "\npress enter to continue.";	
    
	getchar();

	return 0;	
} 

