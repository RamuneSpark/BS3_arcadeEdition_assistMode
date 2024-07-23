//背景
let BGX = 0;

document.write( "<div id= bg> </div>" );
const div_bg = document.getElementById( "bg" );
defaultSet(div_bg,screen);
////プロパティ
putXY(div_bg,0,0)
translate(div_bg, Left,Top)
div_bg.style.zIndex = 0;
////出力
setImage(div_bg,"");

document.write( "<div id= bg2> </div>" );
const div_bg2 = document.getElementById( "bg2" );
defaultSet(div_bg2,screen);
////プロパティ
putXY(div_bg2,0,0)
translate(div_bg2, Left,Top)
div_bg2.style.zIndex = 0;
////出力
setImage(div_bg2,"");

let aShift = 0;

let statusLo = {y:-768,t:0};
document.write( "<div id= status> </div>" );
const div_status = document.getElementById( "status" );
defaultSet(div_status,screen);
////プロパティ
putXY(div_status,0,statusLo.y)
transform(div_status, Left,Left,0,100)
div_status.style.zIndex = 10000000;
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

let mapBaseNeoOpacity = 1;

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
div_map.style.overflow = "hidden";
////出力
setImage(div_map,"");

document.write( "<div id= mapNo> </div>" );
const div_mapNo = document.getElementById( "mapNo" );
defaultSet(div_mapNo,div_map);
////プロパティ
putXY(div_mapNo, "50%","0%")
transform(div_mapNo, Center,Top,0,100)
div_mapNo.style.zIndex = 2001;
div_mapNo.style.overflow = "hidden";
////出力
setImage(div_mapNo,"");

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
setImage(div_errorText,"");

document.write( "<div id= tapNavi> </div>" );
const div_tapNavi = document.getElementById( "tapNavi" );
defaultSet(div_tapNavi,screen);
////プロパティ
putXY(div_tapNavi,"50%","65%")
translate(div_tapNavi,Center,Top);
fontSet(div_tapNavi,"#FFFFFF","Higashi","15","bold","center")
div_tapNavi.style.zIndex = 10000;
////出力
setImage(div_tapNavi,"");

document.write( "<div id= caLine> </div>" );
const div_caLine = document.getElementById( "caLine" );
defaultSet(div_caLine,screen);
////プロパティ
putXY(div_caLine,"50%",0)
translate(div_caLine,Center,Center);
div_caLine.style.zIndex = 1000;
////出力
setImage(div_caLine,"");

document.write( "<div id= tapCa> </div>" );
const div_tapCa = document.getElementById( "tapCa" );
defaultSet(div_tapCa,screen);
////プロパティ
putXY(div_tapCa,"5%","95%")
translate(div_tapCa,Left,Bottom);
div_tapCa.style.zIndex = 10000;
////出力
setImage(div_tapCa,"");

document.write( "<div id= touchStart> </div>" );
const div_touchStart = document.getElementById( "touchStart" );
defaultSet(div_touchStart,screen);
////プロパティ
putXY(div_touchStart,"50%","95%")
translate(div_touchStart,Center,Bottom);
div_touchStart.style.zIndex = 10000;
////出力
setImage(div_touchStart,"");

let startX = 0;

for(let i = 0; i < 30; i++){

    startX += 0.05*i;

}

let startV = 0.05*30;


let jReqOpacity = 1;
document.write( "<div id= tapJReq> </div>" );
const div_tapJReq = document.getElementById( "tapJReq" );
defaultSet(div_tapJReq,screen);
////プロパティ
putXY(div_tapJReq,"95%","5%")
translate(div_tapJReq,Right,Top);
div_tapJReq.style.zIndex = 10000;
////出力
setImage(div_tapJReq,"");

let cus_Rotate = 0;
let cus_RotateV = 0;

document.write( "<div id= tapCustom> </div>" );
const div_tapCustom = document.getElementById( "tapCustom" );
defaultSet(div_tapCustom,screen);
////プロパティ
putXY(div_tapCustom,"95%","95%")
transform(div_tapCustom,Right,Bottom,0,100);
div_tapCustom.style.zIndex = 10000;
////出力
setImage(div_tapCustom,"");

document.write( "<div id= tapCustomNavi> </div>" );
const div_tapCustomNavi = document.getElementById( "tapCustomNavi" );
defaultSet(div_tapCustomNavi,screen);
////プロパティ
putXY(div_tapCustomNavi,"90%","87%")
transform(div_tapCustomNavi,Right,Bottom,0,100);
div_tapCustomNavi.style.zIndex = 10000;
////出力
setImage(div_tapCustomNavi,"");

document.write( "<div id= tapCustomNaviText> </div>" );
const div_tapCustomNaviText = document.getElementById( "tapCustomNaviText" );
defaultSet(div_tapCustomNaviText,div_status);
////プロパティ
putXY(div_tapCustomNaviText,"50%","65%")
translate(div_tapCustomNaviText,Center,Bottom);
fontSet(div_tapCustomNaviText,"#5894D0","Higashi","15","bold","left")
div_tapCustomNaviText.style.zIndex = 10000;
//textEdge(div_tapCustomNaviText,2,"#000000")
////出力
setText(div_tapCustomNaviText,"");

let allowSound = 0;
document.write( "<div id= tapSound> </div>" );
const div_tapSound = document.getElementById( "tapSound" );
defaultSet(div_tapSound,div_status);
////プロパティ
putXY(div_tapSound,"95%","92%")
transform(div_tapSound,Right,Bottom,0,100);
div_tapSound.style.zIndex = 10000;
////出力
setImage(div_tapSound,"");

document.write( "<div id= tapCustom2> </div>" );
const div_tapCustom2 = document.getElementById( "tapCustom2" );
defaultSet(div_tapCustom2,div_tapCustom);
////プロパティ
putXY(div_tapCustom2,"0%","0%")
transform(div_tapCustom2,Left,Left,0,100);
div_tapCustom2.style.zIndex = 10000;
////出力
setImage(div_tapCustom2,"");

document.write( "<div id= customText> </div>" );
const div_customText = document.getElementById( "customText" );
defaultSet(div_customText,div_status);
////プロパティ
putXY(div_customText,"50%","20%")
translate(div_customText,Center,Center);
fontSet(div_customText,"#FFFFFF","Higashi","30","bold","center")
div_customText.style.zIndex = 10000;
textEdge(div_customText,2,"#000000")
////出力
setText(div_customText,"");

document.write( "<div id= custom> </div>" );
const div_custom = document.getElementById( "custom" );
defaultSet(div_custom,div_status);
////プロパティ
putXY(div_custom,"50%","40%")
translate(div_custom,Center,Center);
div_custom.style.zIndex = 10000;
////出力
setImage(div_custom,"");

document.write( "<div id= custom2> </div>" );
const div_custom2 = document.getElementById( "custom2" );
defaultSet(div_custom2,div_custom);
////プロパティ
putXY(div_custom2,"0%","0%")
translate(div_custom2,Left,Top);
div_custom2.style.zIndex = 10000;
////出力
setImage(div_custom2,"");

const colorName = ["yellow","pink","green","blue"];
let div_customColor = [];
let cn = 0;
let customColorOpacity = [];

for(let i = 0; i < colorName.length; i++){
document.write( "<div id= customColor"+i+"> </div>" );
div_customColor[i] = document.getElementById( "customColor"+i );
defaultSet(div_customColor[i],div_status);
////プロパティ
putXY(div_customColor[i],((i+1)/(colorName.length+1))*100+"%","60%")
transform(div_customColor[i],Center,Center,0,70);
div_customColor[i].style.zIndex = 10000;
////出力
setImage(div_customColor[i],"");
customColorOpacity[i] = 1;
}

let team = null;
let div_teamSelect = [];
let te = 0;
for(let i = 0; i < 2; i++){
document.write( "<div id= teamSelect"+i+"> </div>" );
div_teamSelect[i] = document.getElementById( "teamSelect"+i );
defaultSet(div_teamSelect[i],screen);
////プロパティ
transform(div_teamSelect[i],Center,Center,0,120);
div_teamSelect[i].style.zIndex = 1000000;
////出力
setImage(div_teamSelect[i],"");

}
putXY(div_teamSelect[0],"50%","43%")
putXY(div_teamSelect[1],"50%","63%")

document.write( "<div id= vs> </div>" );
const div_vs = document.getElementById( "vs" );
defaultSet(div_vs,screen);
////プロパティ
putXY(div_vs,"50%","53.5%")
transform(div_vs,Center,Center,0,120);
div_vs.style.zIndex = 10000;
////出力
setImage(div_vs,"");

document.write( "<div id= teamText> </div>" );
const div_teamText = document.getElementById( "teamText" );
defaultSet(div_teamText,screen);
////プロパティ
putXY(div_teamText,"50%","30%")
translate(div_teamText,Center,Center);
fontSet(div_teamText,"#FFFFFF","Higashi","18","bold","center")
div_teamText.style.zIndex = 10000;
textEdge(div_teamText,2,"#000000")
////出力
setText(div_teamText,"");

const customName = ["","ribbon","samurai","cat","pirate","zonk","cry","paint","racquet","japan"];
const customJapaneseName = ["いつもの","れでぃー","ちょんまげ","ねこ","かいぞく","さんぐらす","なきむし","ぺいんたー","らけっとぼーる","てんかいち"];
let div_customSelect = [];
let cS = 0;
let customSelectOpacity = [0,0];
let customSelctFrame = {p:0,k:0};

for(let i = 0; i < 2; i++){
document.write( "<div id= customSelect"+i+"> </div>" );
div_customSelect[i] = document.getElementById( "customSelect"+i );
defaultSet(div_customSelect[i],div_status);
////プロパティ
putXY(div_customSelect[i],(25+(50*i))+"%","40%")
translate(div_customSelect[i],Center,Center);
div_customSelect[i].style.zIndex = 10000;
////出力
setImage(div_customSelect[i],"");
}

document.write( "<div id= customText2> </div>" );
const div_customText2 = document.getElementById( "customText2" );
defaultSet(div_customText2,div_status);
////プロパティ
putXY(div_customText2,"80%","52%")
translate(div_customText2,Right,Bottom);
fontSet(div_customText2,"#FFFFFF","Higashi","20","bold","center")
div_customText2.style.zIndex = 10000;
textEdge(div_customText2,2,"#000000")
////出力
setText(div_customText2,"");

document.write( "<div id= customText3> </div>" );
const div_customText3 = document.getElementById( "customText3" );
defaultSet(div_customText3,div_status);
////プロパティ
putXY(div_customText3,"20%","52%")
translate(div_customText3,Left,Bottom);
fontSet(div_customText3,"#FFFFFF","Higashi","30","bold","center")
div_customText3.style.zIndex = 10000;
textEdge(div_customText3,2,"#000000")
////出力
setText(div_customText3,"");

document.write( "<div id= customColorSet> </div>" );
const div_customColorSet = document.getElementById( "customColorSet" );
defaultSet(div_customColorSet,div_status);
////プロパティ
putXY(div_customColorSet,"50%","40%")
transform(div_customColorSet,Center,Center,0,70);
div_customColorSet.style.zIndex = 10001;
////出力
setImage(div_customColorSet,"");

customColorOK_opacity = 1;
document.write( "<div id= customColorOK> </div>" );
const div_customColorOK = document.getElementById( "customColorOK" );
defaultSet(div_customColorOK,div_status);
////プロパティ
putXY(div_customColorOK,"50%","75%")
translate(div_customColorOK,Center,Center);
div_customColorOK.style.zIndex = 10001;
////出力
setImage(div_customColorOK,"");

document.write( "<div id= tapHowTo> </div>" );
const div_tapHowTo = document.getElementById( "tapHowTo" );
defaultSet(div_tapHowTo,screen);
////プロパティ
putXY(div_tapHowTo,"95%","35%")
translate(div_tapHowTo,Right,Bottom);
div_tapHowTo.style.zIndex = 10000;
////出力
setImage(div_tapHowTo,"");

function textErrorColor(){

    let a = (Math.sin(t*0.1)*56+200);


 a = Math.round(a);

    return "rgb(256,"+a+","+a+")";

}

let div_floor = [];
for(let i = 0; i < 11; i++){
    div_floor[i] = [];
    for(let j = 0; j < 17; j++){
    document.write( "<div id= floor"+i+"_"+j+"> </div>" );
    div_floor[i][j] = document.getElementById( "floor"+i+"_"+j );
    defaultSet(div_floor[i][j],div_map);
    
    ////プロパティ
    putXY(div_floor[i][j],
        (1440*0.5+92*(j-8))*(300/1440),
        (960*0.5+92*(i-5)+40)*(200/960))
    translate(div_floor[i][j], Center,Center)
    div_floor[i][j].style.zIndex = 1;
    div_floor[i][j].style.mixBlendMode = "normal";
        setImage(div_floor[i][j],"");
    ////出力
    
    }
    }

    let stageMap = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];