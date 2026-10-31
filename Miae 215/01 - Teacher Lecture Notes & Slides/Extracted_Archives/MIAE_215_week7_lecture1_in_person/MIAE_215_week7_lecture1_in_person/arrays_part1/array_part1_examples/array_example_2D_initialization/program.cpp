
#include <iostream>
#include <fstream> // needed for ifstream / fin
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() 
{ 
	// Initialization of 2D Arrays
	
	int i, j;

	// a) Initialization during declaration, eg
	double B1[2][3] = { 1, 2, 3, 4, 5, 6 };
	double B2[2][3] = { { 1.1, 2.1, 3.1 }, { 4.1, 5.1, 6.1 } };

	// b) During declaration with auto computation of row size, eg
	double B3[][3] = { 1.2, 2.2, 3.2, 4.2, 5.2, 6.2 }; 
	// col size must always be given

	// note you should be careful when using [] 
	// -- there are only two situations you can use [] 
	// including this one

	// c) During declaration to all zero elements, eg
	double B4[2][3] = { 0.0 };

	// d) Using a for loop and expression for each element, eg
	double B5[2][3];
	for(i = 0; i < 2; i++) {
		for(j = 0; j < 3; j++) {
			B5[i][j] = i + 0.1*j;
		}
	}

	// e) Using a for loop and keyboard input for each element, eg
	double B6[2][3];
	cout << "\ninput B6, a 2x3 array one element at a time\n";
	for(i = 0; i < 2; i++) {
		for(j = 0; j < 3; j++) { 
			cin >> B6[i][j];
		}
	}

	// f) Using a for loop and file input for each element, eg
	double B7[2][3];
	
	// assume "file.txt" exists with 6 elements
	ifstream fin("file.txt"); 

	for(i = 0; i < 2; i++) { 
		for(j = 0; j < 3; j++) {
			fin >> B7[i][j];
		}
	}

	// print out array elements ///////////

	cout << "\n\nB1 = \n";
	for(i = 0; i < 2; i++) {
		for(j = 0; j < 3; j++) { 
			cout << B1[i][j] << "  ";
		}
		cout << "\n";
	}

	cout << "\n\nB2 = \n";
	for(i = 0; i < 2; i++) {
		for(j = 0; j < 3; j++) { 
			cout << B2[i][j] << "  ";
		}
		cout << "\n";
	}

	cout << "\n\nB3 = \n";
	for(i = 0; i < 2; i++) {
		for(j = 0; j < 3; j++) { 
			cout << B3[i][j] << "  ";
		}
		cout << "\n";
	}

	cout << "\n\nB4 = \n";
	for(i = 0; i < 2; i++) {
		for(j = 0; j < 3; j++) { 
			cout << B4[i][j] << "  ";
		}
		cout << "\n";
	}

	cout << "\n\nB5 = \n";
	for(i = 0; i < 2; i++) {
		for(j = 0; j < 3; j++) { 
			cout << B5[i][j] << "  ";
		}
		cout << "\n";
	}

	cout << "\n\nB6 = \n";
	for(i = 0; i < 2; i++) {
		for(j = 0; j < 3; j++) { 
			cout << B6[i][j] << "  ";
		}
		cout << "\n";
	}

	cout << "\n\nB7 = \n";
	for(i = 0; i < 2; i++) {
		for(j = 0; j < 3; j++) { 
			cout << B7[i][j] << "  ";
		}
		cout << "\n";
	}

	cout << "\n\ndone.\n";
	getchar();
	
	return 0;
}

