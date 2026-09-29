
// Variable Types additional exercises

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// Question #1
	// What is the output of the following program ?
    // note: just compile and run the program to get the solution
    // -- comment out Question #2 first though since it has errors
	
	double x=1.1, y=-1.7, z=5.5;
	char c1, c2, c3;
	
	c1 = '\t';
	c2 = '\n';
	c3 = 'c';
	
	cout << x << c1 << y << c2 << z << c3; 
    
	// Question #2

	// What is wrong with the following program ?
	// How would you correct it ?
    
	int a, b;
	
	b = 2147483647;
	c = b + 10;
	
	cout << "c = " << c;
	cout << "a = " << a;
 
	// Question #3
	// Write a program that reads two doubles u and v from the keyboard 
	// and then prints the sum of the two variables to the screen
     
	cout << "\npress enter to continue.";	
	getchar();
		
	return 0;	
} 
