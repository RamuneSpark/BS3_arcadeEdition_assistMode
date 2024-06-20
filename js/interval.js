//ここに書いてある項目が1/50秒に1回実行されます。
function run(){
    

    if(aShift == 0 && bs == 0){
        statusLo.t += 0.04;
    
            statusLo.y = Math.sin(statusLo.t)*115-768;
    
            if(statusLo.t >= Math.PI*(1/2)){
    
                aShift = 1;
                statusLo.t = 0;
                statusLo.y = 115-768;
    
            }
    
        }
        if(scene !== "ca"){
            setImage(div_status,"image/statusBar.png");
        }
        
if(scene === "twinkle"){

if(bs == -100){

    setImage(div_mapBase,"image/mapBase.png");
    setImage(div_mapBaseNeo,"image/mapBaseNeo.png");
    div_mapBaseNeo.appendChild(div_mapBase);
    div_mapBase.appendChild(div_map);
    div_mapBase.appendChild(div_mark);
    div_mapBaseNeo.appendChild(div_errorText);
    div_mapBaseNeo.appendChild(div_tapNavi);
    
}


    if(statusLo.y)

    putXY(div_status,0,statusLo.y)


    setImage(div_bg,"image/bg.jpg")
    
    

 
    setText(div_text,[Math.round(alpha),Math.round(gamma)]+"<br>"+[id]); 
   
   


    markLo.y = heightGyro();
    markLo.x = widthGyro();
    
    mapLo.y = 100 - markLo.y;
    mapLo.x = 100 - markLo.x;



    putXY(div_map,(330/2)+(300)*(mapLo.x-50)*0.01,(220/2)+(200)*(mapLo.y-50)*0.01)
    setImage(div_map,"image/map.png");

    setImage(div_mark,"image/mark.png");

    if(beta >= 90){
    fontSet(div_errorText,textErrorColor(),"Higashi","15","bold","right")
    setText(div_errorText,"デバイスを"+Rb("上","うえ")+"に"+Rb("向","む")+"けないでください！");
    }else{
        Remove(div_errorText);
    }

    setText(div_tapNavi,""+Rb("上","うえ")+"のスクリーンエリアをタップすると、<br>"+Rb("黄色","きいろ")+"のマークに"+Rb("向","む")+"かってツインクルを"+Rb("発射","はっしゃ")+"します。");
    
    putXY(div_tapCa,"5%","95%")
    setImage(div_tapCa,"image/ca.png");
    translate(div_tapCa,Left,Bottom);

}else if(scene === "ca"){

    putXY(div_tapCa,"50%","95%")
    setImage(div_bg,"image/bgCa.jpg")
    setImage(div_tapCa,"image/caOK.png");
    translate(div_tapCa,Center,Bottom);


}

}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

const socket = io("https://bs3-arcade-server-assist-page.glitch.me/");            

socket.on('checkApp', (e) => {
    socket.emit('checkAppAnswer',sendData(true));
  });

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

console.log(true);
socket.emit('sendTwinkle',sendData([markLo.x,markLo.y]));

});

div_tapCa.addEventListener("touchstart", (e) => {

    if(scene === "twinkle" && bs === 0){
    e.preventDefault();
    nextScene = "ca";
    }else if(scene === "ca" && bs === 0){
    e.preventDefault();
    calibration.mode = 0;
    nextScene = "twinkle";
    }

    });
    