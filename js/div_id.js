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