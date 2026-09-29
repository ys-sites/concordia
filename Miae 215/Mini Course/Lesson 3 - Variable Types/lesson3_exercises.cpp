
// Variable Types exercises

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// Question #1
	// What is the output of the following program ?
	
	int x=1, y=-1, z=5;
	char c1, c2, c3;
	
	c1 = '\n';
	c2 = ' ';
	c3 = 'c';
	
	cout << x << c1 << y << c2 << z << c3; 
    
	// Question #2
	// What is wrong with the following program ?
	// How would you correct it ?
    
	double a, b, c, d
	
	b = 1.0e308
	c = 2*b
	d = a + 77.7
	
	cout << "\nc = " << c
	cout << "\nd = " << d
	
	// Question #3
	// Write a program that individually reads in an integer int1, 
	// a double double1, and a character char1 from the keyboard
	// and prints the variables to the screen on one line in seperate columns
	
	cout << "\npress enter to continue.";	
	getchar();
		
	return 0;	
} 
