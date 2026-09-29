
// control statement examples

#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

int main()
{
	int i, j, k;
	double x, eps = 1.0e-7;
	
	// if-else ladders /////////////////////

	// It's possible to have one if statement inside of another 
	// (ie "nested"), for example:

	// For this example, only one if statement is executed depending 
	// on the value of i.  The last else occurs if none of the 
	// if statements is executed -- only one of the if statements 
	// or final else occurs.

	i = 3;

	if ( i == 1 ) {
		cout << "\ni == 1";
	} else {
		if ( i == 2 ) {
			cout << "\ni == 2";
		} else {
			if ( i == 3 ) {
				cout << "\ni == 3";
			} else {
				cout << "\ni is not equal to 1, 2, 3 -- none of the above";
			} // end if i == 3

		} // end if i == 2

	} // end if i == 1

	// The example above can be written as:

	if ( i == 1 ) {
		cout << "\ni == 1";
	} else if ( i == 2 ) {
		cout << "\ni == 2";
	} else if ( i == 3 ) {
		cout << "\ni == 3";
	} else if ( i == 4 ) {
		cout << "\ni == 4";
	} else {
		cout << "\ni is not equal to 1, 2, 3, 4 -- none of the above";
	}

	// This statement is known as an "if-else ladder" -- it's very
	// useful for developing programs that make decisions based
	// on inputs (cin, Arduino sensors, etc.)

	// for loops /////////////////////

	// A loop is used to execute a part of the program repeatedly

	// The "for loop" is the most common type of loop, eg

	//    0       1,4    3
	for( i = 0 ; i < 5 ; i++ ) {
		cout << "\ni = " << i; // 2, 5
	}
	
	// output:
	
	cout << "\ni_exit = " << i; // ...

	// note that the {} is not needed for single line code blocks, eg

	for( i = 0; i < 5; i++ ) cout << "\ni = " << i;

	// generalized increment and other types of expressions can
	// be used in for loops, eg

	for( i = 0; i <= 10; i += 2 ) cout << "\n" << i;
	
	// output:


	// exit value of for loop is i = ...
	
	for( x = 1.0; x < 1.0e5 + eps; x *= 10.0 ) cout << "\n" << x;
	
	// output:
	//
	
	// i_exit = ...

	for( k = 0; k < 1000; k = k*k + 1 ) cout << "\n" << k;
	
	// output:
	// ...
	// 

	// note the exit value of a for loop is the final incremented 
	// index that no longer satisfies the loop condition, eg

	cout << "\ni = " << i;
	cout << "\nx = " << x;

	// it's possible to put a for loop inside a for loop 
	// (ie a nested loop)

	// this is very useful for 2D arrays, matrices, etc. eg,

	// this example sets a 2D array A one row at a time

	double A[3][3];

	for(i=0;i<3;i++) { // outer loop (i = row)
		
		// for each i this inner loop goes over all j
		for(j=0;j<3;j++) { // inner loop (j = col)

			cout << "\ni = " << i << " , j = " << j;
			A[i][j] = 1.0 + i + j; // initialize A

		} // end for j

		// i = 0 (row)
		// j = 0, 1, 2 (cols)
		// i = 1
		// j = 0, 1, 2
		// i = 2
		// j = 0, 1, 2
		
		// -> if we consider i to be row and j to be a column
		// of a 2D array (ie a matrix) 
		// then the indices i,j correspond to row0, row1, row2
		// of the matrix, eg
		
		//		  j
		// A = [1 2 3]
		//     [4 5 6]  i
		//     [7 8 9]
		
		// ie -> (i,j) accesses all the elements of A 
		// one row at a time

	} // end for i

	cout << "\npress enter to continue.";	
	getchar();

	// need 2nd getchar() -- robot input above gives an extra enter
	getchar(); 

	return 0;
} 

