//ここに書いてある項目が1/50秒に1回実行されます。
function run(){
    
if(error === 1 && scene !== "error"){

    nextScene = "error";

}

    if(scene !== "ca" && scene !== "howTo" && scene !== "error"){
    if(aShift == 0 && bs == 0){
        statusLo.t += 0.04;
    
            statusLo.y = Math.sin(statusLo.t)*115-768;
    
            if(statusLo.t >= Math.PI*(1/2)){
    
                aShift = 1;
                statusLo.t = 0;
                statusLo.y = 115-768;
    
            }
    
        }else if(aShift == 2 && bs == 0){
            //さらに下に下がる
        statusLo.t += 0.04;
    
            statusLo.y = Math.sin(statusLo.t)*(768-115)-(768-115);
    
            if(statusLo.t >= Math.PI*(1/2)){
    
                aShift = 3;
                statusLo.t = Math.PI*(1/2);
                statusLo.y = 0;
    
            }
    
        }else if(aShift == 4 && bs == 0){
            //上に上がる
        statusLo.t += 0.04;
    
            statusLo.y = Math.sin(statusLo.t)*(768-115)-(768-115);
    
            if(statusLo.t >= Math.PI){
    
                aShift = 1;
                statusLo.t = 0;
                statusLo.y = 115-768;
    
            }
    
        }

            setImage(div_status,"image/statusBar.png");
        }
        
if(cus_Rotate !== 0){
cus_Rotate += cus_RotateV;
cus_RotateV -= 0.75;
}

if(cus_RotateV !== 0 && cus_RotateV <= 3){

    cus_RotateV = 3;

    if(cus_Rotate >= 360){

        cus_Rotate = 0;
        cus_RotateV = 0;

    }

}

cus_Rotate = cus_Rotate%360;


        transform(div_tapCustom,Right,Bottom,cus_Rotate,100);

if(scene === "twinkle"){

if(bs == -100){

    setImage(div_mapBase,"image/mapBase.png");
    setImage(div_mapBaseNeo,"image/mapBaseNeo.png");
    setImage(div_map,"image/map.png");

    for(let i = 0; i < 11; i++){for(let j = 0; j < 17; j++){

        div_map.appendChild(div_floor[i][j]);

        }}

    div_mapBaseNeo.appendChild(div_mapBase);
    div_mapBase.appendChild(div_map);
    div_mapBase.appendChild(div_mark);
    div_mapBaseNeo.appendChild(div_errorText);
    div_mapBaseNeo.appendChild(div_tapNavi);

    div_status.appendChild(div_tapSound);

    div_status.appendChild(div_customText);
    div_status.appendChild(div_customText2);
    div_status.appendChild(div_customText3);
    div_status.appendChild(div_custom);
    div_status.appendChild(div_customColorSet);
    div_status.appendChild(div_customColorOK);
    for(let i = 0; i <colorName.length; i++){
        div_status.appendChild(div_customColor[i]);
    }

    for(let i = 0; i < 2; i++){
        div_status.appendChild(div_customSelect[i]);
    }
    
}

BGX -= 0.3;

if(BGX <= -380){

    BGX += 380;

}

    putXY(div_status,0,statusLo.y)

    putXY(div_bg,BGX,0)
    putXY(div_bg2,BGX + 380,0)

    setImage(div_bg,"image/bg.jpg")
    setImage(div_bg2,"image/bg.jpg")
    

    for(let i = 0; i < 11; i++){for(let j = 0; j < 17; j++){

        if(stageMap[i][j] !== 0){
            setImage(div_floor[i][j],"image/block.png");
        }else{
            Remove(div_floor[i][j]);
        }


    }}
    

 
    setText(div_text,[hostScene,playingBattle]); 
   
   


    markLo.y = heightGyro();
    markLo.x = widthGyro();
    
    mapLo.y = 100 - markLo.y;
    mapLo.x = 100 - markLo.x;



    putXY(div_map,(330/2)+(300)*(mapLo.x-50)*0.01,(220/2)+(200)*(mapLo.y-50)*0.01)

    setImage(div_mark,"image/mark.png");

    if(beta >= 90){
    fontSet(div_errorText,textErrorColor(),"Higashi","15","bold","right")
    setText(div_errorText,"デバイスを"+Rb("上","うえ")+"に"+Rb("向","む")+"けないでください！");
    }else{
        Remove(div_errorText);
    }

    if(mapBaseNeoOpacity >= 1){
    setText(div_tapNavi,""+Rb("上","うえ")+"のスクリーンエリアをタップすると、<br>"+Rb("黄色","きいろ")+"のマークに"+Rb("向","む")+"かってツインクルを"+Rb("発射","はっしゃ")+"します。");
    }else{
        Remove(div_tapNavi);
    
    }

    putXY(div_tapCa,"5%","95%")
    setImage(div_tapCa,"image/ca.png");
    translate(div_tapCa,Left,Bottom);

    setImage(div_tapCustom,"image/twinkle/"+colorName[cn]+"0.png");

    div_tapCustom.appendChild(div_tapCustom2);

    if(customName[cS] === ""){
        Remove(div_tapCustom2);
    }else{
        setImage(div_tapCustom2,"image/twinkle/"+customName[cS]+".png");        
    }

    setImage(div_custom,"image/twinkle/"+colorName[cn]+"0.png");

    div_custom.appendChild(div_custom2);

    if(customName[cS] === ""){
        Remove(div_custom2);
    }else{
        setImage(div_custom2,"image/twinkle/"+customName[cS]+".png");        
    }


    for(let i = 0; i < colorName.length; i++){

        customColorOpacity[i] += 0.05;

        if(customColorOpacity[i] >= 1){
            customColorOpacity[i] = 1;
        }

        div_customColor[i].style.opacity = customColorOpacity[i];
        setImage(div_customColor[i],"image/twinkle/"+colorName[i]+"0.png");
    }

    putXY(div_customColorSet,((cn+1)/(colorName.length+1))*100+"%","60%")
    setImage(div_customColorSet,"image/twinkle/set.png");

    setImage(div_customColorOK,"image/customOK.png");

    setText(div_customText,"カスタムしてね！");

    setText(div_customText2,customJapaneseName[cS]);
    
    if(cS+1 < 10){
    setText(div_customText3,"0"+(cS+1));
    }else{
    setText(div_customText3,(cS+1));
        
    }

    customColorOK_opacity += 0.05;

    if(customColorOK_opacity >= 1){
        customColorOK_opacity = 1;

    }
    div_customColorOK.style.opacity = customColorOK_opacity;

    animeFrame(customSelctFrame,6,3)

    for(let i = 0; i < 2; i++){

        customSelectOpacity[i] += 0.05;

        if(customSelectOpacity[i] >= 1){
            customSelectOpacity[i] = 1;
        }

        div_customSelect[i].style.opacity = customSelectOpacity[i];
        
setImage(div_customSelect[i],"image/twinkle/select"+i+"_"+customSelctFrame.p+".png");
    }

    setImage(div_tapSound,"image/sound"+allowSound+".png");



    mapBaseNeoOpacity+=0.03;

if(mapBaseNeoOpacity >= 1){

    mapBaseNeoOpacity = 1;

}



if((team === null && playingBattle ==1 && (hostScene == "game" || hostScene == "start" || hostScene == "draw" || hostScene == "scoreBoard")) || (hostScene === "battleInfo" || hostScene === "battleRule" || hostScene === "battleStage")){
    te++;
    for(let i = 0; i < 2; i++){
    
    setImage(div_teamSelect[i],"image/"+(i+1)+"p.png");

    if(team === i){
        transform(div_teamSelect[i],Center,Center,0,(Math.cos(te*0.16))*12+168);
        div_teamSelect[i].style.opacity = 1;
    }else{
        transform(div_teamSelect[i],Center,Center,0,130);
        div_teamSelect[i].style.opacity = 0.7;
    }

    }

    putXY(div_teamSelect[0],"50%","43%")
    putXY(div_teamSelect[1],"50%","63%")

    setImage(div_vs,"image/vs.png");
    div_mapBaseNeo.style.opacity = 0;
    Remove(div_tapHowTo);
    setText(div_teamText,"チームを"+Rb("選択","せんたく")+"してください！");


}else{

    if(team !== null && playingBattle ==1 && (hostScene == "game" || hostScene == "start" || hostScene == "draw" || hostScene == "scoreBoard" || hostScene == "victory")){

        Remove(div_teamSelect[1]);
        setImage(div_teamSelect[0],"image/"+(team+1)+"p.png");
        div_teamSelect[0].style.opacity = 1;
        putXY(div_teamSelect[0],"30%","80%")
        transform(div_teamSelect[0],Center,Center,0,130);
    

    }else{
    for(let i = 0; i < 2; i++){
    
        Remove(div_teamSelect[i]);
        }
    }

    
    div_mapBaseNeo.style.opacity = mapBaseNeoOpacity;
    Remove(div_vs);
    setImage(div_tapHowTo,"image/howTo.png");
    Remove(div_teamText);


}

    
}else if(scene === "ca"){

    
    putXY(div_tapCa,"50%","95%")
    putXY(div_bg,0,0)
    setImage(div_bg,"image/bgCa.jpg")
    setImage(div_tapCa,"image/caOK.png");
    translate(div_tapCa,Center,Bottom);

    jReqOpacity += 0.05;

    if(jReqOpacity >= 1){
        jReqOpacity = 1;
    }

    if(window.DeviceOrientationEvent){
        if(DeviceOrientationEvent.requestPermission){
            div_tapJReq.style.opacity = jReqOpacity;
    setImage(div_tapJReq,"image/jReq.png");
        }}

}else if(scene === "howTo"){

    putXY(div_tapCa,"50%","95%")
    putXY(div_bg,0,0)
    setImage(div_bg,"image/bgHowTo.jpg")
    setImage(div_tapCa,"image/caOK.png");
    translate(div_tapCa,Center,Bottom);


}else if(scene === "error"){

    putXY(div_bg,0,0)
    setImage(div_bg,"image/bgError.jpg")
    


}

}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

let teamData = localStorage.getItem("bs3_assistData_621820623");
teamData = JSON.parse(teamData);

if(teamData !== null){

    if(id !== teamData[0]){
        teamData = null;
        team = null;
        localStorage.removeItem("bs3_assistData_621820623");
    }else{
        team = teamData[1];
        te = 0;
        
    }

}
console.log(teamData);


const socket = io("https://bs3-arcade-server-assist-page.glitch.me/");            

socket.on('checkApp', (e) => {
    socket.emit('checkAppAnswer',sendData(true));
    if(team !== null){
    socket.emit('team',sendData(team+1));
    }
  });

  socket.on('mapData_server-Phone', (e) => {
  stageMap = e;
});

let hostScene = "";

socket.on('scene_server-Phone', (e) => {
 hostScene = e[0];
 playingBattle = e[1];

if(hostScene === "battleInfo" && team !== null){
    socket.emit('team',sendData(team+1));
       
}

});

socket.on('accessOK', (e) => {
    
moving = setInterval("move()", fps2 );    

});

socket.on('accessError', (e) => {
    
error = 1;
nextScene = "error";
moving = setInterval("move()", fps2 );    

});

let error = 0;

let playingBattle;

let TEST = "";


let alpha = 0;
let beta = 0;
let gamma = 0;

let ox = 0;
let oz = 0;

let calibration = {mode:0,alpha:null,ox:null,oz:null};

window.addEventListener("deviceorientation", (event)=>{

    alpha = event.alpha;
    beta = event.beta;
    gamma = event.gamma;
  
    if(calibration.mode === 0){

        calibration.mode = 1;
        calibration.alpha = alpha;

    }

})



function heightGyro(){

let y = beta-35;
y *= -1;

if( y >= 20){
    y = 20;
}
if( y <= -20){
    y = -20;
}

    let a = 50 + y*(50/20);


    return a;


}

function widthGyro(){

if(calibration.mode == 0){
    return 50;
}

let a = alpha
let ca = calibration.alpha
let x = a - ca;

//0 - 360の境目処理、両者の差が180以上の場合（a=0,ca=359など）はループをつなぐ方が近い
if(a - ca > 180){

x = a - (ca + 360);

}else if(a - ca < -180){

    x = (a + 360) - ca;
    
}


x *= -1;

if(x >= 15){
    x = 15;
}
if(x <= -15){
    x = -15;
}

let g = gamma;
g *= 1;

g = 0;

/*


if(g >= 30){
    g = 30;
}
if(g <= -30){
    g = -30
}
*/
let b = 50 + x*(50/15)+g*(50/30);

if(b <= 0){
    b = 0;
}
if(b >= 100){
    b = 100;
}

return b;


}


div_mapBaseNeo.addEventListener("touchstart", (e) => {

e.preventDefault();

if(mapBaseNeoOpacity == 1){
socket.emit('sendTwinkle',sendData([markLo.x,markLo.y,cn,cS,(team+1)]));
mapBaseNeoOpacity = 0;
}

});


if(phone){
    if(window.DeviceOrientationEvent){
        // ★iOS13向け: ユーザーにアクセスの許可を求める関数があるか？
        if(DeviceOrientationEvent.requestPermission){
            div_tapJReq.addEventListener("touchstart", function(){
                jReqOpacity = 0.3;
                // ★ジャイロセンサーのアクセス許可をリクエストする
                DeviceOrientationEvent.requestPermission().then(function(response){
                    // リクエストが許可されたら
                    if(response === "granted"){
                        // deviceorientationが有効化される
                    }
                }).catch(function(e){
                    console.log(e);
                });
            });
        // iOS13以外
        }else{
            // 何もしない
        }
    }
}

div_tapCa.addEventListener("touchstart", (e) => {

    e.preventDefault();
   
    
    if(scene === "twinkle" && bs === 0 && aShift === 1){
    nextScene = "ca";
    soundName[0] = "confirm";
    }else if((scene === "ca") && bs === 0){
    calibration.mode = 0;
    nextScene = "twinkle";
    soundName[1] = "1up";
    }else if((scene === "howTo") && bs === 0){
    nextScene = "twinkle";
    soundName[2] = "back";
    }

    });
    

    div_tapHowTo.addEventListener("touchstart", (e) => {

        e.preventDefault();
   

    if(scene === "twinkle" && bs === 0 && aShift === 1){
    nextScene = "howTo";
    soundName[0] = "confirm";
    }

    });


    div_tapCustom.addEventListener("touchstart", (e) => {

        e.preventDefault();
   

    if(scene === "twinkle" && aShift === 1 && bs === 0){
    aShift = 2;
    cus_Rotate = 1;
    cus_RotateV = 30;
    soundName[0] = "confirm";

    }

    });

    div_customColorOK.addEventListener("touchstart", (e) => {

        e.preventDefault();
   

    if(scene === "twinkle" && aShift === 3 && bs === 0){
    aShift = 4;
    customColorOK_opacity = 0.2;
    soundName[0] = "confirm";
    }

    });

for(let i = 0; i < colorName.length; i++){

    div_customColor[i].addEventListener("touchstart", (e) => {

        e.preventDefault();
   
    if(scene === "twinkle" && aShift === 3 && bs === 0){
    cn = i;
    customColorOpacity[i] = 0.2;
    soundName[0] = "select";
    }

    });
}

for(let i = 0; i < 2; i++){

    div_customSelect[i].addEventListener("touchstart", (e) => {

        e.preventDefault();
   
    if(scene === "twinkle" && aShift === 3 && bs === 0){
        if(i === 0){
            cS--;
            if(cS < 0){
                cS = customName.length - 1;
            }
        }
        if(i === 1){
            cS++;
            if(cS > customName.length - 1){
                cS = 0;
            }
        }
        soundName[0] = "select";
    customSelectOpacity[i] = 0.2;
    }

    });
}
div_tapSound.addEventListener("touchstart", (e) => {

    e.preventDefault();


if(bs === 0){

if(allowSound == 0){
allowSound = 1;
}else{
allowSound = 0;
}
}

});


for(let i = 0; i < 2; i++){

    div_teamSelect[i].addEventListener("touchstart", (e) => {

        e.preventDefault();
   
        if(i !== team && ((team === null && playingBattle ==1 && (hostScene == "game" || hostScene == "start" || hostScene == "draw" || hostScene == "scoreBoard")) || (hostScene === "battleInfo" || hostScene === "battleRule" || hostScene === "battleStage"))){
        te = 0;
        team = i;
        soundName[0] = "select";
        localStorage.setItem("bs3_assistData_621820623",JSON.stringify([id,team]));
        if(team !== null){
            socket.emit('team',sendData(team+1));
            }
        }
    });
}