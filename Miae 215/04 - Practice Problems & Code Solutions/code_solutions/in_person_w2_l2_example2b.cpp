
#include <iostream> // cout
#include <cstdio> // getchar
#include <cstdlib> // for exit(...)
#include <cmath> // sin(x), etc.

using namespace std;

// Q1. Write a program that repeatedly inputs a character
// from the keyboard (up to 10 times maximum).
// x a) If the character equals '!' then stop the program
// x b) If the character is lower case then convert it to 
// upper case and print it out

// lower case goes from 'a' to 'z'
// 'a' - 97
// 'z' - 122
// to convert to upper case we need to subtract 32
// -- we can check this from an ascii table
// or just print out (int)'a' - (int)'A' or set a variable to the dif

int main()
{
	char ch;
	int i_ch, delta, i;

	delta = (int)'a' - (int)'A';
	cout << "\ndelta = " << delta;

	for (i = 0; i < 10; i++) {

		cout << "\ninput a char ch ? ";
		cin >> ch;

		if (ch == '!') {
			// stop the program
			exit(0);
		}

		// convert ch to an int
		i_ch = (int)ch;

		if ((97 <= i_ch) && (i_ch <= 122)) {
			// convert to upper case
			i_ch = i_ch - delta;

			// convert int to char
			ch = (char)i_ch;

			cout << "\nupper case ch = " << ch;
		}

	}

	cout << "\npress enter to continue.";	
	getchar();

	return 0;	
} 

