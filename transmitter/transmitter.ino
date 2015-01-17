/*
  by Jarkko Saltiola (jasalt)
*/

#include <VirtualWire.h>

void serial_setup(){
  Serial.begin(9600);
}

void setup(){
  vw_setup(2000); // bps
  serial_setup();
}

void test_loop(){
  send("1"); // left
  delay(1000);
  send("2"); // right
  delay(1000);
  send("0"); // forward
  delay(1000);
}

char serialChar;
void serial_control(){
  while (Serial.available() > 0) {
    serialChar = Serial.read();
    send(&serialChar);
  }
}

void loop(){
  //test_loop();
  serial_control();
}
void send (char *message){
  vw_send((uint8_t *)message, strlen(message));
  vw_wait_tx();
  Serial.println("Sent: ");
  //Serial.println(String(uint8_t *)message);
}
