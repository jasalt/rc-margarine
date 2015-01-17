/*
  by Jarkko Saltiola (jasalt)
*/

#include <VirtualWire.h>

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as common motor control TODO
  pinMode(13, OUTPUT);

  // Radio receiver
  Serial.begin(9600);
  Serial.println("Device is ready");
  vw_setup(2000); //bps
  vw_rx_start();
}

// the loop function runs over and over again forever
void loop() {

  byte message[VW_MAX_MESSAGE_LEN];
  byte messageLength = VW_MAX_MESSAGE_LEN;


  if (vw_get_message(message, &messageLength)){
    digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
    Serial.print("Received: ");
    for (int i = 0; i < messageLength; i++){
      Serial.write(message[i]);
      delay(10);
    }
    Serial.println();
    digitalWrite(13, LOW);    // turn the LED off by making the voltage LOW
  }
}
