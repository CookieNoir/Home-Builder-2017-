#pragma strict
public var blocks: GameObject[];
public static var allow: boolean;
public static var blocktype: int;
public static var cycle: boolean;
private var i: int;
function Start () {
blocktype=0;
allow=false;
cycle=true;
}
function Update () {
if (cycle==true)
{for (i=0; i<blocks.length;i++)
	blocks[i].SetActive(false);
blocks[blocktype].SetActive(true);
cycle=false;}
}
function Allow() {
allow=!allow;
}