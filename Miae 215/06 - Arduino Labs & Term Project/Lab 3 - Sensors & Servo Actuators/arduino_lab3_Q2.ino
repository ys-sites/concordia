
// lab #3 Q2

#include <Servo.h> // include file for servo control

Servo servo1;  // create servo object to control servo #1

float t0 = 0.0; // need to make t0 a global variable so loop and setup can share it

void setup() {

	servo1.attach(7);  // connect pin 7 to servo #1

	// initialize serial communication at 115200 bits per second
	Serial.begin(115200);
	
	// measure initial time in s
	// make sure to measure t0 last in setup since the other parts
	// of setup will take time to perform.
	t0 = micros()*1.0e-6;

}

void loop() {
	// note this program could also be put in setup() after Serial.begin
	
	// note this loop function gets executed repeatedly unlike Q1
	// -- see if you can spot the difference
	
	float t; // clock time in s
	float A, w, phi1;
	int theta1_d; // desired angle for servo #1

	A = 45.0;
	w = 1.0; // higher values of w will make the servos oscillate faster
	phi1 = 0.0;
	
	// calculate time t since the program begins
	// note: since micros() gives the time since the program (i.e.) setup begins
	// calculating t = micros()*1.0e-6 will be close to t = micros()*1.0e-6 - t0
	// but not as accurate since t0 accounts for the time taken to execute setup()	
	t = micros()*1.0e-6 - t0;
		
	theta1_d = A*( 1.0 + sin(w*t + phi1) );

	servo1.write(theta1_d); // command servo #1 to go to theta1_d

	// note we don't have to wait/delay for this since the desired angles
	// are changing continuously and slowly as functions of time

	if(t > 60.0) exit(1); // end program at t=60s

}
