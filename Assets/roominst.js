#pragma strict
var wall1: GameObject;
var wall2: GameObject;
var wall3: GameObject;
var wall4: GameObject;
var wallblock: GameObject;
function Start () {

}

function Update () {
if (Input.GetKeyDown(KeyCode.Mouse0)&&allowbuilding.allow==true) {
Instantiate(wallblock, Vector3(wall1.transform.position.x,Floornumber.floor-1,wall1.transform.position.z), wall1.transform.rotation);
Instantiate(wallblock, Vector3(wall2.transform.position.x,Floornumber.floor-1,wall2.transform.position.z), wall2.transform.rotation);
Instantiate(wallblock, Vector3(wall3.transform.position.x,Floornumber.floor-1,wall3.transform.position.z), wall3.transform.rotation);
Instantiate(wallblock, Vector3(wall4.transform.position.x,Floornumber.floor-1,wall4.transform.position.z), wall4.transform.rotation);
 instantiator.created=true;}
if (Input.GetKeyDown(KeyCode.W)) transform.position.z+=1;
if (Input.GetKeyDown(KeyCode.S)) transform.position.z-=1;
if (Input.GetKeyDown(KeyCode.A)) transform.position.x-=1;
if (Input.GetKeyDown(KeyCode.D)) transform.position.x+=1;
transform.position.x=Mathf.Clamp(transform.position.x,-3.5,3.5);
transform.position.z=Mathf.Clamp(transform.position.z,-3.5,3.5);
transform.position.y=0.5+Floornumber.floor-1;
}