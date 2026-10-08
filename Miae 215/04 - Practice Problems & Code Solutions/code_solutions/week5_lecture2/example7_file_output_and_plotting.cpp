
#include <iostream>
#include <fstream> // needed for file output (step #0)
#include <cmath>
#include <cstdio>
#include <cstdlib>

using namespace std;

// Q1. 

// Write a program that calculates and outputs to a file 
// a table representing the sin(t) functon for t = 0 to 2*PI 
// in 0.01 increments of t.  For example,

// t , sin(t)
// 0.0 , sin(0.0)
// 0.01	, sin(0.01)
// 0.02	, sin(0.02)
// ...
// 2*PI	, sin(2*PI)

// note the comma between the columns makes it easier
// for a spreadsheet program to open and plot
// -- such files should use the *.csv extension
// (comma separated value)

int main() 
{	
	double t, dt = 0.01, PI = 3.14159;

	// for file output there are 5 steps that are always
	// the same so you can memorize / put them on a sheet
	
	// step #1: declare file ouput variable / stream
	// ofstream is special type of file output variable
	// analogous to cout but for files
	// -- you can use any variable name instead of fout (eg my_file)
	// -- you can declare more than one output variable (eg fout1, fout2)
	ofstream fout;
	
	// step #2: open the file
	// this "tries" to open a text file with the name of the file
	// given in "" -- you can use any extension you want
	// -- in this case we use csv so spreadsheets can recognize it
	// as a comma separated value file
	// -- a text file is a file that can be opened and read
	// with text programs such as notepad++, visual studio, etc.
	// -- you can open more than one output file at the same time
	fout.open("output.csv");
	
	// step #3: check for file opening errors
	// * the main type of error for opening an output file is if
	// the file is already open in another program (eg a spreadsheet)
	// - the file doesn't have to exist
	// - if the file doesn't exist open will make a new file
	// - if the file exists open will overwrite the file
	if( !fout ) {
		cout << "\nfile open error";
		exit(1);
		// if we can't open the file there is no point
		// continuing the program -- stop immediately
	}

	// step #4: use fout just like cout
	// -- instead of printing to the screen the output
	// will appear in the file you opened
	
	// a table representing the sin(t) functon for t = 0 to 2*PI 
	// in 0.01 increments of t.  For example,

	// t , sin(t)
	// 0.0 , sin(0.0)
//	cout << "t , sin(t)\n";
	fout << "t , sin(t)\n";
	for(t=0;t<2*PI;t+=dt) {
//		cout << t << " , " << sin(t) << "\n";
		fout << t << " , " << sin(t) << "\n";		
	}
	
	// step #5: close the file
	// -- if you don't close your file and your program
	// terminates abruptly then you might lose data
	// -- once you have closed fout you can use it to
	// open another file or the same file again if you want to
	fout.close();

	cout << "\ndone.\n";
	getchar();

	return 0;
}
