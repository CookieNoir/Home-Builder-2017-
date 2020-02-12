#pragma strict
var rot: float;
function Update () {
gameObject.transform.rotation=Quaternion.Euler(-90,0,rot);
}