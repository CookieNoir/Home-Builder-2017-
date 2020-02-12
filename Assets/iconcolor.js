#pragma strict

function Start () {

}

function Update () {
if (allowbuilding.blocktype==gameObject.GetComponent.<Typeofinst>().number)
gameObject.GetComponent.<UI.Image>().color=Vector4(0.53,0.64,0.1,1);
else
gameObject.GetComponent.<UI.Image>().color=Vector4(0.25,0.25,0.25,1);
}