
#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

// Question #6

// Write a program that inputs a number x from the keyboard.  It then divides 
// x by two until x < 1.0e-7 and sin(1.0/x) > 0.9.  Print out the final values 
// of x and sin(1.0/x) in scientific notation with a precision of 10 digits.  
// Hint: use a for loop with a large final value for i.  You could also make 
// a loop involving x.

int main()
{
    int i;
    double x;
    
    cout << "\ninput x ? ";
    cin >> x;
    
    for(i=0;i<1000000;i++) {
        cout << x << "\t" << sin(1.0/x) << "\n"; // for testing
        if( (x < 1.0e-7) && (sin(1.0/x) > 0.9) ) break;
        x = x / 2.0; // can also use x /= 2.0;
    }
    
    cout << scientific;
    cout.precision(10);
    
    cout << "\nx = " << x;
    cout << "\nsin(1.0/x) = " << sin(1.0/x);
    
    cout << "\n\nprogram done.\npress enter to continue.";
    getchar();
    
	return 0;
}
