#pragma strict
public var left_forw: GameObject;
public var left_back: GameObject;
public var right_forw: GameObject;
public var right_back: GameObject;
public var up_forw: GameObject;
public var up_back: GameObject;
public var hide_forw: GameObject;
public var hide_back: GameObject;
function Start () {
if (GameObject.FindWithTag("texturev").GetComponent.<UI.RawImage>().texture!=null) {
right_forw.GetComponent.<Renderer>().material.mainTexture=GameObject.FindWithTag("texturev").GetComponent.<UI.RawImage>().texture;
left_forw.GetComponent.<Renderer>().material.mainTexture=GameObject.FindWithTag("texturev").GetComponent.<UI.RawImage>().texture;
right_back.GetComponent.<Renderer>().material.mainTexture=GameObject.FindWithTag("texturev").GetComponent.<UI.RawImage>().texture;
left_back.GetComponent.<Renderer>().material.mainTexture=GameObject.FindWithTag("texturev").GetComponent.<UI.RawImage>().texture;
hide_forw.GetComponent.<Renderer>().material.mainTexture=GameObject.FindWithTag("texturev").GetComponent.<UI.RawImage>().texture;
hide_back.GetComponent.<Renderer>().material.mainTexture=GameObject.FindWithTag("texturev").GetComponent.<UI.RawImage>().texture;
}
Blocktile();
}
function Blocktile () {
while (true) {
right_forw.GetComponent.<Renderer>().material.mainTextureScale=Vector2(0.5,1);
right_forw.GetComponent.<Renderer>().material.SetTextureScale("_Alpha",Vector2(0.5,1));
left_forw.GetComponent.<Renderer>().material.mainTextureScale=Vector2(-0.5,1);
left_forw.GetComponent.<Renderer>().material.SetTextureScale("_Alpha",Vector2(-0.5,1));
right_back.GetComponent.<Renderer>().material.mainTextureScale=Vector2(-0.5,1);
right_back.GetComponent.<Renderer>().material.SetTextureScale("_Alpha",Vector2(-0.5,1));
left_back.GetComponent.<Renderer>().material.mainTextureScale=Vector2(0.5,1);
left_back.GetComponent.<Renderer>().material.SetTextureScale("_Alpha",Vector2(0.5,1));
hide_forw.GetComponent.<Renderer>().material.mainTextureScale=Vector2(-0.1,1);
hide_forw.GetComponent.<Renderer>().material.SetTextureScale("_Alpha",Vector2(-0.1,1));
hide_back.GetComponent.<Renderer>().material.mainTextureScale=Vector2(0.1,1);
hide_back.GetComponent.<Renderer>().material.SetTextureScale("_Alpha",Vector2(0.1,1));
right_forw.GetComponent.<Renderer>().material.mainTextureOffset=Vector2(0.5,0);
right_forw.GetComponent.<Renderer>().material.SetTextureOffset("_Alpha",Vector2(0.5,0));
left_forw.GetComponent.<Renderer>().material.mainTextureOffset=Vector2(0.5,0);
left_forw.GetComponent.<Renderer>().material.SetTextureOffset("_Alpha",Vector2(0.5,0));
right_back.GetComponent.<Renderer>().material.mainTextureOffset=Vector2(0.5,0);
right_back.GetComponent.<Renderer>().material.SetTextureOffset("_Alpha",Vector2(0.5,0));
left_back.GetComponent.<Renderer>().material.mainTextureOffset=Vector2(0.5,0);
left_back.GetComponent.<Renderer>().material.SetTextureOffset("_Alpha",Vector2(0.5,0));
hide_back.GetComponent.<Renderer>().material.mainTextureOffset=Vector2(0.5,0);
hide_back.GetComponent.<Renderer>().material.SetTextureOffset("_Alpha",Vector2(0.5,0));
hide_forw.GetComponent.<Renderer>().material.mainTextureOffset=Vector2(0,0);
hide_forw.GetComponent.<Renderer>().material.SetTextureOffset("_Alpha",Vector2(0,0));
yield WaitForSeconds(0.1);}
}