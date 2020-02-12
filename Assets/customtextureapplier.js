#pragma strict
public var theway: String;
var waytell: GameObject;
var nametell: GameObject;
var	textureview: GameObject;
public function Applier(){
	theway=waytell.GetComponent.<UI.InputField>().text+nametell.GetComponent.<UI.InputField>().text;
	var www: WWW = new WWW(theway);
	textureview.GetComponent.<UI.RawImage>().texture=www.texture;
}
public function Decliner(){
	theway="";
	textureview.GetComponent.<UI.RawImage>().texture=null;
}
function Update() {
if (textureview.GetComponent.<UI.RawImage>().texture==null) textureview.GetComponent.<UI.RawImage>().color=Vector4(0,0,0,0.25);
else textureview.GetComponent.<UI.RawImage>().color=Vector4(1,1,1,1);
}