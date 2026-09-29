
// Expressions and Operators additional exercises

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// Question #1
	// What is the output of the following program ?
    // note: just compile and run the program to get the solution 
	
	int q=3;
	double A,r,d,e,y;
    double r1 = 1.0e-16, r2 = 1.0e-15, r3, r4;
	
	r3 = 1.0 - (1.0 - 1.0e-15);
	r4 = 1.0 - (1.0 - 1.0e-20);	
	r = 3;
	A = 1/q*r*r;
	y = 1.0/A;
	e = r*y;
    d = r1 - r2;

	cout << q << A << "\n" << y << "\n\t" << d 
		<< "\n" << r3 << "\t" << r4 << "\n" << e;
	
	// Question #2
    // Indicate the variable values for each line of the program in a table.
	// What is the output of the following program ?
	
	double u=0.0,v=2.0,w=-1.0;
	
	u = u + 3; // line 1
	w = w / 2; // line 2
	v = v * u + w; // line 3
	v = 2*v; // line 4
	w = -w*abs(-w); // line 5
	
    cout << "\nQ2 output = \n";
	cout << u << "\n" << v << "\n" << w << "\n";

	cout << "\npress enter to continue.";	
	getchar(); 	// pause program until the enter / return key is pressed
		
	return 0;	
} 
