
#include <iostream>
#include <fstream> // needed for ifstream / fin
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q2. Write a program that:

// a) Reads two 3x3 matrices A and B from the keyboard

// b) Calculates C = A + B and prints out the result C

// c) Reads a 3x3 matrix D from the file "D.txt"
//    -- assume the text file contains 9 values

// d) Calculates the maximum element of D and prints out the result

int main() 
{ 
	int i, j, nr = 3, nc = 3;
	double A[3+1][3+1], B[4][4], C[4][4], D[4][4], max_D;

	cout << "\ninput matrix A (3x3) (one element a time row by row)\n";
	for(i=1;i<=nr;i++) { // row i
		for(j=1;j<=nc;j++) { // col j
			cin >> A[i][j];
		}
	}

	cout << "\ninput matrix B (3x3) (one element a time row by row)\n";
	for(i=1;i<=nr;i++) {
		for(j=1;j<=nc;j++) {
			cin >> B[i][j];
		}
	}

// b) Calculates C = A + B and prints out the result C
	for(i=1;i<=nr;i++) {
		for(j=1;j<=nc;j++) {
			C[i][j] = A[i][j] + B[i][j];
			cout << C[i][j] << " ";
		}
		cout << "\n"; // each row on a new line
	}

// c) Reads a 3x3 matrix D from the file "D.txt"
//    -- assume the text file contains 9 values
	ifstream fin;
	
	fin.open("D.txt");
	
	if( !fin ) exit(1);
	
	for(i=1;i<=nr;i++) {
		for(j=1;j<=nc;j++) {
			fin >> D[i][j];
		}
	}
	
	fin.close();

// d) Calculates the maximum element of D and prints out the result

	max_D = D[1][1];
	for(i=1;i<=nr;i++) {
		for(j=1;j<=nc;j++) {
			if( D[i][j] > max_D ) max_D = D[i][j];
		}
	}	
	
	cout << "\nmax_D = " << max_D;
	
	cout << "\n\ndone.\n";
	getchar();
	
	return 0;
}

