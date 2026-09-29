
// Hello World

// C++ comment -- comments are for documentation and not compiled

// comments are also useful for intentionally disabling parts of your program

#include <cstdio> // needed for getchar()

#include <iostream>
// an include statement basically allows you to use a built in C++ library, 
// eg iostream -- allows console input (keyboard) and output (screen).

// console I/O programs they are simple and useful

#include <cmath> // allows use of math functions such as sin(x)

// you can look up which C++ functions require which include files here:
// http://www.cplusplus.com/reference/ -- the include files are indicated 
// in the left window (don't use the old-style ones with the *.h extension)

// note: include files are called "header files"

// note: the include statements go at the top of your program 
// before anything else.

using namespace std; // don't worry about this since we don't change it

// all C++ programs have a "main" function.
// this is the starting out point for your program
int main() // declare a main function
{   // this initial brace indicates the beginning of the main function
 
	// this is where "your" program really begins //////

	// note: the program is executed "sequentially" one line at a time
	// until the end of the main function
	
    // cout is a function that prints out text to the screen, eg
    cout << "hello world"; // print out text in quotes to the screen

    // cout stands for console output

	// << is called the "insertion operator" -- this indicates
    // what text is to be sent to the console output
    
    // note: all program lines must end with a semi-colon ;
    
    // in general cout has the form
    cout << "\nyour text1\n" << "your text2\n" << "your text3\n"; // etc.

    // you can also use control characters (new line \n, tab \t, etc.)

    // note: C++ is "case sensitive"
    // for example, you can't write COUT instead of cout

	// it should also be noted that C++ compilers ignore 
	// "blank / white spaces" in your program (except for inside "").
	// the semicolon is sufficient to indicate when your program line ends
	// for example, the follow expression is equivalent to the line above
    cout  <<      "your text1\n"  <<    "your text2\n" 
					<< "your text3\n"; // etc.	
	
	// general programming advice //

	// learning by changing a program and predicting the output is very helpful.
	// this is analogous to performing mini programming experiments.
	// it provides a great way to help learn programming
	
	// note: programming is mostly an experimental process
    // -- not so theoretical -- at least in the beginning
    // --> you should be doing many experiments to learn programming
		
	cout << "\npress enter to continue.";	
	getchar(); 	// pause program until the enter / return key is pressed
	
	// the previous line is useful to prevent the program from terminating 
	// quickly when runing the program from the *.exe file
	
	// this is where your program really ends /////
	
    return 0; // don't worry about this for now
    
} // end brace -- indicates the end of your main function

