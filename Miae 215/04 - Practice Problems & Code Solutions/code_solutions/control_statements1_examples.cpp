
// control statement examples

#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

int main()
{
	// control statments ////////////////////

	// if statement: if the test condition in () is true then the 
	// codeblock {} is executed, eg.

	int i = 1, k = 2;

	if( k > i ) { 
		cout << "\nk is greater than i";
	}

	// the test condition () is evaluated with the current value of 
	// the variables at that line in the program -- results can change
	// depending on the line in the program, eg

	i = 3;
	if( k > i ) { 
		cout << "\nk is greater than i";
	}

	// {} isn't required for codeblocks with only one program line, eg
	if (i > 0) cout << "\ni is greater than zero";

	// test conditions ///////////////////////

	double x;

	// greater than, less than: >, <
	// greater than or equal, less than or equal: >=, <=
	// equal, not equal: ==, !=

	i = 1;
	k = 2;

	if( i >= k ) cout << "\ni is greater than or equal to k";

	if( i == k ) cout << "\ni is equal to k";

	if( i != k ) cout << "\ni is not equal to k";

	// equality conditions should normally NOT be used with 
	// float / double variables -- round-off error makes 
	// their execution unlikely, eg
	
	// here x is essentially zero for engineering purposes
	x = 1.0e-30; 

	// but this if statement is executed only if 
	// x = 0.00000000000000000e0 (all significant digits are zero)

	// this if condition is unlikely to be true 
	// -- ie almost never executes
	if( x == 0.0 ) { 
		cout << "\nx is equal to zero for all significant digits";
	}

	// the following approach should be used instead

	double eps = 1.0e-9; // a small positive constant epsilon

	// eps is what you consider small for engineering purposes.
	// the required value of eps depends on the application.

	if( abs(x) < eps ) cout << "\nx is approximately equal to zero";

	// to check for x == 5.5 for example, you can write

	if( abs(x-5.5) < eps ) cout << "\nx is approximately equal to 5.5";

	// The <= and >= operators should also normally be avoided
	// for float / double variables 

	// the approach above can be modified for this case, eg

	x = 5.50000000001;

	// check for x <= 5.5
	if( ( x < 5.5 ) || ( abs(x-5.5) < eps ) ) { 
		cout << "\nx is approximately less than or equal to 5.5";
	}

	// where || is the OR operator (more on that below)

	// logical operators ///////////

	// comparison operators can be combined using logical operators 
	// for more complex test condtions in if statements, eg

	i = 1;
	k = 2;

	if( (i > k) && (k <= 3) ) {
		cout << "\n(i is greater than k) AND (k is less than or equal to 3)";
	}

	// The following logical operators are available in C++:

	// AND: &&
	// - both conditions have to be true for the result to be true

	// OR: ||
	// - only one of the conditions have to true for the result 
	// to be true

	// NOT: !
	// - the condition has to be false for the result to be true, eg
	if( !(i > k) ) cout << "\ni > k is false";

	// multiple ANDs and ORs are possible in an expression, eg

	if( (i > k) && (k <= 3) && (i < 10) ) {
		cout << "\n(i > k), (k <= 3), and (i < 10) are all true";
	}

	// if-else statement ///////////////

	// if the test condition in () is true then the 1st codeblock 
	// is executed, otherwise the 2nd codeblock is executed, eg.

	i = 1; 
	k = 2;

	if( k > i ) { // 1st code block
		cout << "\nk is greater than i";
	} else { // 2nd code block
		cout << "\nit's not true that k is greater than i";
	}	

	// the else statement is like a default option that occurs when
	// the if statement is not true

	// an if-else statement is like a "fork in the road" since the 
	// program must follow one of the two code paths / blocks

	// in practice, if and if-else statements are good for decision 
	// making since normally at least one decision has to be made
	// (ie one code path), eg

	double robot_input;

	// here the robot input is entered from the keyboard, but robot 
	// input is usually read from a sensor (using an Arduino, etc.)
	cout << "\nenter robot input (distance from destination) ? ";
	cin >> robot_input;

	if ( robot_input > 0.0 ) {
		// robot output is usually sent to a motor using Arduino, etc.
		cout << "\nmove robot forward";
	} else { // otherwise, robot is at destination
		cout << "\nstop robot";
	}

	cout << "\npress enter to continue.";	
	getchar();

	// need 2nd getchar() -- robot input above gives an extra enter
	getchar(); 

	return 0;
} 

