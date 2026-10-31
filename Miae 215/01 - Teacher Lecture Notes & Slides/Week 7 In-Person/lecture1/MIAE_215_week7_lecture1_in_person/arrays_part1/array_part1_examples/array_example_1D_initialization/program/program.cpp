
#include <iostream>
#include <fstream> // needed for ifstream / fin
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() 
{ 
	// Initialization of 1D Arrays
	
	int i;
	
	// a) Initialization during declaration, eg
	double B1[3] = { 1.1, 2.2, 3.3 };

	// this type of expression can only be used during declaration

	// b) During declaration with auto computation of size, eg
	double B2[] = { 1.11, 2.22, 3.33 };

	// note you should be careful when using [] 
	// -- there are only two situations you can use [] 
	// including this one

	// c) During declaration to all zero elements, eg
	double B3[3] = { 0.0 };

	// d) Using a for loop and expression for each element, eg
	double B4[3];
	for(i = 0; i < 3; i++) B4[i] = 0.1;

	// e) Using a for loop and keyboard input for each element, eg
	double B5[3];
	cout << "\ninput B5 array (3 elements)\n";
	for(i = 0; i < 3; i++) cin >> B5[i];

	// f) Using a for loop and file input for each element, eg
	
	double B6[3];
	
	// assume "file.txt" exists with 3 elements
	ifstream fin("file.txt");
	
	for(i = 0; i < 3; i++) fin >> B6[i];

	// print out array elements ///////////

	cout << "\n\nB1 = ";
	for(i = 0; i < 3; i++) cout << B1[i] << "  ";

	cout << "\n\nB2 = ";
	for(i = 0; i < 3; i++) cout << B2[i] << "  ";

	cout << "\n\nB3 = ";
	for(i = 0; i < 3; i++) cout << B3[i] << "  ";

	cout << "\n\nB4 = ";
	for(i = 0; i < 3; i++) cout << B4[i] << "  ";

	cout << "\n\nB5 = ";
	for(i = 0; i < 3; i++) cout << B5[i] << "  ";

	cout << "\n\nB6 = ";
	for(i = 0; i < 3; i++) cout << B6[i] << "  ";

	cout << "\n\ndone.\n";
	getchar();

	return 0;
}
