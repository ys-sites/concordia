
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q1. Write a program that repeatedly inputs
// integers k from the keyboard
// - it counts the number of integers input greater than 7
// - it stops input when a negative number is input
// - it prints the final value of the count

int main() 
{ 
	int k, count = 0;
	
	while(1) {
		cout << "\ninput k ? ";
		cin >> k;
		if( k < 0 ) break;
		if( k > 7 ) count++;
	}

	cout << "\ncount = " << count;

	cout << "\ndone.\n";
	getchar();

	return 0;
}
