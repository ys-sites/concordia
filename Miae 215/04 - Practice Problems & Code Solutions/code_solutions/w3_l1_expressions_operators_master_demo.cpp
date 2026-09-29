
// Expressions and operators

#include <iostream>
#include <cstdio>
#include <cmath> // to use the standard math library functions

using namespace std;

int main()
{		
	// 1) types of operators //////////////////////////////////

    // an "operator" performs some type of operation 
    // on some variables (operands)
	
	// an "expression" is a combination of operators and 
	// operands / variables that performs some task in the program
	
	// y = x + 1 + z*w
	
	// expression: y = x + 1 + z*w

	// operators: *, + , + , =
	
	// operands: (z,w) , (x,1), (temp1,temp2), (y,temp3)
	// temp1 = z*w
	// temp2 = x+1
	// temp3 = temp1 + temp2
	
	// the most common / basic C++ operators will be discussed in 
	// this program -- more will be discussed later in the course

    // a) assignment operator =

    // this sets the variable on the left hand side of the operator
	// to the result of the expression on the right hand side
	
    // the assigment operator always executes after the expression
	// on the right hand side (there is one exception for ++
	// -- more on that later)
    
	// example:

	int i, j;
	double x, y, z;

    i = 7*7; // set / initialize variable i to 49 (the result of 7*7)

	// operators: *, =
	// operands: (7,7) , (i,49)

	// LHS: i
	// RHS: 7*7

    // this evaluates the expression on the right hand side (RHS)
	// (ie 7*7) then puts the result into the variable on the LHS (i)
    cout << "\ni = " << i; // 49
   
	// note that variables can be re-assigned (ie recycled), eg
    i = 8; 
    cout << "\ni = " << i; // 8
    	
	// the new value of i will be remembered (ie stored in memory) 
	// until it's changed in a line later on in the program
		
	// b) sequential logic and memory
 
	// you can use variables on both sides of an expression such as

    j = i*i; // place the current value of i*i into variable j
    cout << "\nj = " << j; // 64
  	
	// the same variable can be used on both sides of an assignment, eg
    x = 3; // x = 3
    x = 2*x + 1; // x = 2*3 + 1 = 7
    cout << "\nx = " << x; // x = 7
	
    // note this is not a simultaneous math equation, so the answer 
	// is NOT the following: x = 2*x + 1 -> -x = 1 -> x = -1

    // the difference is because a program is evaluated "sequentially" 
	// (ie one line at a time) with each line using the current 
	// variable values from the previous program steps

	// c) extended / multiple assignment

	// multiple assignent operators can be used in an expression
	// to set multiple variables to the same value, eg

	double z1, z2, z3;
	
	z1 = z2 = z3 = 2.0 * 5.5;  // z1 = z2 = z3 = 11.0

	// here the last = goes first, then the second last, and so on.   
	// this is the same thing as
	
	// z3 = 2.0 * 5.5; 
	// z2 = z3;
	// z1 = z2;

	// drawback / pitfall with the following ?
	// -- somebody much change one of them
	// and then z1,z2,z3
	// z1 = 2*5.5;
	// z2 = 2*5.5;
	// z3 = 2*5.5;

	// Thus, the variables all become equal to the value on the 
	// far RHS (eg 11.0)
 
	cout << "\nz1 = " << z1; // 11
	cout << "\nz2 = " << z2; // 11
	cout << "\nz3 = " << z3; // 11

	// d) basic arithmetic operators

    // + addition
    // - subtraction
    // * multiplication
    // / division
    
	// examples for int

    i = 7 + 3; // 10
    cout << "\ni = 7 + 3 = " << i;
 
    i = 7 - 3; // 4
    cout << "\ni = 7 - 3 = " << i;
   
    i = 7 * 3; // 21
    cout << "\ni = 7 * 3 = " << i;
    
    i = 7 / 3; // 2
    cout << "\ni = 7 / 3 = " << i;

	// examples for doubles
	// -- results for floats are completely analogous

	x = 7.5 + 3.0; // 10.0
    cout << "\nx = 7.0 + 3.0 = " << x;
 
    x = 7.0 - 3.0; // 4.0
    cout << "\nx = 7.0 - 3.0 = " << x;
   
    x = 7.0 * 3.0; // 21.0
    cout << "\nx = 7.0 * 3.0 = " << x;
    
    x = 7.0 / 3.0; // 2.33333...
    cout << "\nx = 7.0 / 3.0 = " << x;

	// typical errors:

    // overflow and underflow (ie out of range)
	// (see variable_types lectures)

    // the division operator has two additional pitfalls:
    
    // i) integer division rounds down to the nearest integer
    // i = 1/3 -> i = 0 and not 0.3333
	// (see variable_types lectures)
    
    // ii) divide by zero -> gives a C++ mathematical exception
	// -- will give inf or even terminate the program (run-time error)
	// depending on the variable type / compiler settings
	// (see variable_types lectures)

	// e) the % operator
	// calculates the remainder after division, eg

    cout << "\nr = 7 % 3 = " << 7 % 3; // 1
	// ie 7 = 3*2 + 1

	cout << "\nr2 = 10.5 % 5.1 = " << 10.5 % 5.1; // 0.3
	// ie 10.5 = 5.1*2 + 0.3
	
	// f) increment (++) and decrement (--) operators
    
    // "incrementing" a variable adds one to a variable, eg
    x = 7.5;
    x++;  // same as x = x + 1
    cout << "\nx++ = " << x; // 8.5
 
    // "decrementing" a variable subtracts one from a variable, eg
    x--; // same as x = x - 1
    cout << "\nx-- = " << x; // 7.5

	// g) generalized increment (+=) and decrement (-=) operators, eg

	x = 5.0;

    x += 5.5; // same as x = x + 5.5
	cout << "\nx += 5.5 = " << x; // 10.5

    x -= 5.5; // same as x = x - 5.5
	cout << "\nx -= 5.5 = " << x; // 5.0

	// += and -= are very useful in practice (for loops, etc.)

	// *= and /= are also defined in C++ but they are not
	// that useful and potentially dangerous if put in loops
	x = 2.0;

    x *= 5.5; // x = x * 5.5 --> tends to infinity in a loop quickly
	cout << "\nx *= 5.5 = " << x; // 11

    x /= 5.5; // x = x / 5.5 --> tends to zero in a loop quickly
	cout << "\nx /= 5.5 = " << x; // 2

	// the main pitfall is programmers using *=, /= for unit
	// conversions and by accident the get put in a 
	// for loop resulting in infinity or zero for variable

/*
	double mu = 7.5/30.0;  // good
	// do this instead of
	
	// an accident waiting to happen
	mu = 7.5;
	mu /= 30.0;
*/

	// don't use these for unit conversions, especially in loops

	// h) combining ++ and = in an expression

    x = 1.0;

	// normally the = operator is excuted last in an expression.
	// however, the x++ and x-- operators excute after the = , eg
	z = x++; // ++ goes after =

	// this is the same as:
	// z = x; // z = 1.0
	// x++; // x = 2.0

	x = 1.0;
	z = ++x; // ++ goes before =

	// this is the same as:
	// x++; // x = 2.0
	// z = x; // z = 2.0
	
	cout << "\nx = " << x; // 2
	cout << "\nz = " << z; // 2

	// *** normally I don't mix ++ or -- with = to keep the program 
	// more simple / easier to read.

	// however, some programmers do this so you need to know about it.

	// 2) order of operations / precedence for arithmetic operators ///
	
	// a) order of precedence

	// from your math classes you are familiar with the "order of 
	// operations" when evaluating mathematical expressions, eg

	//   4  1  3  2
	// y = x*y + a/b

	// in this case * and / have higher precedence over + so
	// they go first

	// * and / have equal precedence so they are executed in order
	// from left to right (* and then /)

	// the order of operations for the example above is: *, /, +, =
	
	// however, parenthesis can be used to cause an operator
	// with lower precedence to execute before one with higher, eg
	
	//   4  2   1   3
	// y = x*(y + a)/b

	// the order of operations for the example above is: +, *, /, =

	// the normal order of precedence is used within a given
	// level of paraenthesis and higher levels of parenthesis 
	// have priority over lower, eg (()) is higher than ()

	// C++ expressions follow an order of operations in a similar
	// manner. the order of precedence is as follows for 
	// arithmentic operators in C++.
	
	// ((()))
    // (())
    // ()
	// - unary minus (eg -x), ++x, --x, (cast)
	// *, /, %
	// +, -
	// = (assignment normally has lowest priority)
	// x++

	// operators with higher precedence evaluate / execute first

	// operators with same precedence normally evaluate from 
	// left to right

	// see references below for more details / operators:
	// https://www.tutorialspoint.com/Operators-Precedence-in-Cplusplus
	// https://en.cppreference.com/w/cpp/language/operator_precedence
	// http://www.cplusplus.com/doc/tutorial/operators/

	// example:

	//   6   2   4   3   5    1
    // y = x1*x2 + x3/x4 - (x1+x4)

	// b) expressions with mixed variable types

 	// *** when mixing different variable types in a sub-expression 
	// (ie an operator and one or two variables) the variables are 
	// implicitly converted (if possible) to the more general 
	// of the variable types before the operator is applied, eg
	
	double d1 = 5.0, d2;
	float f1 = 7.0f, f2; 
	int i1 = 3;
	// note: any decimal constant is considered a double 
	// (eg 5.0), to make a float constant add an f (eg 3.14f)

	// 3    2    1
	d2 = d1 + f1 * i1;
	// = d1 + ftemp
	// = dtemp
	
	f2 = d1 + f1 * i1;
	// f2 = dtemp
	// f2 = ftemp (this will typically generate a warning)
	// you can get rid of such warning as before using a case, eg
	f2 = (float)(d1 + f1 * i1);
	
	// when combining two operands with an operator
	// the answer is converted to the more general
	// operand type -- see example above
	
	cout << "\nd2 = " << d2;

	//     1 2  3
	x = 5.0*7/3 + 5;
	
	// x = 35.0/3 + 5
	// x = 35.0/3.0 + 5
	// x = temp1 + 5.0
	// x = 16.6666...
	
	cout << "\nx = " << x;

	//     2  1   3
	x = 5.0*(7/3) + 5;
	
	// x = 5.0*2 + 5
	// x = 10.0 + 5.0
	// x = 15.0
	
	cout << "\nx = " << x; // 15

	//   1 2
	x = 1/3*3.14159; // bad way for a math formula

	// x = 0*3.14159
	// x = 0
	
	cout << "\nx = " << x; // 0

	x = 1.0/3*3.14159; // good way for a math formula

	cout << "\nx = " << x; // 1.047...

	// casts can also be used if implicit conversions
	// in an expression don't give you the desired result, eg

	x = (double)1/3*3.14159;
	
	cout << "\nx = " << x;
  
	// the exception to the rule above is for the assignment operator.
	// in this case it tries to convert the RHS to the varible
	// type of the LHS, eg
 		
    i = 3.1; // 
    
    cout << "\ni = " << i;
   
	// 3) math library functions ///////////////////////////////

	// C++ allows the program to use / execute a wide range
	// of standard sub-programs that can perform standard tasks
	// in your program (eg sin(x))

	// These sub-programs are known as "functions"

	// it's also possible to make your own user defined functions
	// -- more on that later in the term

	// related standard C++ functions are compiled ahead of time and 
	// stored in a library file which can be used by your program.

	// These library functions are automatically combined with your 
	// program at the linking stage by the compiler.

	// However, you need to use the appropriate #include statement
	// for a given library function. This lets the compiler know 
	// your program is using a given library.  

	// It's also necessary in some cases to change the compiler 
	// settings to specify the library file (*.lib) needed.

	// a standard "math function" library is available in C++.
	// to use it you need to put the statement 
	// #include <cmath> at the top of your program.
    
	// the following list shows some of the more useful functions
	// available in the C++ math library

    // note: most of these functions assume double variables, 
	// but floats will work as well
    
	// note: trig functions assume units of radians for C++

	x = 3.14159/4; // x = PI/4 rad
	
    cout << "\nx = " << x << " (rad)";

	y = sin(x);
    cout << "\nsin(x) = " << y;	
	
	y = cos(x);
    cout << "\ncos(x) = " << y;	
	
	y = tan(x); // watch out for 90 deg -- exception
    cout << "\ntan(x) = " << y;	
	
	y = exp(x);
    cout << "\nexp(x) = " << y;

	double theta;

	y = -1.0;
	x = -1.0;
	theta = atan(y/x); // inverse tan (theta range -PI/2 to PI/2)
    cout << "\ntheta = atan(y/x) = " << theta << " (rad)";
    cout << " = " << theta/3.14159*180 << " (deg)";

	// atan2 has a large range (-PI to PI) and always gives
	// the correct quadrant
    theta = atan2(y,x); 
    cout << "\ntheta = atan2(y,x) = " << theta << " (rad)";
    cout << " = " << theta/3.14159*180 << " (deg)";

    // *** atan2 is very useful in robotics since it gives you a
    // full direction from -pi to pi ***

	x = -7.5;
	y = abs(x);
	cout << "\nx = " << x;
    cout << "\nabs(x) = " << y; // absolute value of x
	
	// note: you can also use fabs() for floats / doubles
	
    // if x is < 0 you have an exception -> it won't give you 
    // a complex or imaginary number like your math class says

	// try x = -5 and see what happens to sqrt and log
	// note: nan = not a number
	x = 5; 

    y = sqrt(x);
    cout << "\nsqrt(x) = " << y;

	y = log(x); // natural log (base e)
    cout << "\nlog(x) = " << y;
	
	y = log10(x); // log base 10
    cout << "\nlog10(x) = " << y;

	// note: log(x) and log10(x) must have x > 0
	// -- either check x or use abs(x)

    // how to calculate powers such as y = x^3 or x^3.5 ?
 
    // for the 1st case you can use y = x*x*x
	// this is normally more efficient
    
    // for the 2nd case you need to use the pow function, eg
	x = 2.5;
	y = 3.5;
	z = pow(x,y); // x to the power of y, ie z = x^y
    cout << "\npow(x,y) = " << z;
    
    // watch out for negative numbers with non-integer exponents, eg
    // pow(-1,0.5) // this doesn't give a complex number in C++
    // -- it will give a run-time error
    	
	cout << "\npress enter to continue.";	

	// pause program until the enter / return key is pressed
	getchar(); 	
		
	return 0;	
} 

