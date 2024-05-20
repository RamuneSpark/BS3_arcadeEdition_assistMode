let connectedGamepadIndex = [null,null,null,null,null,null];
let loopID;
let pad = [null,null,null,null,null,null];
let padID = [null,null,null,null,null,null];

let Stick = {
    L: {
        V:[],H:[]
    },
    R: {
        V:[],H:[]
    }
}

function kPlayCheck(){
    
    for(let i = 1; i <= Player; i++){
        
        if(padID[i] == null){
            kPlayer = i;
            break;
        }
        
    }
    
}



addEventListener("gamepadconnected", (e) => {
});

addEventListener("gamepaddisconnected", (e) => {
});

