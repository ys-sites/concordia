
// Variable Types

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath>

using namespace std;

int main()
{
	// variable types //
	
	// you must "declare" a variable (ie indicate its type and name) 
	// before it's used.
	
	// variables are normally declared at the beginning of the program 
	// so it's easier to understand, but it's not strictly required
	
    // *note*: you can think of a variable as a mailbox (or memory) you place 
	// data into. the variable (memory) does not change until modified by 
	// the program (ie you put something new in the mailbox)
	
	// integer variable type //
	
	// includes negative, positive, and zero integers
    
    int i;  // [variable type] [variable name]
	
    i = 7; // set / initialize i to 7
    cout << i; // print out the value of i
	
	// note you can reuse / recycle variables, eg
	i = 11;
    cout << "\ni is equal to " << i; // print out i and text ("i = ") together
	
	// a variable must be "initialized" (ie initially set) before it's used, eg
	int j;
	
    cout << "\nj is equal to " << j; // error j is undefined / unpredictable
	
	// you can initally set variables to a constant when declared, eg
	int k = 11;
	
    cout << "\nk is equal to " << k;
	
	// all variables have a maximum range of numbers they can store
	
	// max range of int on PC computers is +/- 2147483647
	i = 2147483647; 
    cout << "\ni = " << i;
	
    // double variable type //
	
    // doubles represent real numbers, normally 16 significant figures
	
    // 16 is usually more than enough for solving engineering equations
	// without significant round-off errors
    double x;

    x = 1.234567890123456; // setting all 16 significant figures
    cout << "\nx = " << x;

	// the maximum range of a double is +/- 1.7 * 10^308
    x = 1.7e308;
    cout << "\nx = " << x;
    
    // the char variable type is used to store text characters.
    // a char can hold "one" character
    char ch;
    
    ch = 'q'; // use single quotes to indicate a single character constant
    cout << "\nch = " << ch;
    
    // variable names //
	
    // a name can be any sequence of alpha-numeric characters and underscores.
    // however, you can't start a variable with a number
    int My_integer_1, _myint1, z, Z; // valid variable names

    // how to input / initialize / set variables from the keyboard //
	
    // cin can be used to get input from the keyboard
    
    // cin stands for console input
	
    cout << "\ninput z ? "; // prompt for keyboard input for z
    
    // note the insertion operator goes the opposite direction for input
	cin >> z; // read z from the keyboard
    
    // cin wait until the enter key is pressed
	
    cout << "\nz = " << z;
	
    // don't input data that is not compatible with the cin variable
	// eg don't input a character for z in the above example.
	
	cout << "\npress enter to continue.";	
	getchar();
		
	return 0;	
} 

