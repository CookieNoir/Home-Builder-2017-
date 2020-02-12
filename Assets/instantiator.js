#pragma strict
var wallblock: GameObject;
public static var created: boolean;
private var rotated: boolean;
function Start () {
rotated=false;
created=false;
}

function Update () {
if (Input.GetKeyDown(KeyCode.Mouse0)&&allowbuilding.allow==true) {Instantiate(wallblock, Vector3(transform.position.x,Floornumber.floor-1,transform.position.z),transform.rotation); created=true;}
if (Input.GetKeyDown(KeyCode.Mouse1)) {rotated=!rotated; transform.position.x+=0.5; transform.position.z+=0.5;}
if (Input.GetKeyDown(KeyCode.W)) transform.position.z+=1;
if (Input.GetKeyDown(KeyCode.S)) transform.position.z-=1;
if (Input.GetKeyDown(KeyCode.A)) transform.position.x-=1;
if (Input.GetKeyDown(KeyCode.D)) transform.position.x+=1;
if (rotated==false) {transform.rotation=Quaternion.Euler(0,0,0); transform.position.x=Mathf.Clamp(transform.position.x,-4,4);
transform.position.z=Mathf.Clamp(transform.position.z,-3.5,3.5);}
else
{transform.rotation=Quaternion.Euler(0,-90,0);
transform.position.x=Mathf.Clamp(transform.position.x,-3.5,3.5);
transform.position.z=Mathf.Clamp(transform.position.z,-4,4);}
transform.position.y=0.5+Floornumber.floor-1;
}