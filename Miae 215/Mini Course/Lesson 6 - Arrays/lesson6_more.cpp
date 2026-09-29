
// Arrays exercises

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// Question #1
	// What is the output of the following program ?
	int k,n=0,m,H[100];
	
	for(k=1;k<10;k++) {
		H[2*k+1] = 2*k+1;
		n++;
		m--;
	}
	cout << H[3] << "\n" << H[5] << "\n" << H[7] << "\n";
	cout << H[6] << "\n" << H[11] << "\n";
	cout << n << "\n" << m;
		
	// Question #2
	// Write a program that (make separate programs for each part)
	
	// a) initialzes two 5 dimensional vectors A and B to 
	// A[i] = i*i and B[i] = 1.0/i for i = 1, 2, 3, 4, and 5 using for loops.
	// note: use the arrays A, B starting at index 1 (ie ignore the 0 element)
	
	// b) Calculates C = A - 10*B using for loops
	
	// c) calculates the vector magnitude (ie norm) of C using for loops
    // and prints the result
	// note: the vector magnitude is: norm = sqrt(C[1]*C[1] + C[2]*C[2] + ... ) 
	
	// d) counts the number of elements of A, B, and C that are 
	// greater than 5 and prints the result
  
	cout << "\npress enter to continue.";	
	getchar();
		
	return 0;	
} 

