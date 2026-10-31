
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() 
{ 

// Write a program that:

// a) Inputs an integer n from the keyboard where n<=100.  If n is out 
// of range then print out an error message and ask for another input.  
// This process repeats until a valid value for n is obtained.

	int n;

	while(1) {
		cout << "\ninput n (1-100) ? ";
		cin >> n;
		if( (n < 1) || (n > 100) ) {
			cout << "\nerror n is out of range, n = " << n;
		} else {
			break;
		}
	}

// b) Inputs two 1D arrays of doubles A and B (of size n) from the 
// keyboard.

	int i;
	double A[100], B[100];

	cout << "\ninput A[i] ?\n";
	for(i=0;i<n;i++) cin >> A[i];

	cout << "\ninput B[i] ?\n";
	for(i=0;i<n;i++) cin >> B[i];

// c) Inputs an integer k (from 1 to 3) from the keyboard.

	int k;
	int k1 = 0, k2 = 0, k3 = 0; // for part h)
	double sum, ave, min;

	while(1) { // for part h)

	cout << "\ninput k (1-3) ? ";
	cin >> k;

	// * note: you can use an if-else ladder here or multiple if statements
	// if-else ladder is preferred for menus though

	if(k == 1) {
		// d) If k = 1 then it calculates the average value of A[i] and prints 
		// it to the screen.
		sum = 0.0;
		for(i=0;i<n;i++) sum += A[i];
		ave = sum / n;
		cout << "\naverage = " << ave;
		k1 = 1;
	} else if (k == 2) {
		// e) If k = 2 then it calculates the minimum value of B[i] and prints 
		// it to the screen.
		min = 1.0e10;
		for(i=0;i<n;i++) {
			if(B[i] < min) min = B[i];
		}
		cout << "\nmin(B[i]) = " << min;
		k2 = 1;
	} else if (k == 3) {
		// f) If k = 3 then it calculates the dot product of A and B and prints 
		// the result to the screen.
		sum = 0.0;
		for(i=0;i<n;i++) sum += A[i]*B[i];
		cout << "\ndot(A,B) = " << sum;
		k3 = 1;
	} else {
		// g) If k is out of range then the program prints out an error message 
		// and terminates the program.
		cout << "\nerror k is out of range , k = " << k;
		exit(1);
//		break; // alternative
//		return 1; // alternative
	}

	// break out of loop if all menu items selected
	if( (k1 == 1) && (k2 == 1) && (k3 == 1) ) {
		break; // stop the loop when all items are selected
	}

	} // end while(1) -- for part h)

	// * note: part h) is a bit difficult so make it a bonus 
	// worth an extra 2 marks

// h) Parts c) to g) repeat until every valid value of k (ie menu item) 
// has been selected at least once (or part g terminates the program).  
// If you don’t know how to do this part you can just assume parts c) 
// to g) repeat indefinitely.

	// -> put parts c) to g) in an infinite loop
	// and use integers k1, k2, k3 to keep track 
	// of what items have been selected
	// - could also use an array for ki such as k_selected[i]
	
	cout << "\ndone.\n";
	getchar();

	return 0;
}
