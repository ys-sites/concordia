
#include <iostream>
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main() 
{ 
	int i;

	// while loops ////////////////////

	// a "while" loop executes a codeblock {} as long as the
	// test condition in () is true, eg

	i = 1; // make sure to initialize any variables used in the while loop
	// for while loops index variables have to be initialized manually
	// unlike for loops
	//       1,3,5, ... until it is no longer true
	while( i < 10 ) { // 2,4,6
		cout << "\ni = " << i;
		i++;
	} 
	
	// output:
	// i = 1
	// i = 2
	// ...
	// i = 9
	// (done)
	
	// note: i=10 here out of the loop
/*		
	// alternative to the above using a for loop
	// -> this does exactly the same thing
	for(i=1;i<10;i++) {
		cout << "\ni = " << i;
	}
*/
	// () is first checked, if true then {} is executed.
	// the loop stops if () is no longer true.

	// note: the test condition () in while, for, if, etc. can be 
	// any expression that results in true (non-zero) or false (zero)

	// therefore, the test condition can depend on keyboard input,
	// sensor input from an Arduino, functions, etc.

	// note: while and for loop have exactly the same capabilities
	// -- they just look different
	// -- in some cases while is easier, in some cases for is easier

	// * for loops are often used when you know the number of loop 
	// iterations n, eg for(i=0;i<n;i++) cout << i;
	// -- if you have all the for loop information then use it

	// * while loops are often used when n is not known, 
	// eg 
	
	double x;
	
	x = 1.0;
	while(x > 0) {
		// you don't know x ahead of time so use a while loop
		cout << "\ninput x ? ";
		cin >> x; 
		cout << "\nx = " << x;
	}
	
	cout << "\npress a enter to continue...";
	getchar();

	// infinite loops ///////////////////////////

	// a while loop or for loop with a test condition that is 
	// always true will execute forever

/*
	// such loops are known as "infinite" loops, eg
	i = 0;
	while( 1 ) {
//	while( true ) {		
//	while( 1 > 0 ) {		
		cout << "\ni = " << i;
		i++;
	}
*/
	// output:
	// i = 0
	// i = 1
	// i = 2
	// ...
	// ...
	// it will keep on going forever
/*	
	// for loop alternative --> yuk
	i = 0;
	for(;;) {		
		cout << "\ni = " << i;
		i++;
	}		
*/	
	// infinite loops are used when a program must do something 
	// indefinitely (eg an unknown quantity of user input, 
	// robot control loop, etc.)

	// break statement ///////////////////////

	// a break statement is used to terminate a loop in progress
	// -- very useful for stopping infinite loops, eg

	cout << "\nillustration of break";

	char ch;
	i = 0;
	while( 1 ) { 
		cout << "\ni = " << i;
		i++;
		if( i > 50 ) break; // terminate loop if i > 50
		
		cout << "\ninput a char ch (x to stop) ? ";
		cin >> ch;
		if( ch == 'x' ) break;
	}

	// output: (assume not inputing 'x')
	// i = 0
	// i = 1
	// ...
	// i = 50
	
	// i=51 outside the loop
	
	// NOTE: break only breaks out of the current loop
	// -- if you are inside more than one loop you will
	// need a break for each loop you want to get out of
	
	// if we input 'x' then it stops immediately at that value of i
	
	cout << "\npress enter to continue\n";
	getchar();

	// continue statement //////////////////////////

	// a continue statement is used to skip the remaining lines 
	// in a loop.  however, the loop continues to execute, eg

	for(i=1;i<=10;i++) {

		cout << "\ni = " << i;

		if( i > 5 ) continue; 
		// skip to the end/beginning of the loop -- everything
		// after the continue statement -- eg cout << "loop"
		// in this example

		// all lines below continue including this line are skipped
        cout << " loop";

	} // this is where continue "skips" to, the loop then continues

	// output:
	// i = 1 loop
	// i = 2 loop
	// ...
	// i = 5 loop
	// i = 6
	// i = 7
	// ...
	// i = 10
	
	// continue statements are useful in some situations,
	// but are not as common as break statements

	cout << "\ndone.\n";
	getchar();

	return 0;
}
