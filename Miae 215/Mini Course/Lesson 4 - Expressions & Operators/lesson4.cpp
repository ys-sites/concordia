
// Expressions and Operators

#include <cstdio> // needed for getchar()
#include <iostream>
#include <cmath> // include header file needed for math functions

using namespace std;

int main()
{
	int i,j; // declare integer variables i, j
	double x,y,z; // declare double variables x, y, z
		
    // an "operator" performs some type of operation 
    // on some variables (operands)
	
	// an "expression" is a combination of operators and operands/variables
	// that performs some task in the program
	
	// the most important basic C++ operators will be discussed in this program,
	// but there are many others that can be studied at a later time
    
	// types of operators //

    // = is the "assignment" operator	
    // this sets the variable on the left hand side of the operator
	// to the value of the expression on the right hand side.
	
    i = 7; // set variable i to 7, initialize i to 7
    cout << "\ni = " << i;
   
   	// after a variable has been initially assigned the variable
	// is said to be "initialized"
   
	// note that variables can be re-assigned (ie recycled), for example
    i = 8; 
    cout << "\ni = " << i;
    	
	// the new value of i will be remembered (ie stored in memory) until 
	// it's changed in a line later on in the program
		
    // the basic arithmetic operators are:
    // + addition
    // - subtraction
    // * multiplication
    // / division
	
	// note: arithmetic operators are executed before the assignment operator
	// (ie they have precidence)
	
	// * and / are performed before + and - (ie they have precidence) as 
	// expected from left to right in an expression
    
	// examples:

    i = 7 + 3;
    cout << "\ni = 7 + 3 = " << i;
 
    i = 7 - 3;
    cout << "\ni = 7 - 3 = " << i;
   
    i = 7 * 3;
    cout << "\ni = 7 * 3 = " << i;
    
    i = 7 / 3;
    cout << "\ni = 7 / 3 = " << i; // what is the output ?
  
    // note: be careful for divide by zero with the division operator.
    // this results in "exception" values such as NaN (not a number) or Inf.
//	i = 7 / 0;
	cout << "\ni = " << i; // what is the output ?
  
	// arithmetic operators for doubles
	x = 7.0 + 3.0;
    cout << "\nx = 7.0 + 3.0 = " << x;
 
    x = 7.0 - 3.0;
    cout << "\nx = 7.0 - 3.0 = " << x;
   
    x = 7.0 * 3.0;
    cout << "\nx = 7.0 * 3.0 = " << x;
    
    x = 7.0 / 3.0;
    cout << "\nx = 7.0 / 3.0 = " << x; // what is the output ?
 
	// when mixing variable types in an sub-expression (ie an operator and
	// one or two operands) the operands are converted to the more general 
	// operand type before the operator is applied, eg
	
	x = 3 * 3.5 * 7;
	// 3 is converted to a double before multiplication with 3.5
	// 7 is then converted before multiplying with the result of 3*3.5
    cout << "\nx = 3 * 3.5 * 7 = " << x; // what is the output ?	
	
	y = 3; // 3 is converted to 3.0 (a double) before = is applied to change y
 	
    cout << "\ny = " << y;
    
	// sequential logic and memory //
 
	// you can use variables on both sides of an expression such as
    j = i*i; // place the current value of i*i into variable j
    cout << "\nj = " << j;
  	
	// the same variable can also be used on both sides of an assignment, eg
    x = 3;
    x = 2*x + 1; 
    cout << "\nx = " << x; // what is the output ?
	
    // note this is not a simultaneous math equation, so the answer 
	// is NOT the following: x = 2*x + 1 -> -x = 1 -> x = -1
   
    // the difference is because a program is evaluated "sequentially" 
	// (ie one line at a time) with each line using the current variable values
        
	// increment and decrement operators //
    
    // "incrementing" a variable adds some value to a variable, eg
    x = x + 1;
    cout << "\nx = x + 1 -> x = " << x; // what is the output ?	
	
    // the increment operator (++) is the same as x = x + 1
    x++;  // x = x + 1
    cout << "\nx = " << x;  
 
    // decrement operator (--)
    x--; // x = x - 1
    cout << "\nx = " << x;
    
    // math functions //
	
	// standard math functions are available in C++ if you include
	// the <cmath> header file at the top of the program, eg.
	
	x = 3.14159/4; // *note*: trig functions are in rads for C++
	
    cout << "\nx = " << x;
    
	y = sin(x);
    cout << "\nsin(x) = " << y;	
	
	y = cos(x);
    cout << "\ncos(x) = " << y;	
	
	y = tan(x);
    cout << "\ntan(x) = " << y;	
	
	y = exp(x);
    cout << "\nexp(x) = " << y;
	
	y = log(x); // natural log (use log10 for base 10)
    cout << "\nlog(x) = " << y;
	
	y = atan(x); // inverse tan
    cout << "\natan(x) = " << y;		
	
	y = abs(-x);
    cout << "\nabs(-x) = " << y; // absolute value of -x
	
	z = pow(x,y); // x to the power of y, ie z = x^y
    cout << "\npow(x,y) = " << z;
	
	cout << "\npress enter to continue.";	
	getchar(); 	// pause program until the enter / return key is pressed
		
	return 0;	
} 

