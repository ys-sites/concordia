
// Expressions and Operators exercises

#include <cstdio> // needed for getchar()
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
	
	q = 7 - (7/3)*3;
	x = 1/3*10.0;
	y = -1.0/z;
    d = r1 - r2;
	
	cout << q << x << "\n" << y << "\n" << d << "\n";
	
	// Question #2
    // Indicate the variable values for each line of the program in a table.
	// What is the output of the following program ?
	
	double u=0.0,v=1.1,w=1.0;
	
	u--; // line 1
	w++; // line 2
	v = v - u; // line 3
	w = w*w + v + w; // line 4
	
	cout << u << "\n" << v << "\n" << w << "\n";
    
	// Question #3
	// Indicate the errors in the following program and correct them
	
	double a=-2,b=2,c=3; // note: I picked an unlucky value of a so I changed it
	
	b = b*b + 1;
	2*a = a + 1;
	c = log(a); 

	cout << c*b;

	cout << "\npress enter to continue.";	
	getchar(); 	// pause program until the enter / return key is pressed
		
	return 0;	
} 

