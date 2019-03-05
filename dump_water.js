let bottles = [8, 0, 0];
let doneSituation = new Map();

function getNewBottles(bottles){
    let newBottles = [];
    for(let i=0; i<bottles.length; i++) {
        newBottles.push(bottles[i]);
    }
    return newBottles;
}

function bfs(bottles) {
    let key = bottles[0]+"---"+bottles[1]+"---"+bottles[2];
    console.log(key);
    if(bottles[0] == 4 && bottles[1] == 4 && bottles[2] == 0) {
        return;
    }
   
    if(doneSituation.get(key)){
        return;
    }else{
       
        doneSituation.set(key, true);
    }
    //0->1 
    if(bottles[0]==0 || bottles[1] == 5){
        
    }else{
        let newBottles = getNewBottles(bottles);
        if(newBottles[0] > 5-newBottles[1]){
            newBottles[0] = newBottles[0] - (5-newBottles[1]);
            newBottles[1] = 5;
        }else{
            newBottles[1] = newBottles[1]+newBottles[0];
            newBottles[0] = 0;
        }

        bfs(newBottles);
    }
    if(bottles[0]==0 || bottles[2] == 3){
        
    }else{
        let newBottles = getNewBottles(bottles);
        if(newBottles[0] > 3-newBottles[2]){
            newBottles[0] = newBottles[0] - (3-newBottles[2]);
            newBottles[2] = 3;
        }else{
            newBottles[2] = newBottles[2]+newBottles[0];
            newBottles[0] = 0;
        }
        bfs(newBottles);
    }

    //1->2
    if(bottles[1]==0 || bottles[2] == 5){
        
    }else{
        let newBottles = getNewBottles(bottles);
        if(newBottles[1] > 3-newBottles[2]){
            newBottles[1] = newBottles[1] - (3-newBottles[2]);
            newBottles[2] = 3;
        }else{
            newBottles[2] = newBottles[1]+newBottles[2];
            newBottles[1] = 0;
        }
        bfs(newBottles);
    }

    //1->0
    if(bottles[1]==0 || bottles[0] == 8){
        
    }else{
        let newBottles = getNewBottles(bottles);
        if(newBottles[1] > 8-newBottles[0]){
            newBottles[1] = newBottles[1] - (8-newBottles[0]);
            newBottles[0] = 8;
        }else{
            newBottles[0] = newBottles[0]+newBottles[1];
            newBottles[1] = 0;
        }

        bfs(newBottles);
    }

    //2->0
    if(bottles[2]==0 || bottles[0] == 8){
        
    }else{
        let newBottles = getNewBottles(bottles);
        if(newBottles[2] > 8-newBottles[0]){
            newBottles[2] = newBottles[2] - (8-newBottles[0]);
            newBottles[0] = 8;
        }else{
            newBottles[0] = newBottles[0]+newBottles[2];
            newBottles[2] = 0;
        }
        bfs(newBottles);
    }

    //2->1
    if(bottles[2]==0 || bottles[1] == 5){
        
    }else{
        let newBottles = getNewBottles(bottles);
        if(newBottles[2] > 5-newBottles[1]){
            newBottles[2] = newBottles[2] - (5-newBottles[1]);
            newBottles[1] = 5;
        }else{
            newBottles[1] = newBottles[2]+newBottles[1];
            newBottles[2] = 0;
        }
        bfs(newBottles);
    }

}

bfs(bottles);