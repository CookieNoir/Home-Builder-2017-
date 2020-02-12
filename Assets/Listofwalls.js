#pragma strict
var walls: Array;
var floors: Array;
var roofs: Array;
private var i: int;
private var j: int;
private var er: boolean;
public var wall_built: GameObject[];
public var floor_built: GameObject[];
public var roof_built: GameObject[];
function Start () {
walls=new Array();
er=false;}

function Update () {
WallFinder(); FloorFinder(); RoofReworker();
}

function WallFinder () {
if (instantiator.created==true) {walls=GameObject.FindGameObjectsWithTag("Wall");
wall_built=walls.ToBuiltin(GameObject);
er=false;
for (i=0;i<wall_built.length;i++)
{wall_built[i].GetComponent.<blockinfo>().left_forw.transform.localScale.x=1;
wall_built[i].GetComponent.<blockinfo>().right_forw.transform.localScale.x=1;
wall_built[i].GetComponent.<blockinfo>().left_back.transform.localScale.x=-1;
wall_built[i].GetComponent.<blockinfo>().right_back.transform.localScale.x=-1;
wall_built[i].GetComponent.<blockinfo>().up_back.transform.localScale.x=1;
wall_built[i].GetComponent.<blockinfo>().up_forw.transform.localScale.x=-1;
wall_built[i].GetComponent.<blockinfo>().hide_forw.SetActive(true);
wall_built[i].GetComponent.<blockinfo>().hide_back.SetActive(true);
}

for (i=0;i<wall_built.length;i++) {
for (j=0;j<wall_built.length;j++) {
if (wall_built[i].transform.rotation==Quaternion.Euler(0,0,0)) {
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(-0.5,0,0.5))
{wall_built[i].GetComponent.<blockinfo>().left_forw.transform.localScale.x=0.9; wall_built[i].GetComponent.<blockinfo>().up_forw.transform.localScale.x=-1.1; wall_built[i].GetComponent.<blockinfo>().hide_forw.SetActive(false);}
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(0.5,0,0.5))
{wall_built[i].GetComponent.<blockinfo>().right_forw.transform.localScale.x=0.9; wall_built[i].GetComponent.<blockinfo>().up_forw.transform.localScale.x=-1.1; wall_built[i].GetComponent.<blockinfo>().hide_forw.SetActive(false);}
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(-0.5,0,-0.5))
{wall_built[i].GetComponent.<blockinfo>().left_back.transform.localScale.x=-0.9; wall_built[i].GetComponent.<blockinfo>().up_back.transform.localScale.x=1.1; wall_built[i].GetComponent.<blockinfo>().hide_back.SetActive(false);}
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(0.5,0,-0.5))
{wall_built[i].GetComponent.<blockinfo>().right_back.transform.localScale.x=-0.9; wall_built[i].GetComponent.<blockinfo>().up_back.transform.localScale.x=1.1; wall_built[i].GetComponent.<blockinfo>().hide_back.SetActive(false);}
}
else {
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(-0.5,0,-0.5))
{wall_built[i].GetComponent.<blockinfo>().left_forw.transform.localScale.x=0.9; wall_built[i].GetComponent.<blockinfo>().up_forw.transform.localScale.x=-1.1; wall_built[i].GetComponent.<blockinfo>().hide_forw.SetActive(false);}
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(-0.5,0,0.5))
{wall_built[i].GetComponent.<blockinfo>().right_forw.transform.localScale.x=0.9; wall_built[i].GetComponent.<blockinfo>().up_forw.transform.localScale.x=-1.1; wall_built[i].GetComponent.<blockinfo>().hide_forw.SetActive(false);}
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(0.5,0,-0.5))
{wall_built[i].GetComponent.<blockinfo>().left_back.transform.localScale.x=-0.9; wall_built[i].GetComponent.<blockinfo>().up_back.transform.localScale.x=1.1; wall_built[i].GetComponent.<blockinfo>().hide_back.SetActive(false);}
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(0.5,0,0.5))
{wall_built[i].GetComponent.<blockinfo>().right_back.transform.localScale.x=-0.9; wall_built[i].GetComponent.<blockinfo>().up_back.transform.localScale.x=1.1; wall_built[i].GetComponent.<blockinfo>().hide_back.SetActive(false);}
}

if (wall_built[i].GetComponent.<blockinfo>().left_forw.transform.localScale.x==0.9&&wall_built[i].GetComponent.<blockinfo>().right_forw.transform.localScale.x==1)
wall_built[i].GetComponent.<blockinfo>().right_forw.transform.localScale.x=1.1;
if (wall_built[i].GetComponent.<blockinfo>().right_forw.transform.localScale.x==0.9&&wall_built[i].GetComponent.<blockinfo>().left_forw.transform.localScale.x==1)
wall_built[i].GetComponent.<blockinfo>().left_forw.transform.localScale.x=1.1;
if (wall_built[i].GetComponent.<blockinfo>().left_back.transform.localScale.x==-0.9&&wall_built[i].GetComponent.<blockinfo>().right_back.transform.localScale.x==-1)
wall_built[i].GetComponent.<blockinfo>().right_back.transform.localScale.x=-1.1;
if (wall_built[i].GetComponent.<blockinfo>().right_back.transform.localScale.x==-0.9&&wall_built[i].GetComponent.<blockinfo>().left_back.transform.localScale.x==-1)
wall_built[i].GetComponent.<blockinfo>().left_back.transform.localScale.x=-1.1;


if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(0,0,1)&&wall_built[i].transform.rotation==Quaternion.Euler(0,0,0))
wall_built[i].GetComponent.<blockinfo>().hide_forw.SetActive(false);
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(-1,0,0)&&wall_built[i].transform.rotation==Quaternion.Euler(0,-90,0))
wall_built[i].GetComponent.<blockinfo>().hide_forw.SetActive(false);
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(0,0,-1)&&wall_built[i].transform.rotation==Quaternion.Euler(0,0,0))
wall_built[i].GetComponent.<blockinfo>().hide_back.SetActive(false);
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(1,0,0)&&wall_built[i].transform.rotation==Quaternion.Euler(0,-90,0))
wall_built[i].GetComponent.<blockinfo>().hide_back.SetActive(false);

if (wall_built[i].transform.position==wall_built[j].transform.position&&i!=j) {er=true; break;}

}
if (er==true) {Destroy(wall_built[i]); Destroy(wall_built[j]); break;}}
for (i=0;i<wall_built.length;i++)
for (j=0;j<wall_built.length;j++)
{if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(0,0,1)&&wall_built[i].transform.rotation==Quaternion.Euler(0,0,0)&&wall_built[i].GetComponent.<blockinfo>().right_forw.transform.localScale.x==1.1)
{wall_built[i].GetComponent.<blockinfo>().right_forw.transform.localScale.x=1; wall_built[j].GetComponent.<blockinfo>().right_back.transform.localScale.x=-1;}
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(0,0,1)&&wall_built[i].transform.rotation==Quaternion.Euler(0,0,0)&&wall_built[i].GetComponent.<blockinfo>().left_forw.transform.localScale.x==1.1)
{wall_built[i].GetComponent.<blockinfo>().left_forw.transform.localScale.x=1; wall_built[j].GetComponent.<blockinfo>().left_back.transform.localScale.x=-1;}
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(-1,0,0)&&wall_built[i].transform.rotation==Quaternion.Euler(0,-90,0)&&wall_built[i].GetComponent.<blockinfo>().right_forw.transform.localScale.x==1.1)
{wall_built[i].GetComponent.<blockinfo>().right_forw.transform.localScale.x=1; wall_built[j].GetComponent.<blockinfo>().right_back.transform.localScale.x=-1;}
if (wall_built[i].transform.position==wall_built[j].transform.position+Vector3(-1,0,0)&&wall_built[i].transform.rotation==Quaternion.Euler(0,-90,0)&&wall_built[i].GetComponent.<blockinfo>().left_forw.transform.localScale.x==1.1)
{wall_built[i].GetComponent.<blockinfo>().left_forw.transform.localScale.x=1; wall_built[j].GetComponent.<blockinfo>().left_back.transform.localScale.x=-1;}}

instantiator.created=false;
if (er==true) instantiator.created=true;
yield WaitForSeconds(0.1);
}
}

function FloorFinder () {
if (Instncefllor.created==true&&Instncefllor.roof==false) {floors=GameObject.FindGameObjectsWithTag("Floor");
floor_built=floors.ToBuiltin(GameObject);
er=false;
for (i=0;i<floor_built.length;i++) {
for (j=0;j<floor_built.length;j++)
{if (floor_built[i].transform.position==floor_built[j].transform.position&&i!=j) {er=true; break;}}
if (er==true) {Destroy(floor_built[i]); Destroy(floor_built[j]); break;}}
Instncefllor.created=false;
if (er==true) Instncefllor.created=true;
yield WaitForSeconds(0.1);
}
}

function RoofReworker () {
if (Instncefllor.created==true&&Instncefllor.roof==true) {roofs=GameObject.FindGameObjectsWithTag("Roof");
roof_built=roofs.ToBuiltin(GameObject);
er=false;
for (i=0;i<roof_built.length;i++) {
roof_built[i].GetComponent.<roofremesh>().zplus=0;
roof_built[i].GetComponent.<roofremesh>().zminus=0;
roof_built[i].GetComponent.<roofremesh>().xplus=0;
roof_built[i].GetComponent.<roofremesh>().xminus=0;
}
for (i=0;i<roof_built.length;i++) {
for (j=0;j<roof_built.length;j++)
{
if (roof_built[i].transform.position==roof_built[j].transform.position+Vector3(0,0,-1)) roof_built[i].GetComponent.<roofremesh>().zplus=1;
if (roof_built[i].transform.position==roof_built[j].transform.position+Vector3(0,0,1)) roof_built[i].GetComponent.<roofremesh>().zminus=1;
if (roof_built[i].transform.position==roof_built[j].transform.position+Vector3(1,0,0)) roof_built[i].GetComponent.<roofremesh>().xminus=1;
if (roof_built[i].transform.position==roof_built[j].transform.position+Vector3(-1,0,0)) roof_built[i].GetComponent.<roofremesh>().xplus=1;

if (roof_built[i].GetComponent.<roofremesh>().zplus==0&&roof_built[i].GetComponent.<roofremesh>().zminus==0&&roof_built[i].GetComponent.<roofremesh>().xminus==0&&roof_built[i].GetComponent.<roofremesh>().xplus==0)
roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().full;

if (roof_built[i].GetComponent.<roofremesh>().zplus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().stacklow; roof_built[i].transform.rotation=Quaternion.Euler(-90,90,0);}
if (roof_built[i].GetComponent.<roofremesh>().zminus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().stacklow; roof_built[i].transform.rotation=Quaternion.Euler(-90,-90,0);}
if (roof_built[i].GetComponent.<roofremesh>().xplus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().stacklow; roof_built[i].transform.rotation=Quaternion.Euler(-90,180,0);}
if (roof_built[i].GetComponent.<roofremesh>().xminus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().stacklow; roof_built[i].transform.rotation=Quaternion.Euler(-90,0,0);}

if (roof_built[i].GetComponent.<roofremesh>().zplus==1&&roof_built[i].GetComponent.<roofremesh>().zminus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().walllow; roof_built[i].transform.rotation=Quaternion.Euler(-90,90,0);}
if (roof_built[i].GetComponent.<roofremesh>().xplus==1&&roof_built[i].GetComponent.<roofremesh>().xminus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().walllow; roof_built[i].transform.rotation=Quaternion.Euler(-90,0,0);}

if (roof_built[i].GetComponent.<roofremesh>().zplus==1&&roof_built[i].GetComponent.<roofremesh>().xplus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().cornerlow; roof_built[i].transform.rotation=Quaternion.Euler(-90,0,0);}
if (roof_built[i].GetComponent.<roofremesh>().zminus==1&&roof_built[i].GetComponent.<roofremesh>().xplus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().cornerlow; roof_built[i].transform.rotation=Quaternion.Euler(-90,90,0);}
if (roof_built[i].GetComponent.<roofremesh>().zminus==1&&roof_built[i].GetComponent.<roofremesh>().xminus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().cornerlow; roof_built[i].transform.rotation=Quaternion.Euler(-90,180,0);}
if (roof_built[i].GetComponent.<roofremesh>().zplus==1&&roof_built[i].GetComponent.<roofremesh>().xminus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().cornerlow; roof_built[i].transform.rotation=Quaternion.Euler(-90,-90,0);}

if (roof_built[i].GetComponent.<roofremesh>().xplus==1&&roof_built[i].GetComponent.<roofremesh>().xminus==1&&roof_built[i].GetComponent.<roofremesh>().zminus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().tlow; roof_built[i].transform.rotation=Quaternion.Euler(-90,0,0);}
if (roof_built[i].GetComponent.<roofremesh>().zplus==1&&roof_built[i].GetComponent.<roofremesh>().xminus==1&&roof_built[i].GetComponent.<roofremesh>().zminus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().tlow; roof_built[i].transform.rotation=Quaternion.Euler(-90,90,0);}
if (roof_built[i].GetComponent.<roofremesh>().xplus==1&&roof_built[i].GetComponent.<roofremesh>().xminus==1&&roof_built[i].GetComponent.<roofremesh>().zplus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().tlow; roof_built[i].transform.rotation=Quaternion.Euler(-90,180,0);}
if (roof_built[i].GetComponent.<roofremesh>().zplus==1&&roof_built[i].GetComponent.<roofremesh>().xplus==1&&roof_built[i].GetComponent.<roofremesh>().zminus==1) {roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().tlow; roof_built[i].transform.rotation=Quaternion.Euler(-90,-90,0);}

if (roof_built[i].GetComponent.<roofremesh>().zplus==1&&roof_built[i].GetComponent.<roofremesh>().zminus==1&&roof_built[i].GetComponent.<roofremesh>().xminus==1&&roof_built[i].GetComponent.<roofremesh>().xplus==1)
roof_built[i].GetComponent.<MeshFilter>().mesh=gameObject.GetComponent.<roof_mesh_collection>().cross;

if (roof_built[i].transform.position==roof_built[j].transform.position&&i!=j) {er=true; break;}}

if (er==true) {Destroy(roof_built[i]); Destroy(roof_built[j]); break;}}
Instncefllor.created=false;
if (er==true) Instncefllor.created=true;
yield WaitForSeconds(0.1);
}
}