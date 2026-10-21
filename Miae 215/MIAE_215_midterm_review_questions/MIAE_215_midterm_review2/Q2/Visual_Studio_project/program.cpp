
// Q2. Determine the output of the program below
// without running the program.

#include <iostream>
#include <cstdio>
#include <cmath>

using namespace std;

int main()
{		
	int i, j;
	double x, y, z, q;
	float u, v, w;

	q = x = y = z = 10;

	u = v = w = i = 1/3;

	cout << "\nu = " << u;
	cout << "\nv = " << v;
	cout << "\nw = " << w;
	cout << "\ni = " << i;

	for(i=0;i<360;i++) {
		x = x * 10;
		y *= 10.0;
		z /= 10;
		q += 10;
	}

	cout << "\nx = " << x;
	cout << "\ny = " << y;
	cout << "\nz = " << z;
	cout << "\nq = " << q;

	j = -1;
	for(i=1;i<=10;i+=1) {
		cout << "\nj = " << j;
		j *= -10;
	}

	cout << "\ni = " << i;
	cout << "\nj = " << j;
		
	int r, a, b;

	b = 27;
	a = 10;

    r = b % a;
    cout << "\nr = " << r;

	b = b * 10;
	r = b % a;
    cout << "\nr = " << r;
	
	double d1 = 10.0, d2 = 10, d3 = 10e-10;
	float f1 = 7.0f, f2 = (float)3.1, f3 = 7.1;
	int i1 = 1, i2 = 3, i3 = -1;

	d3 = i1/i2/d1 + f1;

	d2 = i1/(i2/d1) + f1;

	d1 = (i1/i2)/d1 + f3;

    i1 = f3/f2 + f1/f3;

	cout << "\nd1 = " << d1;
	cout << "\nd2 = " << d2;
	cout << "\nd3 = " << d3;
	cout << "\ni1 = " << i1;

	d1 = 0.5; d2 = 0.7;

	f1 = (int)(d1*d2 + f1);

	i1 = -3;

	f2 = 7/(float)i1;

	f3 = 7/i1;

	cout << "\nf1 = " << f1;
	cout << "\nf2 = " << f2;
	cout << "\nf3 = " << f3;

	getchar(); 	
		
	return 0;	
} 

