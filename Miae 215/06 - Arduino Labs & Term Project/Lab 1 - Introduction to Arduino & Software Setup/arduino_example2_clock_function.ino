
// how to read the Arduino clock

void setup() {

	float t; // time in seconds
	
	Serial.begin(115200);

	Serial.print("\nsetup complete");
	
	// to measure the time in microsecond intervals call micros()
	// will return the number of microseconds since you started 
	// your program

	// ie t = 0 when your program starts

	t = micros()*1.0e-6; // time in s
	
	// now we can control the timing of the program very precisely
	Serial.print("\nt = ");
	Serial.print(t);
	
//	for(;;) { // infinite for loop
	while(1) { // alternative infinite while loop
		t = micros()*1.0e-6; // time in s	
		Serial.print("\nt = ");
		Serial.print(t,7); // print out 7 decimal places
		delay(100); // delay approximately 0.1 s	
	}
	
	// example output output:
	// t = 0.00014
	// t = 0.10017
	// t = 0.20121
	
	// the main reason for the extra decimal points at the end
	// is that delay is not perfect -- it can be interrupted
	// it may not give exactly 100 ms
	// -> if you want a more exact delay you should
	// continually check the clock until exactly 0.1 s have passed
	// -- more on this later
	
	delay(1000);
	exit(0);
}


void loop() 
{  
	// loop() never gets executed since setup never ends
}

