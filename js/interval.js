//ここに書いてある項目が1/50秒に1回実行されます。
function run(){
    
if(error === 1 && scene !== "error"){

    nextScene = "error";

}

    if(scene !== "start" && scene !== "ca" && scene !== "howTo" && scene !== "error" && scene !== "jReq"){
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

    gyroCheck = 1;
    
    setImage(div_mapBase,"image/mapBase.png");
    setImage(div_mapBaseNeo,"image/mapBaseNeo.png");
    setImage(div_map,"image/map.png");
    setImage(div_mapNo,"image/mapNo.png");

    for(let i = 0; i < 11; i++){for(let j = 0; j < 17; j++){

        div_map.appendChild(div_floor[i][j]);

        }}

    div_mapBaseNeo.appendChild(div_mapBase);
    div_mapBase.appendChild(div_map);
    if(touchMode === 0){
    div_mapBase.appendChild(div_mark);
    }else if(touchMode === 1){
    div_map.appendChild(div_mark);
    }
    div_map.appendChild(div_mapNo);
    div_mapBaseNeo.appendChild(div_errorText);


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
    

 /*
    setText(div_text,[hostScene,playingBattle]); 
   */
   

    if(touchMode === 0){
    markLo.y = heightGyro();
    markLo.x = widthGyro();

    mapLo.y = 100 - markLo.y;
    mapLo.x = 100 - markLo.x;
    }else{



    }

    if(touchMode === 0){
        putXY(div_map,(330/2)+(300)*(mapLo.x-50)*0.01,(220/2)+(200)*(mapLo.y-50)*0.01)
        putXY(div_mark,50+"%",50+"%")
    }else{
        putXY(div_map,(330/2)+(300)*(50-50)*0.01,(220/2)+(200)*(50-50)*0.01)
        putXY(div_mark,markLo.x+"%",markLo.y+"%")
    }

    setImage(div_mark,"image/mark.png");

    if(beta >= 90 && touchMode === 0){
    fontSet(div_errorText,textErrorColor(),"Higashi","15","bold","right")
    setText(div_errorText,"デバイスを"+Rb("上","うえ")+"に"+Rb("向","む")+"けないでください！");
    }else{
        Remove(div_errorText);
    }

    if(mapBaseNeoOpacity >= 1){
if(touchMode === 0 && beta < 90){
    setText(div_tapNavi,""+Rb("上","うえ")+"のスクリーンエリアをタップすると、<br>"+Rb("黄色","きいろ")+"のマークに"+Rb("向","む")+"かってツインクルを"+Rb("発射","はっしゃ")+"します。"/*+"<br>"+Rb("外","はず")+"してもペナルティはありません！"*/);
}else if(touchMode === 1){
    setText(div_tapNavi,""+Rb("上","うえ")+"のスクリーンエリアをタップすると、<br>タップした"+Rb("場所","ばしょ")+"に"+Rb("向","む")+"かってツインクルを"+Rb("発射","はっしゃ")+"します。"/*+"<br>"+Rb("外","はず")+"してもペナルティはありません！"*/);
}else{
    Remove(div_tapNavi);
        
}
    }else{
        Remove(div_tapNavi);
        
    
    }

    putXY(div_tapCa,"5%","95%")
    if(touchMode === 0){
        setImage(div_tapCa,"image/ca.png");
    }
    translate(div_tapCa,Left,Bottom);

    setImage(div_tapCustom,"image/twinkle/"+colorName[cn]+"0.png");

    div_tapCustom.appendChild(div_tapCustom2);

    putXY(div_tapCustomNavi,"90%",(86.5+Math.sin(t*0.07)*0.5)+"%")
    setImage(div_tapCustomNavi,"image/customNavi.png");

    div_tapCustomNavi.appendChild(div_tapCustomNaviText)

    if(customName[cS] === "ribbon"){

        setText(div_tapCustomNaviText,"アタシをタップすると<br>キャラカスタムができるわよ！");

    }else if(customName[cS] === "samurai"){

        setText(div_tapCustomNaviText,""+Rb("拙者","せっしゃ")+"をタップすると<br>キャラカスタムできるでござる！");

    }else if(customName[cS] === "cat"){

        setText(div_tapCustomNaviText,"ボクをタップすると<br>キャラカスタムができるニャ！");

    }else if(customName[cS] === "pirate"){

        setText(div_tapCustomNaviText,"おれをタップすれば<br>キャラカスタムもできる！");

    }else if(customName[cS] === "zonk"){

        setText(div_tapCustomNaviText,"オレをタップすると<br>キャラカスタムができるぞ！");

    }else if(customName[cS] === "cry"){

        setText(div_tapCustomNaviText,"ボクをタップすると<br>キャラカスタムできるよ…。");

    }else if(customName[cS] === "paint"){

        setText(div_tapCustomNaviText,"ボクをタップすると<br>キャラカスタムできるんだ！");

    }else if(customName[cS] === "racquet"){

        setText(div_tapCustomNaviText,"ラケットボールは<br>アイガードが"+Rb("必須","ひっす")+"なんだ。");

    }else if(customName[cS] === "japan"){

        setText(div_tapCustomNaviText,"キャラカスタムせずとも<br>ボクが"+Rb("一番","いちばん")+"　ぢゃな！");

    }else{

        setText(div_tapCustomNaviText,"ボクをタップすると<br>キャラカスタムができるよ！");


    }
    
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

    Remove(div_tapNavi);
    Remove(div_errorText);

}else{

    if(team !== null && playingBattle ==1 && (hostScene == "game" || hostScene == "start" || hostScene == "draw" || hostScene == "scoreBoard" || hostScene == "victory")){

        Remove(div_teamSelect[1]);
        setImage(div_teamSelect[0],"image/"+(team+1)+"p.png");
        div_teamSelect[0].style.opacity = 1;
        putXY(div_teamSelect[0],"30%","24%")
        transform(div_teamSelect[0],Center,Center,0,130);
    

    }else{
    for(let i = 0; i < 2; i++){
    
        Remove(div_teamSelect[i]);
        }
    }

    
    div_mapBaseNeo.style.opacity = mapBaseNeoOpacity;
    Remove(div_vs);
    if(touchMode === 0){
        setImage(div_tapHowTo,"image/howTo.png");
    }
    Remove(div_teamText);


}



    
}else if(scene === "ca"){

    
    putXY(div_tapCa,"50%","85%")
    putXY(div_bg,0,0)
    setImage(div_bg,"image/bgCa"+gyroCheck+".jpg")
    translate(div_tapCa,Center,Bottom);




           // div_tapJReq.style.opacity = 1;
    if(gyroCheck === 0){
        setImage(div_tapJReq,"image/jReq2.png");
        setImage(div_tapCa,"image/gyroStart.png");
    

    }else{
        setImage(div_tapCa,"image/caOK.png");
    

    }
    putXY(div_tapJReq,"50%","95%")
    translate(div_tapJReq,Center,Center);

putXY(div_caLine,"50%",caLineY()+"%")

setImage(div_caLine,"image/caLine.png");

}else if(scene === "jReq"){

    jReqOpacity += 0.05;

    if(jReqOpacity >= 1){
        jReqOpacity = 1;
    }

    
    putXY(div_bg,0,0)
    setImage(div_bg,"image/bgJReq"+detectIOSVersion()+".jpg")

    putXY(div_touchStart,"50%","95%")
    translate(div_touchStart,Center,Bottom);
    setImage(div_touchStart,"image/touchStart.png");

    if(detectIOSVersion() === 0){
    putXY(div_tapCa,"50%","45%")
    setImage(div_tapCa,"image/caOK.png");
    
    setImage(div_tapJReq,"image/jReq.png");
    putXY(div_tapJReq,"50%","32%")
    translate(div_tapJReq,Center,Center);

    }else if(detectIOSVersion() === 1){
    putXY(div_tapCa,"50%","45%")
    setImage(div_tapCa,"image/caOK.png");

    Remove(div_tapJReq);

    }else if(detectIOSVersion() === 2){
    putXY(div_tapCa,"50%","60%")
    setImage(div_tapCa,"image/jReqOK.png");

    Remove(div_tapJReq);

    }

    div_tapJReq.style.opacity = jReqOpacity;

}else if(scene === "howTo"){

    putXY(div_tapCa,"50%","95%")
    putXY(div_bg,0,0)
    setImage(div_bg,"image/bgHowTo.jpg")
    setImage(div_tapCa,"image/caOK.png");
    translate(div_tapCa,Center,Bottom);


}else if(scene === "start"){

    startX -= startV;
    startV -= 0.05;

    if(startV <= 0){
    startV = 0;

    }

    if(startX <= 0){
    startX = 0;

    }

    putXY(div_tapCa,(startX+97)+"%",(3 + Math.sin(t*0.05))+"%")
    setImage(div_tapCa,"image/gyroSelect.png");
    translate(div_tapCa,Right,Top);

    putXY(div_touchStart,(3-startX)+"%",(53 + Math.sin(t*0.05))+"%")
    translate(div_touchStart,Left,Top);
    setImage(div_touchStart,"image/touchSelect.png");


    putXY(div_bg,0,0)
    setImage(div_bg,"image/bgStart.jpg")
    


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

let gyroCheck = 0;
let touchMode = 0;

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

    if(a <= 17){
        a = 17;
    }

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

if(touchMode === 0 && beta < 90){

soundName[8] = "twinkle";
socket.emit('sendTwinkle',sendData([markLo.x,markLo.y,cn,cS,(team+1),touchMode]));
mapBaseNeoOpacity = 0;
}else if(touchMode === 1){
        // div_mapBaseの位置とサイズを取得
        let rect = div_map.getBoundingClientRect();
    
        let x = e.touches[0].clientX - rect.left;
        let y = e.touches[0].clientY - rect.top;
    
        markLo.x = (x / rect.width) * 100;
        markLo.y = (y / rect.height) * 100;
    
        if(markLo.x <= 0){
            markLo.x = 0;
        }
        if(markLo.x >= 100){
            markLo.x = 100;
        }

        if(markLo.y <= 17){
            markLo.y = 17;
        }
        if(markLo.y >= 100){
            markLo.y = 100;
        }

        soundName[8] = "twinkle";
        socket.emit('sendTwinkle',sendData([markLo.x,markLo.y,cn,cS,(team+1),touchMode]));
    mapBaseNeoOpacity = 0;
    

}

}

});

div_tapJReq.addEventListener("click", function(){

    if(bs === 0){
        if(scene === "jReq"){

                jReqOpacity = 0.3;
                setTimeout(()=>{
                // ★ジャイロセンサーのアクセス許可をリクエストする
                DeviceOrientationEvent.requestPermission().then(function(response){
                    // リクエストが許可されたら
                    if(response === "granted"){
                        // deviceorientationが有効化される
                    }
                }).catch(function(e){
                    console.log(e);
                });
            },100)
            
     

    }else if(scene === "ca"){

        nextScene = "jReq"
    }
}
});

div_tapCa.addEventListener("touchstart", (e) => {

    e.preventDefault();
   
    
    if(scene === "start" && bs === 0 && startX === 0){

        nextScene = "ca";
            

    }else if(scene === "twinkle" && bs === 0 && aShift === 1){
    nextScene = "ca";
    soundName[0] = "confirm";
    }else if((scene === "ca") && bs === 0){
    calibration.mode = 0;
    nextScene = "twinkle";
    soundName[1] = "1up";
    }else if((scene === "howTo") && bs === 0){
    nextScene = "twinkle";
    soundName[2] = "back";
    }else if((scene === "jReq") && bs === 0){
    nextScene = "ca";
    soundName[2] = "confirm";
    }

    });

    div_touchStart.addEventListener("touchstart", (e) => {

    e.preventDefault();
   
    if(bs === 0 && startX === 0){
    touchMode = 1;
    nextScene = "twinkle";
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

function caLineY(){

    let a = beta;

    let b;

    if (a >= -180 && a < -90) {
        b = 50 + (0 - 50) * ((a - (-180)) / (-90 - (-180)));
    } else if (a >= -90 && a <= 90) {
        b = 0 + (100 - 0) * ((a - (-90)) / (90 - (-90)));
    } else if (a > 90 && a <= 180) {
        b = 100 + (50 - 100) * ((a - 90) / (180 - 90));
    } else {
        b = 50;
    }

    
    return b;

}

function detectIOSVersion() {
    let userAgent = window.navigator.userAgent;
    let iOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    if (iOS) {
        let match = userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
        let version;
        if (match !== undefined && match !== null) {
            version = parseInt(match[1], 10);
        }
        if (version >= 13) {
            return 0;
        } else if (version === 12) {
            let subVersion = parseInt(match[2], 10);
            if (subVersion === 2) {
                return 1;
            }
        }
    }
    return 2;
}
