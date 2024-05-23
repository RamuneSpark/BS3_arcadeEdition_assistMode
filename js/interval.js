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

const socket = io("https://bs3-arcade-server-assist-page.glitch.me:4622");            
        
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



