#pragma strict
private var a:boolean = false;
private var t: float;
var cam: GameObject;
var buta: GameObject;
var butb: GameObject;
function FixedUpdate () {
	if (gameObject.transform.localPosition.x>-145&&!a) gameObject.transform.localPosition.x-=2;
	if (gameObject.transform.localPosition.x<=-145) t+=Time.deltaTime;
	if (t>2) a=true;
	if (gameObject.transform.localPosition.x<80&&a) gameObject.transform.localPosition.x+=2;
	if (gameObject.transform.localPosition.x>=80&&a) {a=false; t=0; cam.GetComponent.<photo>().alllayer.SetActive(true);
	 cam.transform.position.x-=100;
	 buta.transform.position.x-=100;
	 butb.transform.position.x-=100;
	  gameObject.SetActive(false);}
}
