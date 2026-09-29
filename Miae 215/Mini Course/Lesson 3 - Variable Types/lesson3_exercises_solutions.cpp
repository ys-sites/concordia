
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
	
	// Answer
	// 1
    // -1 5c
    
	// Question #2
	// What is wrong with the following program ?
	// How would you correct it ?
    
	// Answer
    
	double a, b, c, d; // missing semicolons
	
	b = 1.0e308; // wrong scientific notation
//	c = 2*b; // out of range (recall 1.7e308 is the largest double value)
    c = 1.7*b; // bring it in range
    a = 0.0; // quick fix, alternatively cin >> a;
	d = a + 77.7; // a is not defined/initialized
	
	cout << "\nc = " << c;
	cout << "\nd = " << d;
	
	// Question #3
	// Write a program that individually reads in an integer int1, 
	// a double double1, and a character char1 from the keyboard
	// and prints the variables to the screen on one line in seperate columns

	// Answer
	
    int int1;
    double double1;
    char char1;

	cout << "\ninput int1 ? ";
    cin >> int1;
    
   	cout << "\ninput double1 ? ";
    cin >> double1; 
    
  	cout << "\ninput char1 ? ";
    cin >> char1;
    
	cout << int1 << "\t" << double1 << "\t" << char1;
	
	cout << "\npress enter to continue.";	
	getchar();
		
	return 0;	
} 
