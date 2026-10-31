
// Q3. Determine the output of the programs below
// (part a, b) without running the program.

#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

int main()
{		
	// a)

	int i, j, B[10], x, y;

	cout << "\npart a)\n\n";

	j = 1;
	x = 1.0;
	y = 2;

	for(i=3;i>-1;i--) {
		x *= y;
		j /= -1;
		B[i+1] = x + i;
		cout << j << "\t" << x << "\n";
	}

	cout << "\ni = " << i;
	cout << "\n" << B[3] - B[1];
	cout << "\n" << B[2] - B[0];
		
	// b)

	int A[4], z = 0; 

	cout << "\n\npart b)\n";

	x = 8;
	i = -1;

	while( x > 1 ) { 
		i++;
		x = x / 2;
		if( i > 3 ) {
			break;
		} else if ( (x < 10) && (i > 1) ) {
			z = 1.5;
			cout << "\nz1";
		} else {
			z = -1.5;
			cout << "\nz2";
		}
		A[i] = x + z;
	}

	cout << "\nx = " << x;
	cout << "\ni = " << i;
	cout << "\nA[0] = " << A[0];
	cout << "\nA[2] = " << A[2];
	
	cout << "\n\ndone.";
	getchar(); 	
		
	return 0;	
} 

