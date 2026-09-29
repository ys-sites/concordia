
// lab #3 Q1

// note: the noise level can vary with different types of light
// since some types of lights (plasma TV, some light bulbs, etc.)
// flicker more than others.  such lights could increase sensor noise 
// so they should be avoided.

void setup() {

	// initialize serial communication at 115200 bits per second
	Serial.begin(115200);	
}

void loop() {
	// note this program could also be put in setup() after Serial.begin
	
	// note this loop function only gets executed once before the program ends

	int N = 1000, i; // note ints can only go up to 65000 in Arduino
	// if you need more use long int or unsigned long int
	
	float min, max, ave, sum, delta;
	int analog_input0; // analog input for pin A0
	float voltage0; // voltage input for pin A0

	min = 1.0e6; // bad min value
	max = -1.0e6; // bad max value
	sum = 0.0; // initialize summation variable to zero
	
	for(i=1;i<=N;i++) {
	
		analog_input0 = analogRead(A0); // read the analog input for pin A0
		voltage0 = analog_input0/1023.0*5; // convert input to V (0 to 5V)
		
		// print out for testing purposes -- comment out for solution
//		Serial.print("\nvoltage0 = ");
//		Serial.print(voltage0,5); // print out to 5 decimal places
	
		sum += voltage0;
		
		if(voltage0 > max) max = voltage0;
		if(voltage0 < min) min = voltage0;
		
		delay(1); // wait for 1 ms
	}
	
	ave = sum / N;
	delta = max - min;
	
	Serial.print("\naverage voltage = ");
	Serial.print(ave,5); // print out to 5 decimal places
	
	Serial.print("\nestimate of noise level = ");
	Serial.print(delta/2,5); // print out to 5 decimal places

  delay(1000); // wait for printing to end before ending program
	exit(0); // end program since we don't want to run the program repeatedly
}

