#pragma strict
public var lookat: Transform;
public var camtrans: Transform;
private var cam: Camera;
public var distance: float;
var cury: float=0;
var senx: float=4f;
var seny: float=1f;
private var y_angle_min: float=-200f;
private var y_angle_max: float=200f;
function Start () {
camtrans=transform;
cam=Camera.main;
}
function Update () {
lookat=gameObject.FindWithTag("GameController").transform;
if (Input.GetKey(KeyCode.Mouse2)) {
cury+=Input.GetAxis("Mouse X");
cury=Mathf.Clamp(cury,y_angle_min,y_angle_max);
}}
function LateUpdate () {
 var dir: Vector3=new Vector3(0,0,-distance);
 var rotation: Quaternion=Quaternion.Euler(0,cury*5,0);
 camtrans.position=lookat.position+rotation*dir+Vector3(0,4,0);
 camtrans.LookAt(lookat.position);
}