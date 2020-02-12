#pragma strict
public var number: int;
function Typechange() {
allowbuilding.blocktype=number;
allowbuilding.cycle=true;
}
function floorinst () {
Instncefllor.roof=false;
}
function roofinst () {
Instncefllor.roof=true;
}