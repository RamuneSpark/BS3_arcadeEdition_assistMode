const fps = 50;
const fps2 = (1000/fps);
  
//ゲーム進行    
let t = 0;

let moving;


function move( ) {    
    
    //画面サイズ調整
    monitorResize();
    
    t++;
    
    //実行
    run();
    
    //ブラックアウト関数
    blackout();
    
    //デバッグ
    //debug();
    

    soundPlayer();

}
