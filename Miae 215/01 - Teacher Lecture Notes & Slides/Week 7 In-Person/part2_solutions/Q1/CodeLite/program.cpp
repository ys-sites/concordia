
#include <iostream>
#include <fstream> // needed for ifstream / fin
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q1. Write a program that:

// a) Reads two 3x3 matrices A and B from files "A.txt" and "B.txt"
//    and prints them out to the screen
//    -- assume each text files contain 9 values

// b) Calculates the transpose At of matrix A and prints the result

// c) calculates / prints the sum / total of each column of B
//    -- ie like the sum of columns in a spreadsheet

// eg B = 1 2 3
//        4 5 6
//        1 3 -1

//   S =  6 10 8

int main() 
{ 
	int i, j;
	double A[4][4], B[4][4], At[4][4], S[4];

	// open file
	ifstream fin_A("A.txt");
	
	// check for errors
	if( !fin_A ) {
		cout << "\nerror opening file A.txt";
		exit(1);
	}
	
	// read matrix from file
	for(i=1;i<=3;i++) {
		for(j=1;j<=3;j++) {
			fin_A >> A[i][j];
		}
	}

	// print matrix
	cout << "\nA = \n";
	for(i=1;i<=3;i++) {
		for(j=1;j<=3;j++) {
			cout << A[i][j] << "  ";
		}
		cout << "\n";
	}
	
	// open file
	ifstream fin_B("B.txt");
	
	// check for errors
	if( !fin_B ) {
		cout << "\nerror opening file B.txt";
		exit(1);
	}
	
	// read matrix from file
	for(i=1;i<=3;i++) {
		for(j=1;j<=3;j++) {
			fin_B >> B[i][j];
		}
	}

	// print matrix
	cout << "\nB = \n";
	for(i=1;i<=3;i++) {
		for(j=1;j<=3;j++) {
			cout << B[i][j] << "  ";
		}
		cout << "\n";
	}

	// calculate transpose of A
	
	// from the matrix algebra references, 
	// transpose is given by At[i][j] = A[j][i]
	// ie rows and cols are exchanged
	
	// you could also get this formula by studying
	// a simple transpose example and noting the pattern
	// in the element indices
	for(i=1;i<=3;i++) {
		for(j=1;j<=3;j++) {
			At[i][j] = A[j][i];
		}
	}

	cout << "\nAt = \n";
	for(i=1;i<=3;i++) {
		for(j=1;j<=3;j++) {
			cout << At[i][j] << "  ";
		}
		cout << "\n";
	}
	
	// calculate the sum of each column of B
	
	// initialize sum of each column S to zero
	for(j=1;j<=3;j++) S[j] = 0.0;
	
	// go through all elements in B and add to S
	for(i=1;i<=3;i++) {
		for(j=1;j<=3;j++) {
			// note we use S[j] since j is the column
			S[j] += B[i][j];
		}
	}
	
/*
	// alternative way to calculate S //////
	for(j=1;j<=3;j++) { // use col j in the outside loop
		S[j] = 0.0;
		for(i=1;i<=3;i++) { // access each row i in the col
			S[j] += B[i][j];
		}
	}
	// end of alternative ///////////////////
*/
	
	cout << "\nS = \n"; 
	for(j=1;j<=3;j++) {
		cout << S[j] << "\n";
	}
	
	cout << "\n\ndone.\n";
	getchar();
	
	return 0;
}

