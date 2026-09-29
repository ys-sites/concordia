
// Expressions and Operators exercises

#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// Question #1
	// What is the output of the following program ?
	
	int q;
	double x,y,z=0;
    double d,r1 = 1.234567890123456, r2 = 1.234567890123455;
	
	q = 7 - (7/3)*3; // 1
	x = 1/3*10.0; // 0 (common pitfall)
	y = -1.0/z; // -Inf
    d = r1 - r2; // 1.0e-15
	
	cout << q << x << "\n" << y << "\n" << d << "\n";
	
	// Answer
    // 10
    // -inf
    // 1.0e-15
    //
	
	// Question #2
    // Indicate the variable values for each line of the program in a table.
	// What is the output of the following program ?
	
	double u=0.0,v=1.1,w=1.0;
	
    // line     u   v   w
    // 0        0   1.1 1.0
    // 1        -1  ... ...
    // 2        ... ... 2.0
    // 3        ... 2.1 ...    
    // 4        -1  2.1 8.1
    
	u--; // line 1
	w++; // line 2
	v = v - u; // line 3 (1.1 - (-1))
	w = w*w + v + w; // line 4 (2*2 + 2.1 + 2)
	
	cout << u << "\n" << v << "\n" << w << "\n";

	// Answer
    // -1
    // 2.1
    // 8.1
    
	// Question #3
	// Indicate the errors in the following program and correct them
	
	double a=-2,b=2,c=3; // OK, note: I picked an unlucky value of a so I changed it
	
	b = b*b + 1; // OK
//	2*a = a + 1; // error: can't have an expression on the left hand side of =
    a = a/2 + 1.0/2;
//	c = log(a); // error the argument of log must be > 0
    c = log(abs(a));  

	cout << c*b; // OK

	cout << "\npress enter to continue.";	
	getchar(); 	// pause program until the enter / return key is pressed
		
	return 0;	
} 

