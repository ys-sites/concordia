
#include <iostream>
#include <cstdio>
#include <cstdlib> // for exit(...)
#include <cmath>

using namespace std;

// Q1. Write a program that:
// a) Inputs an integer i from the keyboard
// b) Inputs a double x from the keyboard
// c) Inputs a character ch from the keyboard
// d) prints all the variables on one line with commas in between

int main()
{
	int i;
	double x;
	char ch;

	cout << "\ninput i ? ";
	cin >> i;

	cout << "\ninput x ? ";
	cin >> x;

	cout << "\ninput ch ? ";
	cin >> ch;

	cout << "\n" << i << " , " << x << " , " << ch << "\n";

	// you can use endl instead of "\n", eg
	// cout << endl << i << " , " << x << " , " << ch << endl;
	// -- I prefer \n becuase it's more compact and general

	cout << "\npress enter to continue.";	
	getchar();

	return 0;	
} 

