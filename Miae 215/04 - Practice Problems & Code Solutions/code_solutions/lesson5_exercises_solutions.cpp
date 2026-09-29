
// Control Statements exercises

#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// Question #1
	// What is the output of the following program ?
	
	int i;  double x=1.1, y=0.25, z=-3.0;
	if( (x/y) > 4 ) { // true
		z = abs(z); // z = 3
		z = z*z; // z = 9
		x = -x; // x = -1.1
	}
	if( (x/y) > 4 ) x = -x; // false
    cout << x << "\t" << y << "\t" << z << "\n";
    
	for(i=10;i>-1;i--) cout << "\n" << i;
	cout << "\ni = " << i << "\n";
	
	for(i=-1;i<=5;i=i+2) {
		cout << "\n" << i;
		if(i==3) i = 7; // makes the logical condition false
	}

    // Answer
    // -1.1     0.25    9
	// 10
    // 9
    // ...
    // 0
    // i = -1
    // -1
    // 1
    // 3
    
	// Question #2
	// Write a program that prints a table of t (1st column) and 
	// sin(t) (2nd column) to the screen over a range from 
	// t = 0.0 to t = 3.14159 in 100 equal increments
	// (ie make a table with 100 entries).
	// eg
	// t		sin(t)
	// 0.0		0.0
	// dt		...
	// 2*dt		...	
	// ...		...
	// 3.14159	...	
    double t, f, dt;
    dt = 3.14159/99;
    cout << "\n\nt" << " " << "sin(t)\n";
	for(i=0;i<100;i++) {
        t = dt*i;
        f = sin(t);
        cout << t << " " << f << "\n";
    }

	// Question #3
	// Write a program that prints a table of t (1st column) and 
	// sin(t) (2nd column) to the screen over a range from 
	// t = 0.0 to t = 3.14159 with intervals of 0.1 seconds
	// (ie the t column should increase in increments of 0.1).
	// eg
	// t	sin(t)
	// 0.0	0.0
	// 0.1	...
	// 0.2	...
	// hint: make your for loop in terms of t (ie t is your index variable)
    cout << "\n\nt" << " " << "sin(t)\n";    
    for(t=0.0;t<3.14159;t=t+0.1) {
        f = sin(t);
        cout << t << " " << f << "\n";       
    }
    
	// Question #4
	// Write a program that reads the variable u 10 times from the keyboard 
	// using a for loop. It prints the result exp(-u) to the screen each time
	// and if the result is less than 1e-7 the loop terminates
	// by appropriately changing the loop index.
    double u;
	for(i=0;i<10;i++) {
        cout << "\ninput u ? ";
        cin >> u;
        f = exp(-u);
        cout << "\nexp(-u) = " << f;
        if(f < 1.0e-7) i=10;
    }
    
    
    
	
    
	cout << "\npress enter to continue.";	
	getchar();
	
	return 0;
} 