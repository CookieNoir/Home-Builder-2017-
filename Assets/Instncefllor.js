#pragma strict
var floorblock: GameObject;
public static var created: boolean;
var vx:float;
public static var roof: boolean;
function Start () {
}

function Update () {
if (Input.GetKeyDown(KeyCode.Mouse0)&&allowbuilding.allow==true) {Instantiate(floorblock, Vector3(transform.position.x,Floornumber.floor-1,transform.position.z),Quaternion.Euler(vx,0,0)); created=true;}
if (Input.GetKeyDown(KeyCode.W)) transform.position.z+=1;
if (Input.GetKeyDown(KeyCode.S)) transform.position.z-=1;
if (Input.GetKeyDown(KeyCode.A)) transform.position.x-=1;
if (Input.GetKeyDown(KeyCode.D)) transform.position.x+=1;
transform.position.x=Mathf.Clamp(transform.position.x,-3.5,3.5);
transform.position.z=Mathf.Clamp(transform.position.z,-3.5,3.5);
transform.position.y=Floornumber.floor-1;
}