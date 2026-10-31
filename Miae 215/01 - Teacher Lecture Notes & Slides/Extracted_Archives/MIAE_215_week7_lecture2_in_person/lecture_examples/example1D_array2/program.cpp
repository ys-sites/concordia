
#include <iostream>
#include <fstream> // step #0 -- needed for file I/O
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q1. Write a program that:

// a) inputs two 1D arrays A and B from files "A.txt" and "B.txt"
// where the files have the format:
// n
// A[0]
// A[1]
// ...
// A[n-1]

// where n<=100

// note: with file input you just separate the variables
// with spaces or new line characters
// when reading file input the input stops when it hits a space/newline
// and the next variable begins after the space/newline
// -- see "A.txt" and "B.txt" for examples
// -- such files can be made using a text editor such as notepad++
// or a C++ program with file output

// b) calculates C = A + B

// c) saves C to a file "C.txt" in the format of part a)

int main() 
{ 
	const int NMAX = 100;
	int i, n;
	double A[NMAX], B[NMAX], C[NMAX];

	// step #1: declare input file stream variable
	ifstream fin;
	
	// step #2: open the file
	fin.open("A.txt");
	
	// step #3: check for errors
	// two main types of errors with opening an input file
	// a) the file doesn't exist and in your folder with *.cpp files
	// b) the file is already open in another program (eg spreadsheet)
	if( !fin ) {
		cout << "\ninput file open error";
		exit(1);
	}
	
	// step #4: read the data -- minding the format
	fin >> n;
	
	if( n > NMAX ) {
		cout << "\nn > NMAX";
		exit(1);
	}
	
	for(i=0;i<n;i++) fin >> A[i];
	
	// step #5: close the file
	// the other nice thing about closing a file
	// is we can reuse fin for another file
	fin.close();
	
	// alternatively we could have opened up two
	// files at the same time using two different
	// file input stream variables (eg fin_A and fin_B)
	
	// in this case we will just reuse fin and repeat
	// step #2 to #5 for the other file
	
	// step #2: open the file
	fin.open("B.txt");
	
	// step #3: check for errors
	// two main types of errors with opening an input file
	// a) the file doesn't exist and in your folder with *.cpp files
	// b) the file is already open in another program (eg spreadsheet)
	if( !fin ) {
		cout << "\ninput file open error";
		exit(1);
	}
	
	// step #4: read the data -- minding the format
	fin >> n;
	
	if( n > NMAX ) {
		cout << "\nn > NMAX";
		exit(1);
	}
	
	for(i=0;i<n;i++) fin >> B[i];
	
	// step #5: close the file
	// the other nice thing about closing a file
	// is we can reuse fin for another file
	fin.close();
	
// b) calculates C = A + B
	for(i=0;i<n;i++) C[i] = A[i] + B[i];

// c) saves C to a file "C.txt" in the format of part a)
	
/*
	// use the quick and dirty way to show the difference
	// -- in real life and assignments use the 5 step approach
	// on exams try to use 5 step approach time permitting
	ofstream fout("C.txt");
	
	fout << n << "\n";
	for(i=0;i<n;i++) fout << C[i] << "\n";
	
	fout.close(); // close the file
*/
	// step #1: declare input file stream variable
	ofstream fout;
	
	// step #2: open the file
	fout.open("C.txt");
	
	// step #3: check for errors
	// two main types of errors with opening an input file
	// a) the file is already open in another program (eg spreadsheet)
	if( !fout ) {
		cout << "\ninput file open error";
		exit(1);
	}
	
	// step #4: read the data -- minding the format
	fout << n << "\n";
	
	for(i=0;i<n;i++) fout << C[i] << "\n";
	
	// step #5: close the file
	// the other nice thing about closing a file
	// is we can reuse fin for another file
	fout.close();
		
	cout << "\ndone.\n";
	getchar();

	return 0;
}
