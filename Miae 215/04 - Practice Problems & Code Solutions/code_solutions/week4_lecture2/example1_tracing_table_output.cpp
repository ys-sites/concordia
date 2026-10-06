
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// This example demonstrates a table based approach for 
// determining the output of a program

// The main advantage is that it's systematic / methodical,
// so it can be applied to complicated programs with numerous 
// control statements using a step-by-step procedure

// This approach also helps you understand how a program executes
// since programs execute in a step-by-step manner

// * You are expected to apply this approach for quizzes and exams
// -- you can't just write the program outputs without following 
// the proper steps and making a table first

int main() 
{ 
	// Q1.

	// a) Label each line sequentially in the following program

	// In for statements give a line number for each expression in ()

	// b) Construct a table that indicates the value of all variables 
	// for each line in the program

	// c) Determine the program output using the table

	// example table:

	// line		i	x
	// 1		0	3.5
	// 2		1	5.5
	// 3		2	7.5
	// ...

	int i, j; // 1
	double x, y; // 2

	j = -1; // 3
	x = 0.0; // 4
	y = 2.5; // 5

	//   6    7   11
	for(i=0;i<=3;i++) {
		x += y; // 8
		j *= -1; // 9
		cout << j << "\t" << x << "\n"; // 10
	}

	cout << "\ni = " << i; // 12

	// line		i	j	x	y
	// 1		G	G	G	G
	// 2		G	G	G	G
	// 3		G	-1	G	G
	// 4		G	-1  0	G
	// 5		G	-1  0	2.5
	// 6		0	-1  0	2.5
	// 7		0	-1  0	2.5 -- check condition -- true
	// 8		0	-1  2.5	2.5
	// 9		0	1	2.5	2.5
	// 10		0	1	2.5	2.5
	// 11		1	1	2.5	2.5
	// 7		1	1	2.5	2.5 -- check condition -- true
	// 8		1	1	5.0	2.5
	// 9		1	-1	5.0	2.5
	// ...

	// output:
	// 1	2.5


	// Q2. Repeat Q1 for the following program

	int A[5]; 

	x = 1.5;
	i = 0; // 1

	//       2
	while( x < 35 ) { 
		i++; // 3
		x = 2*x + 1; // 4
		if( (x - i*i*i) < 0 ) { // 5
			break; // 6
		}
		if( x > 15 ) { // 7
			continue;  // 8
		}
		A[i] = 2*i; // 9
	} // continue from step 8 goes here if x > 15

	cout << "\nx = " << x; // 10
	cout << "\ni = " << i; // 11
	cout << "\nA[2] - A[0] = " << A[2] - A[0]; // 12 -- G

	// line		i	x	A[0]	A[1]	A[2]	A[3]	A[4]
	// 1		0	1.5	G		G		G		G		G
	// 2		0	1.5	G		G		G		G		G -- check
	// 4		1	4	G		G		G		G		G
	// 5		1	4	G		G		G		G		G -- check
	// 7		1	4	G		G		G		G		G -- check
	// 9		1	4	G		2		G		G		G 
	// 2		1	4	G		2		G		G		G -- check
	// 4		2	9	G		2		G		G		G
	// ...

	// output:
	//
	//
	// A[2] - A[0] = G

	cout << "\ndone.\n";
	getchar();

	return 0;
}
