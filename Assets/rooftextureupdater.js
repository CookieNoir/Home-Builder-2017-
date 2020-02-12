#pragma strict

function Start () {
	if (GameObject.FindWithTag("texturev").GetComponent.<UI.RawImage>().texture!=null)
gameObject.GetComponent.<Renderer>().material.mainTexture=GameObject.FindWithTag("texturev").GetComponent.<UI.RawImage>().texture;
}
