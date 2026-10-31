
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q1. Write a program that: 

// a) inputs an integer number k from 1 to 3 using the keyboard

// b) if the number k is out of range then print
// "input is out of range"

// Steps a) and b) are repeated indefinitely until a 
// valid number is input

// c) if the input is 1 then print out "menu item 1 selected", 
// if the input is 2 then print out "menu item 2 selected", 
// if the input is 3 then print out "menu item 3 selected".
// use an if-else ladder for this part.

int main() 
{ 
	int k;
	
	while(1) {
		cout << "\ninput k ? ";
		cin >> k;
				
		// check if k is in range
		if( 1 <= k && k <= 3 ) {
			break; // move on in the program
		} else {
			cout << "input is out of range";
		}
		
/*
		// alternative -- check if k is out of range
		// we use OR since it has to be one or the other
		// not both (as AND assumes)
		if( k > 3 || k < 1 ) {
			cout << "input is out of range";
		} else { // in range
			break;
		}
*/		
	}

	if( k == 1 ) {
		cout << "menu item 1 selected";	
	} else if ( k == 2 ) {
		cout << "menu item 2 selected";	
	} else if ( k == 3 ) {		
		cout << "menu item 3 selected";	
	} else {
		cout << "\nerror none of the above, k = " << k;
	}

	cout << "\ndone.\n";
	getchar();

	return 0;
}
