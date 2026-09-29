
// Control Statements

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	int i,j;
	double x=1.1;
		
	// control statements //
	
	// control statements allow various parts of the program to be executed 
	// under certain conditions
	
	// only basic control statements are outlined in this lesson,
	// but they can accomplish most common programming tasks	
		
	// conditional statements //

	// The "if" statement is the most common conditional statement
	// it allows a section of the program to execute when a certain 
	// logical test condition is true, eg
	i = 1;
	j = 2;
	if(j > i) {
		cout << "\nj is greater than i";
	}

	// the "if" keyword is followed by a logical condition
	// in parenthesis which is then followed by a set of closed braces.
	
	// the section of the program in the closed braces is executed
	// only when the logical condition is true at the current line 
	// in the program.
	
	// change the values of i and j
	i = 2;
	j = 1;
	
	// the following example does not print out since it's currently false.
	// this is another illustration of sequential program operation and memory	
	if(j > i) {
		cout << "\nj is greater than i";
	}
	
	// the following examples illustrate the most common logical conditions 
	// used with if statements
	i = 1;
	j = 1;
	
	// testing for equality (note == is used and not assignment =)
	if(i == j) {
		cout << "\ni is equal to j";
	}	
	
	// testing for inequality
	if(i != j) {
		cout << "\ni is not equal to j";
	}
		
	// greater than or equal
	if(i >= j) {
		cout << "\ni is greater than or equal to j";
	}
	
	// less than or equal
	if(i <= j) {
		cout << "\ni is less than or equal to j";
	}	
	
	// *note*: equality conditions should not be used with doubles because 
	// round off error can produce unpredictable results, eg
	// if(x == 0.0) {...}
	// round off error in x makes it unlikley this condition will ever be true
	// to all 16 significant figures
	// note: when you write 0.0 in C++ it means 0.000000000000000
	
    cout << "\nx = " << x;
    
	// strict inequality conditions are OK for doubles such as
	if(x > 0.0) {
		cout << "\nx > 0.0";
	}
	
	// debuggers //
	
	// even if your program compiles without errors there could still
	// be errors in how the program operates
	
	// these errors are called "run-time" errors because they
	// occur when your program is running
	
	// a "debugger" is a program that helps you find the run-time errors
	
	// debuggers are also very useful for understanding program operation
	// and learning C++, especially control statements such as loops
	
	// a debugger allows you to basically "animate" your program and run it
	// one step at a time while you observe key variables	
	
	// loops //
	
	// a loop statement is used to perform a section of the program repeatedly.
	// The "for" statement is the most common way to implement a loop, eg.
	for(i=0;i<10;i++) { 
        // beginning of the loop
		cout << "\ni = " << i;
	} // end of the for loop, the index variable will be updated (eg i++)
	
	// it can be seen that the "for" keyword is followed by parenthesis
	// which includes three expressions.  braces then follow which indicate
	// the part of the program to be repeated.
	
	// the first expression initializes a loop index variable.
	
	// the second expression is a logical condition that indicates when the
	// loop is to be repeated.  the loop continues to repeat as long as
	// the condition is true.
	
	// the third expression is an expression that indicates how the 
	// index variable changes (normally an incremental operator) 
	// after each loop cycle.
	
    cout << "\n";
    
	// for loop example
    // make a loop that prints out 2,4,6,8
    for(i=2;i<=8;i=i+2) {
        cout << "\ni = " << i;
    }
	
	cout << "\npress enter to continue.";	
	getchar();
	
	return 0;
} 

