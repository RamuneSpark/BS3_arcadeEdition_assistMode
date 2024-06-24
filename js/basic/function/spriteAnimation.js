//=e.p（親タイム）、e.k（子タイム）、f…フレーム/枚、g…絵の枚数。
function animeFrame(e,f,g){
    
    e.k++;
    
   if(e.k >= f){
       
       e.k = 0;
       e.p ++;
       
   } 
    
    if(e.p >= g){
        
        e.p = 0;
        
    }
    
    return e;
    
    
}

function frameReset(e){
    
    e.p = 0;
    e.k = 0;
    
    return e;
    
}