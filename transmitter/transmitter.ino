/*
  by Jarkko Saltiola (jasalt)
*/

#include <VirtualWire.h>

void setup(){
  vw_setup(2000); // bps
}
void loop(){
  send("1"); // left
  delay(1000);
  send("2"); // right
  delay(1000);
  send("0"); // forward
  delay(1000);
}
void send (char *message){
  vw_send((uint8_t *)message, strlen(message));
  vw_wait_tx();
}
