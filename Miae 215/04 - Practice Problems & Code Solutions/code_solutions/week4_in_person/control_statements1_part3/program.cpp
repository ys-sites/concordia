
// control statement examples

#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

int main()
{
	int i = 1, j = 2, k = 3, q;
	double x = 1.1;

	// logical expressions /////////////////

	// logical and comparison operators can be mixed to form more 
	// complicated logical expressions

	// an order of operators / precedence analogous to arithmetic 
	// operators is used to evaluate such expressions, ie

	// ()
	// !
	// *, /
	// +, -
	// >, >=, <, <=
	// ==, !=
	// &&
	// ||

	// Arithmetic operators have higher precedence, except 
	// for ! which is the same level as unary minus -, 
	// and assignment which is lower than all operators

	// note: you can always use () if you are unsure, eg
	if ( (x < 0.0) || (i <= k) ) cout << "\ntrue";
	
	// i=1, k=3
	//     
	if ( x < 0.0 || i <= k ) cout << "\ntrue";
	//   
	//
	
	q = x < 0.0; // 
	cout << "\nq = " << q; // 

	q = i <= k; // 
	cout << "\nq = " << q; //

	q = x < 0.0 || i <= k; // 
	cout << "\nq = " << q; // 
	
	// here () is not required but it's more readable IMHO

	// more examples of logical expressions
	// -- as an exercise label the order of operations (1,2,...)
	// and determine the result / output

	i = 3;
	k = 1;

	//    
	if ( i+k > 0 || i < k ) cout << "\ntrue";

	//    
	if ( k > 0 || !(i < k) ) cout << "\ntrue";
	
//	i = 3;
//	k = 1;
	
	//   
	if ( i > 0 && i < k || i < 6+1 ) cout << "\ntrue";
	//                          
	//     
	//          
	//                  

	if ( ( (i > 0) && (i < k) ) || (i < 7) ) cout << "\ntrue";

	// bool and logical variables (see variable types lecture) can
	// also be used in logical expressions, eg

	int i1 = 1, i2 = 0, i3; 
	bool b1 = true, b2 = false, b3;

	if ( i1 ) cout << "\ni1 is true";
	if ( b2 ) cout << "\nb2 is true";
	if ( i1 && i2 ) cout << "\ni1 is true and i2 is true";

	// recall: a logical variable is an int varible used to 
	// represent a binary (true / false) condition 
	// -- 0 is false and non-zero is true

	// logical expressions evaluate to true (0) or false (1) , eg

	i3 = i1 || i2; 
	cout << "\ni3 = " << i3;

	b3 = b1 && b2;
	cout << "\nb3 = " << b3;

	i3 = i2 || i1 + 1 && b1 && b2; 
	//    
	//   
	//    
	//         

	cout << "\ni3 = " << i3;

	cout << "\npress enter to continue.";	
	getchar();

	// need 2nd getchar() -- robot input above gives an extra enter
	getchar(); 

	return 0;
} 

