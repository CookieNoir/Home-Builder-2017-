#pragma strict
function Start () {
Cloudoffset(); Repair();
}
function Cloudoffset () {
while (true) {transform.position.x+=0.02;
transform.position.z+=0.008;
yield WaitForSeconds(0.05);}
}
function Repair () {
while (true) {if (transform.position.x>100) transform.position.x=transform.position.x-100;
if (transform.position.z>100) transform.position.x=transform.position.z-100;
yield WaitForSeconds(1);}
}