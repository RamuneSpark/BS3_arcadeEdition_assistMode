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

document.write( "<div id= mapBase> </div>" );
const div_mapBase = document.getElementById( "mapBase" );
defaultSet(div_mapBase,screen);
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
defaultSet(div_mark,div_map);
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