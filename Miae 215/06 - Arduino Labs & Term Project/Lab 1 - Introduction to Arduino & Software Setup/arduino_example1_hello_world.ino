
// hello world example

// note there is no need for standard C++ function include statements 
// when usign Arduino --> they are usually included automataically
// eg sin, exp, etc.
// -- include statements don't hurt though

void setup() 
{ // setup() is analogous to main()

	int i=1; // 2 byte integer so -32,000 to 32,000
	// there are no doubles -> use floats
	// note a PC has 4 byte integers -2 billion to 2 billion

	// initialize the serial port monitor tool
	// which allows printing out to the PC from the Arduino
	Serial.begin(115200); // FYI: 115200 bits / s communication to the screen -- slow

	// in Arduino we don't use cout, we use Serial.print() instead
	Serial.print("\nhello world\n");
	Serial.print(i); // how to print a variable
	
	delay(3000); // wait 3000 ms = 3 s

	Serial.print("\ngoodbye world\n");
	
  // the exit() function can end the program here 
  // thus not allowing loop() to execute
	delay(1000); // wait 1000 ms to give the printing time to finish

//	exit(0); // stop the program -> pulling the plug

	// --> because of exit here the program ends at the end of setup
	// --> setup is the end of this program
	// --> *** this is my preferred approach to Arduino programming

	// --> when you do it this way setup is completely analogous
	// to main -- so your intuition about main applies to setup


} // end of setup function

// the loop() function is executed repeatedly as fast as possible
// after the setup() function has executed -- like an infinite loop
void loop() 
{ 
  
  // do nothing in loop() function for now
  
	// anything put in loop gets done over and over again indefinitely
	
	// however, you can still stop the program with exit(0)

	Serial.print("\nhello world -- loop\n");
	delay(500);

} 

