
// Arrays exercises

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// Question #1
	// What is the output of the following program ?
	int i;
	double A[3], x;
	
	A[0] = 1.25;
	A[1] = 2.25;
	A[2] = 3.25;
	
	x = 0.0;
	for(i=0;i<3;i++) {
		x = x + A[i];
	}
	cout << "\nx = " << x << "\n";
	cout << A[3];
	
	// i=0  x = x + A[0] = 1.25
    // i=1  x = x + A[1] = 3.5
    // i=2  x = x + A[2] = 6.75
    
    // output:
    // x = 6.75
    // error out of range / unpredictable / garbage
    
	// Question #2
	// a) Write a program that calculates a table of t (1st column) 
	// and sin(t) (2nd column) over a range from t = 0.0 to 
	// t = 3.14159 with intervals of 0.1 seconds and stores the 
	// result in a 2D array called H.
	// eg
	// 0.0	sin(0.0)
	// 0.1	sin(0.1)
	// 0.2	...	
	//
	// b) Write a program that takes table H from part a) and finds
	// the first value of the table with sin(t) > 0.77, printing
	// the corresponding values of t and sin(t) to the screen.
    
    // a)
    
	double t,f;
    double H[31][2];
    int n=31;
    i = 0;
    for(t=0.0;t<3.14159;t=t+0.1) {
        f = sin(t);
        H[i][0] = t;
        H[i][1] = f;
        i++;
    }
    
    // b)
    for(i=0;i<31;i++) {
        cout << "\n" << H[i][0] << " " << H[i][1];
        if(H[i][1] > 0.77) {
            i = 31; // stop the loop
        }
    }
    
	// Question #3
	// Write a program that initialzes two 5 dimensional vectors v1 and v2
	// from the keyboard one element at a time and then calculates 
	// the dot product of the two vectors using appropriate for loops.
	// Print the dot product result to the screen.
	// note: the dot product is given by d = v1[1]*v2[1] + v1[2]*v2[2] + ...
	// note: use the arrays v1, v2 starting at index 1 (ie ignore the 0 element)
	
	double v1[6], v2[6], d;
    
    // input v1 from the keyboard
    cout << "\ninput v1[5] from the keyboard one element at a time\n";
    for(i=1;i<=5;i++) {
        cin >> v1[i];
    }
    
    // input v2 from the keyboard
    cout << "\ninput v2[5] from the keyboard one element at a time\n";
    for(i=1;i<=5;i++) {
        cin >> v2[i];
    }  
	
    d = 0.0; // summation variable
    for(i=1;i<=5;i++) {
        d = d + v1[i]*v2[i];
    }

    cout << "\ndot product = " << d;    
    
	cout << "\npress enter to continue.";	
	getchar();
		
	return 0;	
} 




