
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q1.

// Write a program that inputs a sequence of n doubles from the 
// keyboard (assume n<=100). The number n should also be input 
// from the keyboard. The program then calculates and prints out 
// the largest number of the sequence -- ie find the maximum value
// and print it out.

int main() 
{
	// 1. DECLARE
	double A[100], max_A;
	int n, i;
	
	// 2. INITIALIZE
	// -- we are going to input these later
	// so nothing so far
	
	// 3. INPUT
	cout << "\ninput n (1-100) ? ";
	cin >> n;
	
	// the problem statement didn't say check for errors
	// so we don't have to on an exam or assignment
	// -- in the real world we should or at least
	// make a big TODO note to do it later.
	
	// for is a control statement (ie step #4)
	/// we are mixing step 3 and 4 a bit here
	for(i=0;i<n;i++) {
		cout << "\ninput A[i] ? ";
		cin >> A[i];
	}
	
	// after the inputs are made we should
	// be ready to calculate expressions, outputs, etc.
	
	// 4. CONTROL STATEMENTS
	
	// -- we can't reuse existing legos for this so we 
	// are left with the following option
	
	// * small handwritten examples can also help guide you
	// -- solve the problem by hand then write down a list of steps 
	// that you use to solve the example and then program the 
	// control statements for the general case, eg

	// n = 3
	// A[0] = 1
	// A[1] = 3.5
	// A[2] = -2
	
	// how can we find the max of A one small step at a time ?
	// -- ie examining one array element at a time
	
	// max_A = -1e10
	// examine A[0] if it's bigger than max_A then max_A = A[0]
	// examine A[1] if it's bigger than max_A then max_A = A[1]
	// examine A[2] if it's bigger than max_A then max_A = A[2]
	
	// this idea -- which I like to call the bigger and better
	// deal algorithm -- can be considered a lego to find a max
	// value of an array
	
	// the mathematical idea of a program is called an
	// "algorithm" -- a sequence of steps that can
	// be implemented independantly of the computer language
	
	max_A = -1e10;
	for(i=0;i<n;i++) {
		if( A[i] > max_A ) max_A = A[i];
	}
	
	// 5. EXPRESSIONS
 	// -- no big equations maybe max_A = A[i] is step #5
	
/*	
	// alternatively
	max_A = A[0];
	for(i=1;i<n;i++) {
		if( A[i] > max_A ) max_A = A[i];
	}
*/
	
	// it's good to know both approaches
	// -- the second is more mathematically rigorous (always works)
	// -- the first doesn't require knowledge of A[0] at beginning
	// but it potentially doesn't work if max_A is larger
	// than A[i] (eg A[i] < -1e15)
	
	// 6. OUTPUT
	cout << "\nmax_A = " << max_A;
	
	cout << "\ndone.\n";
	getchar();

	return 0;
}
