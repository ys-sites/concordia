
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() 
{ 

// 1) Write a program that inputs 3 individual characters from the 
// keyboard, one character at a time.  If an input is equal 
// to ‘x’ the program prints out “input is equal to x”.  
// The program then prints out each character in the reverse order 
// it was input.  For example,

// Input from the keyboard (one character at a time):
// a (return)
// b (return)
// c (return)

// Output (to the screen):
// c     
// b
// a

	char c1, c2, c3;

	// note you can use a for loop here, but since there
	// are only three characters you can do it one at a time

	cout << "\ninput c1 ? ";
	cin >> c1;
	if( c1 == 'x' ) cout << "\ninput is equal to x";

	cout << "\ninput c2 ? ";
	cin >> c2;
	if( c2 == 'x' ) cout << "\ninput is equal to x";

	cout << "\ninput c3 ? ";
	cin >> c3;
	if( c3 == 'x' ) cout << "\ninput is equal to x";

	// print out in the reverse order
	cout << "\n" << c3;
	cout << "\n" << c2;
	cout << "\n" << c1;

// 2) Write a program that calculates y = cos(x) using a for loop 
// for x = 0.0, 1.0e-3, 2.0e-3, …, 1000.  It also counts the number 
// of times that y is greater than 0.9 and prints out the final 
// count to the screen.

	double x, y;
	int count;

	// could also use i in a for loop
	
	// note: the 1.0e-5 protects against round off error
	// -- in case case x gets a small bit above 1000
	// but is still approximately equal to 1000

	count = 0;
	for( x = 0.0; x < (1000 + 1.0e-5); x = x + 1.0e-3 ) {
		y = cos(x);
		if( y > 0.9 ) count++;
	}

	cout << "\ncount = " << count;

// 3) Write a program that estimates the largest possible value for 
// a double by repeatedly multiplying 1.0 by 10 until the number 
// is too large.  It does this in two different ways:

// i) Printing out the number sequence to the screen (letting a 
// knowledgeable user observe when it gets too large).

// ii) Using the fact that a double no longer changes when multiplied 
// by 10 if it becomes too large.  At that point print out the 
// message "double out of range" to the screen.  

// Hint: if something doesn’t change then it *_stays_ _the_ _same_*.

	// --> check to see if x*10 is the same as x (ie x*10 == x)

	// note: this works because x = inf if x becomes too large
	// x = inf, so x*10 = x*inf = inf = x

	int i;

	x = 1.0;
	for(i=0;i<1000000;i++) {
		x = x * 10;
		cout << "\n" << x;
		if( x*10 == x ) cout << "\nx is out of range";
		getchar(); // use this to slow it down for reading
	}

	cout << "\ndone.\n";
	getchar();

	return 0;
}
