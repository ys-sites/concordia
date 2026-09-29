
#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

// Question #5

// Write a program that calculates f = sin(t) in a for loop for 
// t=0, 0.1, 0.2, …, 1.0e7 and stops the loop when 0.9 < f < 0.93 
// (use just one if statement).  Print out t and f when this occurs.

int main()
{
    double f, t;
    
    for(t=0.0;t<1.0e7+0.1;t+=0.1) {
        f = sin(t);
        cout << t << "\t" << f << "\n"; // for testing
        if( (f > 0.9) && (f < 0.93) ) break; // use AND / && operator
    }
    
    cout << "\nt = " << t;
    cout << "\nf = " << f;
    
    cout << "\nprogram done.  press enter to continue.";
    getchar();
    
	return 0;
}
