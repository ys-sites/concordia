
#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

int main()
{
	// Q2. fill in the blanks for the program below.

	// declare a constant 1 byte integer a1 with a range from -128 to 128 
	// and initialize it to 27
	const char a1 = 27; // cast to char is not needed here but can be used

	// comment: 

	// from the notes, a signed char (ie a char) has a range 
	// of -128 to 127 so it can be used -- the range
	// is small because a char is only one byte.

	// also char is the only variable type (other than bool)
	// that has one byte

	// short int has a range of -32000 to 32000 so the range 
	// is too large to use -- because it's 2 bytes

	// declare a constant 1 byte integer a2 with a range from 0 to 255 
	// and initialize it to 37
	const unsigned char a2 = 37; 
	// cast to unsigned char is not needed but can be used

	// comment:

	// need unsigned to restrict the range of char to 0 and greater.
	// from the notes the range is 0 to 255 which is what we want.

	// declare an unsigned constant 2 byte integer a3
	// and initialize it to a2 (avoid warnings using a cast)
	const unsigned short int a3 = (unsigned short int)a2; 

	// comment:

	// a short int is required here since it has 2 bytes

	// a cast to unsigned short int (the type of a3) 
	// to avoid warnings for the conversion from unsigned char 
	// (the type of a2)

	// declare a constant float b1 and initialize it to 1.618
	// (avoid warnings using a cast)
	const float b1 = (float)1.618; 

	// comment: a decimal constant such as 1.618 is assumed to be 
	// double in C++ so a cast to a float is needed to prevent warnings
	
	// declare a double b2 and initialize it to b1
	// (avoid warnings using a cast)
	double b2 = (double)b1; 

	// Q3. compile the program from Q2 and add a program part
	// to output the variables using cout in order to verify 
	// the program for Q2 works properly (also with no warnings).

	// note that a1 and a2 need to be cast to (int) in order
	// to view the characters as integers, otherwise the 
	// equivalent character is printed

	cout << "\na1 = " << (int)a1;
	cout << "\na2 = " << (int)a2;
	cout << "\na3 = " << a3;

	cout << "\nb1 = " << b1;
	cout << "\nb2 = " << b2;

	cout << "\npress enter to continue.";	
    
	getchar();

	return 0;	
} 

