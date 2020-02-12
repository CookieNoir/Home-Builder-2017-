import System;
#pragma strict
public var alllayer: GameObject;
public var obja: GameObject;
public var objb: GameObject;
var message: GameObject;
function Screenshot () {
gameObject.transform.position.x+=100;
obja.transform.position.x+=100;
objb.transform.position.x+=100;
alllayer.SetActive(false);
Application.CaptureScreenshot("screenshot_"+System.DateTime.Now.Hour+"_"+System.DateTime.Now.Minute+"_"+System.DateTime.Now.Second+".png");
message.SetActive(true);
}
