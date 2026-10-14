
#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

// The expected answers inside the box are as follows
// which can be obtained by running the programs below.
// The outputs needed to be in the box to get full marks.

// a) (9 marks)
// 1 8
// 2 14
// 3 19
// 29 19 26

// b) (5 marks)
// 8
// -2
// 7
// -3
// Garbage

int main()
{
	// A simplified table approach is the best way to solve relatively 
	// complicated problems (ie with multiple control statements).
	
	// In this approach, just update the variables that change
	// with each line in the program.
	// If no variables change on a line don't write anything down.
	
	// You might want to use a ruler to outline the columns of the table
	// -- that way you know for sure which variable hasn't changed.
	
	// Mark each line in the program (with an x, check mark etc) 
	// to keep track of the current line so you don't lose track when
	// you are putting outputs in the box, etc.
	
	// Pay careful attention to each line of the program so
	// you don't make an error (on integer round down, etc.)
	// that may propagate through your solution
	
	// Make sure to stop whenever a cout occurs and write
	// the output in the box, that way you don't forget to 
	// write all the outputs down.
	
	// You need to practice this approach several times to get
	// reasonably good/fast at it for the exam
	// -- have a system so you don't have to think about how to format your solution
	
	// a)
	int a=1, b=2, B[] = { 11, 7, 6, 5 }; 
	int i=0 , sum = 0; // x
	while(1) { 
		sum += B[i]; // xxxx
		if(i > 2) break; // xxxx
		a += B[i+1]; // xxx
		i++; // xxx
		cout << "\n" << i << " " << a; // xxx -- cout -> write in output box
	} 
	b = sum-i; // x
	cout << "\n" << sum << " " << a << " " << b; // x -- cout -> write in output box

	// i   sum   a   b   B
	// 0   0     1   2   11,7,6,5
	//     11
	//           8
	// 1
	//     18
	//           14
	// 2
	//     24
	//           19
	// 3
	//     29
	//               26
		
	// output box /////////
	// 1 8
	// 2 14
	// 3 19
	// 29 19 26
	///////////////////////

	// Try the table approach on part a) again and part b) for practice.
	// Change some of the initial variables / control statments to make a new practice problem.

	// b)
	int i;
	double A[4] = { -0.1, 0.11, 0.0, 0.2 } , x = 1.0;

	for(i=0;i<4;i++) { // xxxxx
		if(A[i] < -0.11 ) { //
			x += 1; //
		} else if (A[i] > 0.1) { //
			x -= 10; // xx
		} else { // 
			x = 7 + 1/(i+1); // xx
		}
		cout << "\n" << x; // xxxx
	}
	cout << "\n" << A[i]; // x

	// i   x   A
	// 0   1   -0.1, 0.11, 0.0, 0.2
	//     8
	// 1
	//     -2
	// 2
	//     7
	// 3
	//     -3
	// 4
	
	// output box /////
	// 8
	// -2
	// 7
	// -3
	// G (garbage)
	///////////////////

	cout << "\ndone.\n";
	getchar(); 	
		
	return 0;	
} 

