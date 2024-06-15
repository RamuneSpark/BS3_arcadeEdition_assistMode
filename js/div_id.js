//背景
document.write( "<div id= bg> </div>" );
const div_bg = document.getElementById( "bg" );
defaultSet(div_bg,screen);
////プロパティ
putXY(div_bg,"50%","50%")
translate(div_bg, Center,Center)
div_bg.style.zIndex = 0;
////出力
setImage(div_bg,"");

let aShift = 0;

let statusLo = {y:-768,t:0};
document.write( "<div id= status> </div>" );
const div_status = document.getElementById( "status" );
defaultSet(div_status,screen);
////プロパティ
putXY(div_status,0,statusLo.y)
transform(div_status, Left,Left,0,100)
div_status.style.zIndex = 1001;
////出力
setImage(div_status,"");

document.write( "<div id= mapBaseNeo> </div>" );
const div_mapBaseNeo = document.getElementById( "mapBaseNeo" );
defaultSet(div_mapBaseNeo,screen);
////プロパティ
putXY(div_mapBaseNeo,"50%","50%")
transform(div_mapBaseNeo, Center,Center,0,100)
div_mapBaseNeo.style.zIndex = 1000;
////出力
setImage(div_mapBaseNeo,"");

document.write( "<div id= mapBase> </div>" );
const div_mapBase = document.getElementById( "mapBase" );
defaultSet(div_mapBase,div_mapBaseNeo);
////プロパティ
putXY(div_mapBase,"50%","50%")
transform(div_mapBase, Center,Center,0,100)
div_mapBase.style.zIndex = 1001;
div_mapBase.style.overflow = "hidden";
////出力
setImage(div_mapBase,"");

let mapLo = {x:50,y:50};
document.write( "<div id= map> </div>" );
const div_map = document.getElementById( "map" );
defaultSet(div_map,screen);
////プロパティ
transform(div_map, Center,Center,0,100)
div_map.style.zIndex = 1002;
////出力
setImage(div_map,"");

let markLo = {x:50,y:50};
document.write( "<div id= mark> </div>" );
const div_mark = document.getElementById( "mark" );
defaultSet(div_mark,div_mapBase);
////プロパティ
putXY(div_mark,50+"%",50+"%")
transform(div_mark, Center,Center,0,100)
div_mark.style.zIndex = 2000;
////出力
setImage(div_mark,"");

//コピペ・テスト用 文字
document.write( "<div id= text> </div>" );
const div_text = document.getElementById( "text" );
defaultSet(div_text,screen);
////プロパティ
putXY(div_text,"100%","100%")
translate(div_text,Right,Bottom);
fontSet(div_text,"#FFFFFF","Higashi","20","normal","right")
div_text.style.zIndex = 10000;
////出力
setText(div_text,"");

document.write( "<div id= errorText> </div>" );
const div_errorText = document.getElementById( "errorText" );
defaultSet(div_errorText,mapBaseNeo);
////プロパティ
putXY(div_errorText,"50%",-10)
translate(div_errorText,Center,Bottom);
fontSet(div_errorText,"#FFFFFF","Higashi","15","bold","right")
div_errorText.style.zIndex = 10000;
////出力
setText(div_errorText,"");

document.write( "<div id= tapNavi> </div>" );
const div_tapNavi = document.getElementById( "tapNavi" );
defaultSet(div_tapNavi,mapBaseNeo);
////プロパティ
putXY(div_tapNavi,"50%","102%")
translate(div_tapNavi,Center,Top);
fontSet(div_tapNavi,"#FFFFFF","Higashi","15","bold","center")
div_tapNavi.style.zIndex = 10000;
////出力
setText(div_tapNavi,"");

document.write( "<div id= tapCa> </div>" );
const div_tapCa = document.getElementById( "tapCa" );
defaultSet(div_tapCa,screen);
////プロパティ
putXY(div_tapCa,"5%","95%")
translate(div_tapCa,Left,Bottom);
div_tapCa.style.zIndex = 10000;
////出力
setText(div_tapCa,"");

function textErrorColor(){

    let a = (Math.sin(t*0.1)*56+200);


 a = Math.round(a);

    return "rgb(256,"+a+","+a+")";

}