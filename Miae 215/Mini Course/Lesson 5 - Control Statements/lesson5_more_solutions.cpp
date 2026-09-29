
// Control Statements additional exercises

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// Question #1
	// What is the output of the following program ?
    // note: just compile and run the program to get the solution
	
	int i, x=1, y=2, z=3;
	if( (z/2) > 1 ) {
		z = -z;
		z++;
		x = x + z;
	}
	if( x >= 1 ) x = -x;
    cout << x << " " << y << "\n" << z << "\n";
    
	for(i=5;i>=-1;i--) cout << "\n" << i;
	cout << "\ni = " << i << "\n";
	
	for(i=1;i<=25;i=i*2) {
		cout << "\n" << i;
		if(i>=16) i = 24;
	}
    
	// Question #2
	// Use the debugger (please refer to lesson #5 video at time 12:30 for usage)
	// to count the number of times variables k1, k2, and k3 are incremented by 
	// the following program
	int j,k1=0,k2=0,k3;
    k3 = 0; // put the break point here for the debugger
	for(i=1;i<=2;i++) { 
		k1 = k1 + 1;
		k3 = k3 + 1;
		for(j=1;j<=3;j++) {
			k2 = k2 + 1;
			k3 = k3 + 1;
		}
	}
     
	// Question #3
	// Write a program that reads a double u and an integer q from the keyboard.
	// it then prints out sin(u) if q = 1
	// it prints out cos(u) if q = 2
	// it prints out exp(u) if q = 3
	// it prints out "error" if q is none of the above
	
    double u;
    int q;
    
    cout << "\ninput u ? ";
    cin >> u;
  
    cout << "\ninput q ? ";
    cin >> q;  
    
    if(q == 1) cout << "\n" << sin(u);
    if(q == 2) cout << "\n" << cos(u);	
    if(q == 3) cout << "\n" << exp(u);
    if(q < 1) cout << "\nq is none of the above";
    if(q > 3) cout << "\nq is none of the above";
  
	// Question #4
	// write a program that calculates f = sin(0.7*p*p*p) for p = 1,2,3,...,100
	// and counts the number of times that f is above 0.7, printing the
	// result to the screen.  If f > 0.98 then print out "done" with the value of p
    // and end the program.
	int p,count=0;
    double f;
    
    for(p=1;p<=100;p++) {
        f = sin(0.7*p*p*p);
        if(f > 0.7) count++;
        if(f > 0.98) {
            cout << "\ndone, p = " << p;
            p = 100;
        }
    }
	cout << "\ncount = " << count;
    
	cout << "\npress enter to continue.";	
	getchar();
	
	return 0;
} 