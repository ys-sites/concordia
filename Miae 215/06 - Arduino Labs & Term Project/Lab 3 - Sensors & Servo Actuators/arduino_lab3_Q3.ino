
// lab #3 Q3

// note: other light sources such as computer monitor, TV, and other light bulbs
// can produce somewhat unexpected maximums -- the light sensor might thus
// not perfectly point at your LED light unless you turn them off.
// the tilt of the light sensor can also affect the results.

// note: the first method seems faster and more simple but it doesn't follow small 
// changes in the position of the light as well as the second method. it also has
// to move far away from the light during the sweep of all angles.  
// In practice a combination of the two methods might be the best approach 
// or maybe some other method like the first method but over a smaller 
// range in some situations so it tracks better.

#include <Servo.h> // include file for servo control

Servo servo1;  // create servo object to control servo #1

void setup() {

	servo1.attach(7);  // connect pin 7 to servo #1

	// initialize serial communication at 115200 bits per second
	Serial.begin(115200);	
}

// first method -- a sweep over all angles
void loop() {

	// note this program could also be put in setup() after Serial.begin
	
	// note this loop function gets executed repeatedly unlike Q1
	// -- see if you can spot the difference

	int theta1_d; // desired servo angle
	int analog_input0; // analog input for pin A0
	float voltage0; // voltage input for pin A0
	float min;
	int theta1_d_min; // servo angle for minimum voltage / maximum light
	float t;
	
	// move to the initial position of 0 deg
	theta1_d = 0; 
	servo1.write(theta1_d);
	delay(1000);  // wait for the servo to get to theta1 = 0 deg
				
	// move servo #1 between 0 and 180 deg in 1 deg increments and
	// find the minimum voltage (i.e. maximum light)			
	min = 1.0e6; // bad minimum			
	for(theta1_d = 0;theta1_d<=180;theta1_d++) {
	
		servo1.write(theta1_d); // move servo #1 to desired angle
		delay(50); // wait for servo to get to desired angle
		// smaller delays will move the servo faster but with more error
		// ie difference between theta1 (actual) and theta1_d (desired)
	
		analog_input0 = analogRead(A0);	// read the analog input for pin A0
		voltage0 = analog_input0/1023.0*5; // convert input to V (0 to 5V)

    // approximate value of t -- should use t0 as in Q2 solution
    t = micros()*1.0e-6;  
  
		if(voltage0 < min) {
			min = voltage0;
			theta1_d_min = theta1_d; // also record theta1_d for min
		}
	
		// print out for testing/plotting purposes -- comment out for
		// better performance
		Serial.print("\n");
		Serial.print(t);
		Serial.print(","); // for csv file
		Serial.print(voltage0);
		Serial.print(","); // for csv file
		Serial.print(theta1_d);
	}
							
	// move to the min voltage / max light position
	servo1.write(theta1_d_min);
	delay(1000);  // wait for the servo to get to theta1_d_min
	
	//  wait 10s before beginning the maximizing procedure again
	delay(10000);
	
}

/*
// second method -- continual maximization of light over 3 local points.
//
// the following is the alternative version that continually checks 3 points
// try it and compare to the first version
void loop() {

	// note this program could also be put in setup() after Serial.begin
	
	// note this loop function gets executed once but there is 
	// a while loop inside that continually gets executed

	int theta1_d; // desired servo angle
	int analog_input0; // analog input for pin A0
	float voltage0; // voltage input for pin A0
	float min;
	int theta1_d_min; // servo angle for minimum voltage / maximum light
	float t;
	int theta, delta;
	
	// approximate value of t -- should use t0 as in Q2 solution
	t = micros()*1.0e-6;	
	
	// move to the initial position of 90 deg -- in the center
	// so we don't have to be concerned with theta-delta being out of
	// bounds initially
	theta = theta1_d = 90; 
	servo1.write(theta1_d);
	delay(1000);  // wait for the servo to get to theta1 = 90 deg
	
	delta = 3; // distance between two test points
	
	// perform the minimization process for 5 min 
	while(t<300.0) {
	
		// note: it is assumed that theta1_d is not outside the range 0 to 180
		// -- it would probably be safer to check for this type of error
	 
	  min = 1.0e6; // bad min -- note: this has to be inside the loop
    // since a new min is being determined every time in the loop
   
		// point #1
		theta1_d = theta - delta; 
		servo1.write(theta1_d);
		delay(100); // wait for servo to get to the desired position
		
		analog_input0 = analogRead(A0);	// read the analog input for pin A0
		voltage0 = analog_input0/1023.0*5; // convert input to V (0 to 5V)
		
		if(voltage0 < min) {
			min = voltage0;
			theta1_d_min = theta1_d; // also record theta1_d for min
		}	
		
		// point #2
		theta1_d = theta; 
		servo1.write(theta1_d);
		delay(100); // wait for servo to get to the desired position
		
		analog_input0 = analogRead(A0);	// read the analog input for pin A0
		voltage0 = analog_input0/1023.0*5; // convert input to V (0 to 5V)
		
		if(voltage0 < min) {
			min = voltage0;
			theta1_d_min = theta1_d; // also record theta1_d for min
		}			
		
		// point #3
		theta1_d = theta + delta; 
		servo1.write(theta1_d);
		delay(100); // wait for servo to get to the desired position
		
		analog_input0 = analogRead(A0);	// read the analog input for pin A0
		voltage0 = analog_input0/1023.0*5; // convert input to V (0 to 5V)
		
		if(voltage0 < min) {
			min = voltage0;
			theta1_d_min = theta1_d; // also record theta1_d for min
		}		
	
		// move to the minimum point 
		servo1.write(theta1_d_min);
		theta = theta1_d_min;
		delay(100); // wait for servo to get to the desired position
	
		// approximate value of t -- should use t0 as in Q2 solution
		t = micros()*1.0e-6;
		
		// print out for testing/plotting purposes -- comment out for
		// better performance (printing can really slow things down)
   
//		Serial.print("\n");
//		Serial.print(t);
//		Serial.print(","); // for csv file
//		Serial.print(min);
//		Serial.print(","); // for csv file
//		Serial.print(theta);
//    delay(200); // wait for print out
		
	} // end while
			
}
*/

