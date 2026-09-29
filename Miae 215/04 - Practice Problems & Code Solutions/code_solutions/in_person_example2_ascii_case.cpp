
#include <iostream> // cout
#include <cstdio> // getchar
#include <cstdlib> // for exit(...)
#include <cmath> // sin(x), etc.

using namespace std;

// Q1. Write a program that repeatedly inputs a character
// from the keyboard (up to 10 times maximum).
// a) If the character equals 'x' then stop the program
// b) If the character is lower case then convert it to 
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
	int i_ch;

	cout << "\ninput a char ch ? ";
	cin >> ch;

	cout << "\npress enter to continue.";	
	getchar();

	return 0;	
} 

