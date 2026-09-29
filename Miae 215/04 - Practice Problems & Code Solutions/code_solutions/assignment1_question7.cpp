
#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

// Question #7

// Write a program that approximately determines the max value of the function 

// f = sin(x*x - 1.0) * (x - 3.0) + cos(x)  

// over the range 0 <= x <= 10*3.14159.  This can be accomplished by evaluating 
// the function from 0 to 10*3.14159 at intervals of dx = 0.01 in a for loop 
// (hint x += dx).  For each loop iteration, if the function value f is greater 
// than the variable m then set m to f.  This process is repeated until the end 
// of the loop (i.e. when x > 10*3.14159).  The final value of m is equal to the 
// maximum.  Print this value to the screen.  Set the initial value of m before 
// entering the for loop to f(0).  Note this approximate maximization approach 
// outlined above is essentially testing all the points at dx intervals in order 
// to find out which one has the largest f.

int main()
{
    double x,dx,f,x1,x2,max,x_max;
    
    dx = 0.01;
    x1 = 0.0;
    x2 = 10*3.14159;
    
    // pick a bad max value or max = f(x1) as initial (bigger and better) maximum
    max = -1.0e10;
    x_max = -7.0; // x value for the maximum
    
    // this helps to check the answer
    cout << scientific;
    cout.precision(10);
    
    for(x = x1; x < x2; x +=dx) {
    
//        f = sin(x*x - 1.0) * (x - 3.0) + cos(x);
 
        f = -(x-7.777777)*(x-7.777777) + 2.777; 
        // always check this type of program with a known equation
        // x = 7.777777, max = 2.777
    
        // look for a "bigger and better deal"
        if(f > max) {
            max = f;
            x_max = x; // record maximum x value
        }
        
    } // end for x
    
    cout << "\nmax = " << max;
    cout << "\nx = " << x_max;
    
    cout << "\n\nprogram done.\npress enter to continue.";
    getchar();
    
	return 0;
}
