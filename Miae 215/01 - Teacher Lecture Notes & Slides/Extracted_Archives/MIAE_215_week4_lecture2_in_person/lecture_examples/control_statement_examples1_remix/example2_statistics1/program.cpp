
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q1.

// x a) input a sequence of up to 100 doubles from the keyboard
// one at a time and store them into a 1D array A

// x b) if a number less than -1 is input then stop the input
// and move on to step c)

// x c) calculate and print out the average of A
// and the norm of A
// norm(A) = sqrt( A[0]^2 + A[1]^2 + ... + A[n-1]^2 )

// d) count and print out the number of elements 
// where 1 < A[i] < 10 or A[i] == 0

int main() 
{
	// note A[100] -- from A[0] to A[99]
	// note: it never hurts to make the array a bit
	// larger for future expansion, etc. eg 200
	double A[200], A_ave, A_norm, sum = 0, sum2 = 0, eps = 1e-7;
	int i, count = 0, nmax = 100, ndata;

	for(i=0;i<nmax;i++) {
		cout << "\ninput A[" << i << "] = ? ";
		cin >> A[i];
		if( A[i] < -1 ) {
			ndata = i;
			cout << "\nndata = " << ndata;
			break;
		}	
	}

	sum = 0;
	sum2 = 0;
	for(i=0;i<ndata;i++) {
		sum += A[i];
// 		sum2 += pow(A[i],2); // OK
		sum2 += A[i]*A[i]; // faster than pow
	}
	
/*
	// alternative -- reuse sum
	sum = 0;
	for(i=0;i<ndata;i++) {
		sum += A[i]*A[i]; // faster than pow
	}
*/	
	
	// if the question said check for errors
	// then we should check for errors such as n==0
	// if not assume n is not zero
	// -- in the real world it's best to check for basic
	// errors
	A_ave = sum/ndata;

	// norm(A) = sqrt( A[0]^2 + A[1]^2 + ... + A[n-1]^2 )
	A_norm = sqrt(sum2);

// d) count and print out the number of elements 
// where 1 < A[i] < 10 or A[i] == 0
	count = 0;
	for(i=0;i<ndata;i++) {
		
		if( ( (1 < A[i]) && (A[i] < 10) ) || ( abs(A[i]) < eps ) ) 
				count++;
			
		// alternatively we can get rid of () with our
		// our knowledge of order of operations
//		if( 1 < A[i] && A[i] < 10 || abs(A[i]) < eps ) 
		//    2      5       3    6       1    4	
//				count++;						
			
	}
	
	cout << "\nA_ave = " << A_ave;
	cout << "\nA_norm = " << A_norm;
	cout << "\ncount = " << count;

	cout << "\ndone.\n";
	getchar();

	return 0;
}
