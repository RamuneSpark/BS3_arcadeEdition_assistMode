//音
let sound = [];
let soundName = [];

for(let i = 0; i < 16; i++){
sound[i] = new Audio( );
soundName[i] = undefined;
}

function soundPlayer(){
    
    for(let i = 0; i < 16; i++){
    if(soundName[i] !== undefined){
        
        soundSet(i);
        soundName[i] = undefined;
        
    }
    }
    
    
}
 //sound.src = "mp3/AAA.mp3";


function soundPlay(e,v,l,s){
    
    if(allowSound === 1){
    e.volume = v*(0.5);
    e.loop = l;
    e.src = "mp3/"+s+".mp3";
    e.play();
    }
    
}

function soundSet(i){
    
    if(soundName[i] == "play"){
        sound[i].play();
        
    }else if(soundName[i] == "pause"){
        sound[i].pause();
        
    }

    if(soundName[i] == "confirm"){

        soundPlay(sound[i],0.65,false,soundName[i])
        
    }else if(soundName[i] == "back"){
        soundPlay(sound[i],0.6,false,soundName[i])
        
    }else if(soundName[i] == "1up"){
        soundPlay(sound[i],0.8,false,soundName[i])
        
    }else if(soundName[i] == "select"){
        soundPlay(sound[i],0.85,false,soundName[i])
        
    }else if(soundName[i] == "se/itemGet"){
        soundPlay(sound[i],0.8,false,soundName[i])
        
    }else if(soundName[i] == "se/throwWeapon"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/itemCatch"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/itemBlock"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/pauseIn"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/pauseOut"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/friendStun"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/dolphinJump"){
        soundPlay(sound[i],0.6,false,soundName[i])
        
    }else if(soundName[i] == "se/jump"){
        soundPlay(sound[i],0.6,false,soundName[i])
        
    }else if(soundName[i] == "se/warp"){
        soundPlay(sound[i],0.6,false,soundName[i])
        
    }else if(soundName[i] == "se/step"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/dolphinAttack"){
        soundPlay(sound[i],0.9,false,soundName[i])
        
    }else if(soundName[i] == "se/bubbleStun"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/wave"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/note"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/noteFall"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/noteCircle"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/noteWind"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/taktDash"){
        soundPlay(sound[i],0.8,false,soundName[i])
        
    }else if(soundName[i] == "se/dolDash"){
        soundPlay(sound[i],0.6,false,soundName[i])
        
    }else if(soundName[i] == "se/conveyer"){
        soundPlay(sound[i],0.6,false,soundName[i])
        
    }else if(soundName[i] == "se/setSwitch"){
        soundPlay(sound[i],0.85,false,soundName[i])
        
    }else if(soundName[i] == "se/gibaAlert"){
        soundPlay(sound[i],0.7,true,soundName[i])
        
    }else if(soundName[i] == "se/blast"){
        soundPlay(sound[i],0.9,false,soundName[i])
        
    }else if(soundName[i] == "se/bossBlast"){
        soundPlay(sound[i],0.9,false,soundName[i])
        
    }else if(soundName[i] == "se/darkAcero"){
        soundPlay(sound[i],0.85,false,soundName[i])
        
    }else if(soundName[i] == "se/darkAceroHover"){
        soundPlay(sound[i],0.85,false,soundName[i])
        
    }else if(soundName[i] == "se/darkAceroDefeat"){
        soundPlay(sound[i],0.9,false,soundName[i])
        
    }else if(soundName[i] == "se/timeUp"){
        soundPlay(sound[i],0.8,false,soundName[i])
        
    }else if(soundName[i] == "se/miss"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/gong"){
        soundPlay(sound[i],0.8,false,soundName[i])
        
    }else if(soundName[i] == "se/defeatEnemy"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/defeatEnemySuper"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/goal"){
        soundPlay(sound[i],0.85,false,soundName[i])
        
    }else if(soundName[i] == "se/drown"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/energyCard"){
        soundPlay(sound[i],0.85,false,soundName[i])
        
    }else if(soundName[i] == "se/madHookArm"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/bootShot"){
        soundPlay(sound[i],0.65,false,soundName[i])
        
    }else if(soundName[i] == "se/bootHover"){
        soundPlay(sound[i],0.85,false,soundName[i])
        
    }else if(soundName[i] == "se/bootX"){
        soundPlay(sound[i],0.85,false,soundName[i])
        
    }else if(soundName[i] == "se/passMiss"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/virus"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/quake"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/hyperGo"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/endingGo"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "se/hyperChange"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "bgm/opening"){
        soundPlay(sound[i],0.7,true,soundName[i])
        
    }else if(soundName[i] == "bgm/title"){
        soundPlay(sound[i],0.5,false,soundName[i])
        
    }else if(soundName[i] == "bgm/bgm1"){
        soundPlay(sound[i],0.5,true,soundName[i])
        
    }else if(soundName[i] == "bgm/bgm2"){
        soundPlay(sound[i],0.45,true,soundName[i])
        
    }else if(soundName[i] == "bgm/bgm3"){
        soundPlay(sound[i],0.55,true,soundName[i])
        
    }else if(soundName[i] == "bgm/bgm4"){
        soundPlay(sound[i],0.55,true,soundName[i])
        
    }else if(soundName[i] == "bgm/bgm5"){
        soundPlay(sound[i],0.55,true,soundName[i])
        
    }else if(soundName[i] == "bgm/boss"){
        soundPlay(sound[i],0.5,true,soundName[i])
        
    }else if(soundName[i] == "bgm/darkAceroBattle"){
        soundPlay(sound[i],0.73,true,soundName[i])
        
    }else if(soundName[i] == "bgm/final"){
        soundPlay(sound[i],0.6,true,soundName[i])
        
    }else if(soundName[i] == "bgm/start"){
        soundPlay(sound[i],0.8,false,soundName[i])
        
    }else if(soundName[i] == "bgm/clear"){
        soundPlay(sound[i],0.8,false,soundName[i])
        
    }else if(soundName[i] == "bgm/gameOver"){
        soundPlay(sound[i],0.6,true,soundName[i])
        
    }else if(soundName[i] == "bgm/challenge"){
        soundPlay(sound[i],0.6,true,soundName[i])
        
    }else if(soundName[i] == "bgm/battle"){
        soundPlay(sound[i],0.55,true,soundName[i])
        
    }else if(soundName[i] == "bgm/battleMenu"){
        soundPlay(sound[i],0.45,true,soundName[i])
        
    }else if(soundName[i] == "bgm/stageSelect"){
        soundPlay(sound[i],0.5,true,soundName[i])
        
    }else if(soundName[i] == "bgm/password"){
        soundPlay(sound[i],0.6,true,soundName[i])
        
    }else if(soundName[i] == "bgm/areaSelect"){
        soundPlay(sound[i],0.6,true,soundName[i])
        
    }else if(soundName[i] == "bgm/drawGame"){
        soundPlay(sound[i],0.6,false,soundName[i])
        
    }else if(soundName[i] == "bgm/scoreBoard"){
        soundPlay(sound[i],0.8,false,soundName[i])
        
    }else if(soundName[i] == "bgm/victory"){
        soundPlay(sound[i],0.6,true,soundName[i])
        
    }else if(soundName[i] == "bgm/credits"){
        soundPlay(sound[i],0.8,false,soundName[i])
        
    }else if(soundName[i] == "bgm/end"){
        soundPlay(sound[i],0.62,false,soundName[i])
        
    }else if(soundName[i] == "bgm/bestEnd"){
        soundPlay(sound[i],0.62,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/ouch"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/2/ouch"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/miss"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/drown"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/2/miss"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/timeUp"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/2/timeUp"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/4way"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/2/4way"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/heart"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/2/heart"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/big"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/2/big"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/slow"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/2/slow"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/invincible"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/2/invincible"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/stop"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/2/stop"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/stagger"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/2/stagger"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/hurry"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/2/hurry"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/card1"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/card2"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }else if(soundName[i] == "voice/1/card3"){
        soundPlay(sound[i],1,false,soundName[i])
        
    }
    
    
    
    
}


const loadSoundName = [
                    "confirm",
                    "back",
                    "select",
                    "1up"
                  ];

let loadSound = [];

function loadingSound(){
    
    for(let i = 0; i < loadSoundName.length; i++){
        
        loadSound[i] = new Audio( );
        loadSound[i].src = "mp3/"+loadSoundName[i]+".mp3"
        
    }
    
    
    
}
loadingSound();