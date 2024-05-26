<<<<<<< HEAD
//ここに書いてある項目が1/50秒に1回実行されます。
function run(){
    
if(bs == -100){

    div_mapBase.appendChild(div_map);
    div_mapBase.appendChild(div_mark);
    
}

    if(aShift == 0 && bs == 0){
    statusLo.t += 0.04;

        statusLo.y = Math.sin(statusLo.t)*115-768;

        if(statusLo.t >= Math.PI*(1/2)){

            aShift = 1;
            statusLo.t = 0;
            statusLo.y = 115-768;

        }

    }

    if(statusLo.y)

    putXY(div_status,0,statusLo.y)


    setImage(div_bg,"image/bg.jpg")
    
    
    setImage(div_status,"image/statusBar.png");
 
    setText(div_text,[Math.round(alpha)]+"<br>"+[TEST,ip]); 
   
   
    setImage(div_mapBase,"image/mapBase.png");

    markLo.y = heightGyro();
    markLo.x = widthGyro();
    
    mapLo.y = 100 - markLo.y;
    mapLo.x = 100 - markLo.x;



    putXY(div_map,(330/2)+(300)*(mapLo.x-50)*0.01,(220/2)+(200)*(mapLo.y-50)*0.01)
    setImage(div_map,"image/map.png");

    setImage(div_mark,"image/mark.png");

    
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ip = urlParams.get('id');

const socket = io("https://bs3-arcade-server-assist-page.glitch.me/");            
        
let TEST = "";

socket.on('ipv4', (id) => {
    TEST = id;
  });


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

let y = beta-60;
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

let g = gamma;
g *= 1;

if(x >= 20){
    x = 20;
}
if(x <= -20){
    x = -20;
}

if(g >= 30){
    g = 30
}
if(g <= -30){
    g = -30
}

let b = 50 + x*(50/20)+g*(50/30);

if(b <= 0){
    b = 0;
}
if(b >= 100){
    b = 100;
}

return b;


}


=======
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

    if(statusLo.y)

    putXY(div_status,0,statusLo.y)


    setImage(div_bg,"image/bg.jpg")
    
    
    setImage(div_status,"image/statusBar.png");
 
    setText(div_text,[Math.round(alpha),Math.round(beta),Math.round(gamma)]+"<br>"+[TEST,ip]); 
   
   


    
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const ip = urlParams.get('id');

const socket = io("https://bs3-arcade-server-assist-page.glitch.me");            
        
let TEST = "";

socket.on('ipv4', (id) => {
    TEST = id;
  });


let alpha = 0;
let beta = 0;
let gamma = 0;

window.addEventListener("deviceorientation", (event)=>{

    alpha = event.alpha;
    beta = event.beta;
    gamma = event.gamma;
  

})



>>>>>>> 160fa3e9cbb79be5cd2196857b39ada8fe0a2dc2
