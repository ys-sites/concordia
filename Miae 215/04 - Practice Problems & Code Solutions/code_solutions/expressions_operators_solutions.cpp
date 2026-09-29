
// Expressions and operators, exercise problems

#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

int main()
{		
	// Q1. Determine the output of the program below
	// without running the program.  
	// Don't use a calculator if possible.

	int i, j;
	double x, y, z, q;
	float u, v, w;

	q = x = y = z = 10;

	cout << "\nx = " << x;
	cout << "\ny = " << y;
	cout << "\nz = " << z;
	cout << "\nq = " << q;

	u = v = w = i = 1/3;

	cout << "\nu = " << u;
	cout << "\nv = " << v;
	cout << "\nw = " << w;
	cout << "\ni = " << i;

	for(i=0;i<307;i++) {
		x = x * 10;
		y *= 10.0;
		z /= 10;
		q += 10;
	}

	cout << "\nx = " << x;
	cout << "\ny = " << y;
	cout << "\nz = " << z;
	cout << "\nq = " << q;

	x = x * 10;
	y *= 10.0;
	z /= x;
	q -= 10;

	cout << "\nx = " << x;
	cout << "\ny = " << y;
	cout << "\nz = " << z;
	cout << "\nq = " << q;

	j = -1;
	for(i=1;i<=10;i+=1) {
		cout << "\nj = " << j;
		j *= -1;
	}

	int r, a, b;

	b = 237;
	a = 10;

    r = b % a;
    cout << "\nr = " << r;

	b = b / 10;
	r = b % a;
    cout << "\nr = " << r;

	b = b / 10;
	r = b % a;
    cout << "\nr = " << r;

    x = 10.0;

	y = 3 * x++ + 1;
	z = 3 * ++x + 1;
	
	cout << "\ny = " << y;
	cout << "\nz = " << z;

	// recall: the order of precedence for the examples below is:
	
    // (())
    // ()
	// - unary minus (eg -x), ++x, --x, (cast)
	// *, /, %
	// +, -
	// = (assignment normally has lowest priority)

	// operators with higher precedence evaluate / execute first

	// operators with same precedence normally evaluate from 
	// left to right

	// Q2. label the order of operations with numbers (1,2,3,...) 
	// for the expressions below in the following manner.
	// then determine the outputs.
	// Don't use a calculator if possible.

    //   6   2   4   3   5    1
    // y = x1*x2 + x3/x4 - (x1+x4)
	
	double d1 = 10.0, d2 = 10, d3 = 10e-10;
	float f1 = 7.0f, f2 = (float)3.1, f3 = 7.1;
	int i1 = 1, i2 = 3, i3 = -1;

	// f - result of operator is float
	// d - result of operator is double
	// i - result of operator is int

	// d   i  d   d      
	// 4   1  2   3  
	d3 = i1/i2/d1 + f1;

	// d   d   d    d
	// 4   2   1    3
	d2 = i1/(i2/d1) + f1;

	// d    i   d   d
	// 4    1   2   3 
	d1 = (i1/i2)/d1 + f3;

	// i   f   f   f
	// 4   1   3   2    
    i1 = f3/f2 + f1/f3;

	cout << "\nd1 = " << d1;
	cout << "\nd2 = " << d2;
	cout << "\nd3 = " << d3;
	cout << "\ni1 = " << i1;

	d1 = 0.5; d2 = 0.5;

	// f   d   d
	// 3   1   2
	f1 = d1*d2 + f1;

	i1 = 3;

	// f  f   f
	// 3  2   1
	f2 = 1/(float)i1;

	// f   d    d  f
	// 4   3    2  1
	f3 = d1*(d2 + 1/f2);

	cout << "\nf1 = " << f1;
	cout << "\nf2 = " << f2;
	cout << "\nf3 = " << f3;

	// Q3. Determine the output of the program below
	// without running the program.  
	// Don't use a calculator if possible.

	x = 2*atan(1.0);
    cout << "\nx = " << x << " (rad)";

	y = sin(x);
    cout << "\nsin(x) = " << y;	
	
	y = cos(x);
    cout << "\ncos(x) = " << y;	
	
	y = tan(x);
    cout << "\ntan(x) = " << y;	
	
	y = exp(1.0);
    cout << "\nexp(x) = " << y;

	double theta;

	x = -1.0;
	y = 1.0;
	theta = atan(y/x);
    cout << "\ntheta = atan(y/x) = " << theta << " (rad)";
    cout << " = " << theta/3.14159*180 << " (deg)";

    theta = atan2(y,x); 
    cout << "\ntheta = atan2(y,x) = " << theta << " (rad)";
    cout << " = " << theta/3.14159*180 << " (deg)";

	x = -7.5;
	y = abs(x);
	cout << "\nx = " << x;
    cout << "\nabs(x) = " << y;
	
	// try x = -5 and see what happens to sqrt and log
	x = 100; 

    y = sqrt(abs(x));
    cout << "\nsqrt(x) = " << y;

	y = log(-abs(-x));
    cout << "\nlog(x) = " << y;
	
	y = log10(abs(x));
    cout << "\nlog10(x) = " << y;

	x = -1.0;
	y = 0.5;
	z = pow(x,y);
    cout << "\npow(x,y) = " << z;
    
	x = 10;
	y = 3;
	z = pow(x,y);
    cout << "\npow(x,y) = " << z;
	
	cout << "\npress enter to continue.";

	// Q4. check the compiler warnings and remove them
	// using appropriate casts.

	// pause program until the enter / return key is pressed
	getchar(); 	
		
	return 0;	
} 

