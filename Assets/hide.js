#pragma strict
var hide: boolean = false;
var layer: GameObject;
var cam: GameObject;
var a: boolean=false;
function Update () {
	if (hide) {layer.SetActive(false); cam.GetComponent.<thirdpersoncam>().distance=10; a=true;} 
	else {if (a==true) layer.SetActive(true); a=false; cam.GetComponent.<thirdpersoncam>().distance=5;}
}
function Changer() {
	hide=!hide;
}