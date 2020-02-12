#pragma strict
var stand: Camera;
var build: Camera;
var flooring: GameObject;
var text: GameObject;
private var k: float;
private var colored: boolean =false;
function Update () {
if (Input.GetKeyDown(KeyCode.Z)) {k=stand.depth; stand.depth=build.depth; build.depth=k; colored=!colored;}
if (colored) {flooring.GetComponent.<UI.RawImage>().color=Vector4(1,1,1,1); text.GetComponent.<UI.Text>().color=Vector4(1,1,1,1);}
else {flooring.GetComponent.<UI.RawImage>().color=Vector4(0.1,0.1,0.1,1); text.GetComponent.<UI.Text>().color=Vector4(0.1,0.1,0.1,1);}
}
function Modechnger () {
k=stand.depth; stand.depth=build.depth; build.depth=k;
}