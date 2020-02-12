#pragma strict
public static var floor: int;
function Start () {
floor=1;
}

function Update () {
gameObject.GetComponent.<UI.Text>().text=floor.ToString();
if (Input.GetKeyDown(KeyCode.LeftControl)) floor-=1;
if (Input.GetKeyDown(KeyCode.Space)) floor+=1;
floor=Mathf.Clamp(floor,1,5);
}