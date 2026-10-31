
#include <iostream>
#include <fstream> // needed for ifstream / fin
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q3. Write a program that:

// a) Reads a 3x3 matrix A from a file "A.txt"
// eg
// 1 2 3 
// 4 5 6 
// 7 8 9

// b) Calculates the norm of the 3rd col of A and print it out, eg

// eg
//     1 2 3
// A = 4 5 6
//     7 8 9
// norm = sqrt(3^2 + 6^2 + 9^2)
// norm = sqrt(A[1][3]^2 + A[2][3]^2 + A[3][3]^2)
	
// c) Swaps the 2nd and 3rd column of A, eg

//     1 2 3
// A = 4 5 6
//     7 8 9
	
//     1 3 2
// A = 4 6 5
//     7 9 8

// d) Prints out A

int main() 
{ 
	int i, j, n = 3, m = 3;
	double A[4][4], sum, norm_A3, backup;

// a) Reads a 3x3 matrix A from a file "A.txt"
	ifstream fin;
	
	fin.open("A.txt");
	
	if( !fin ) exit(1);

	for(i=1;i<=n;i++) {
		for(j=1;j<=m;j++) {
			fin >> A[i][j];
		}
	}

	fin.close();

// b) Calculates the norm of the 3rd col of A and print it out, eg
// eg
//     1 2 3
// A = 4 5 6
//     7 8 9
// norm = sqrt(3^2 + 6^2 + 9^2)
// norm = sqrt(A[1][3]^2 + A[2][3]^2 + A[3][3]^2)
	sum = 0;
	j = 3; // col is not changing so don't use a loop for that
	for(i=1;i<=n;i++) {
		sum += pow(A[i][j],2);
	}
	norm_A3 = sqrt(sum);
	cout << "\nnorm(A3) = " << norm_A3;
	
// c) Swaps the 2nd and 3rd column of A, eg

//     1 2 3
// A = 4 5 6
//     7 8 9
	
//     1 3 2
// A = 4 6 5
//     7 9 8

	// A[1][2] = A[1][3];
	// A[1][3] = A[1][2];	
	// this doesn't work for the second equation
	// because we overwritten A[1][2]
	// -- we need to backup A[1][2] first

	// backup = A[1][2];
	// A[1][2] = A[1][3];
	// A[1][3] = backup;
	for(i=1;i<=n;i++) {
		backup = A[i][2];
		A[i][2] = A[i][3];
		A[i][3] = backup;
	}

// d) Prints out A
	cout << "\nA =\n";
	for(i=1;i<=n;i++) {
		for(j=1;j<=m;j++) {
			cout << A[i][j] << " ";
		}
		cout << "\n";
	}

	cout << "\n\ndone.\n";
	getchar();
	
	return 0;
}


