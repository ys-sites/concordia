
// Arrays (the final chapter)

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	int i,j;
	
	// C++ has a variable type called "array" that is analogous 
	// to vectors and matrices
	
	// arrays are useful for storing and accessing program data
	// as well as storing and manipulating vectors / matrices
		
	// 1D arrays //
	
	// 1D arrays are analogous to vectors
	
	// in C++ arrays can be made for all basic C++ variable types 
	// (int, double, char, etc.), eg
	int q[5],p[100];
	double A[10],B[10],C[10];
	char c[50],d[50];
	
	// *note*: vectors (ie Euclidean vectors) are normally composed of "real 
	// elements" so an array of DOUBLES is typically used to represent vectors

	// when declaring an array you first indicate the type of the array
	// followed by the name and then the size in square brackets, ie 
	// type name[size]
	
	// *note*: size must be a constant (ie can't be a variable)
    
    // *note*: the size must not be too large (should be less than 10000)
	
	// the illustration above, for example, gives a 1D array q of 5 ints,
	// a 1D array p of 100 ints, etc.
	
	// array elements can be accessed using the desired index in 
	// square brackets, eg
	q[2] = 7; // access the 3rd element in q
	q[0] = 3; // access the 1st element in q
	q[4] = 1; // access the 5th and last element in q  
	
	// *note*: in C++ arrays start at index 0 and go to size-1 (size elements)
	
	// *note*: an array should never be accessed outside the valid index range
	//q[10] = 6; // error out of range -- this could crash your program
	
	// for loops are the preferred way to access/initialize arrays, eg
	for(i=0;i<10;i++) {
		A[i] = 1.0; // initialize each element of A to 1.0
		B[i] = i; // initialize each element of B to i
	}
	
	// *note*: arrays must be initialized before using them

	// basic vector operations such as addition can be peformed using for loops
	cout << "\nC = A + B = \n";
	for(i=0;i<10;i++) { // calculate C = A + B
		C[i] = A[i] + B[i]; // add each element of A and B together
	}	
	
	// arrays can also easily be printed out using for loops, eg.
    // this prints C off as a column vector
	cout << "\nC = \n";
	for(i=0;i<10;i++) {
		cout << C[i] << "\n"; // put each element on a new line	
	}
	
	// 2D arrays are analogous to matrices
	
	// when declaring a 2D array the size is indicated using two sets of 
	// square brackets
	
	// the first set indicates the number of rows and the second set 
	// the number of columns, eg.
	
	double H[2][3]; // array with 2 rows and 3 columns
	
	H[0][0] = 5.0; // set the 1st row and 1st column to 5.0
	H[1][2] = 10.0; // set the 2nd/last row 3rd/last row to 10.0
		
	cout << "\npress enter to continue.";	
	getchar();
		
	return 0;	
} 

