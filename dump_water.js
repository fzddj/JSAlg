let bottles = [8, 0, 0];
let bottle_volume = [8, 5, 3];
let doneState = [];


/**
 * 获取key
 * @param {} bottles 
 */
function getKey(bottles) {
    return bottles[0]+"---"+bottles[1]+"---"+bottles[2];
}


/**
 * 是否遍历过
 * @param {} key 
 */
function isDone(key){
    for(let i=0; i<doneState.length; i++) {
        if(doneState[i] == key) {
            return true;
        }
    }
    return false;
}

/**
 * 获取新的对象
 * @param {} bottles 
 */
function getNewBottles(bottles){
    let newBottles = [];
    for(let i=0; i<bottles.length; i++) {
        newBottles.push(bottles[i]);
    }
    return newBottles;
}

/**
 * 正确解答
 * @param {*} bottles 
 */
function isRightAnswer(bottles){
    return bottles[0] == 4 && bottles[1] == 4 && bottles[2] == 0;
}

function dfs(bottles) {

    if(isRightAnswer(bottles)) {
        console.log(doneState+"");
        return;
    }

    //i瓶子倒到j瓶子
    for(let i=0; i<bottles.length; i++) {
        for(let j=0; j<bottles.length; j++) {
            //自己不能倒给自己
            if(i == j) {
                continue;
            }
            //自己没有水 或者倒向的瓶子满了 不能倒
            if(bottles[i] == 0 || bottles[j] == bottle_volume[j]) {
                continue;
            }

            let newBottles = getNewBottles(bottles);
            if(newBottles[i] > bottle_volume[j]-newBottles[j]){
                newBottles[i] = newBottles[i] - (bottle_volume[j]-newBottles[j]);
                newBottles[j] = bottle_volume[j];
            }else{
                newBottles[j] = newBottles[j]+newBottles[i];
                newBottles[i] = 0;
            }
            let key = getKey(newBottles);
            if(!isDone(key)){
                doneState.push(key);
                dfs(newBottles);
                doneState.pop();
            }
        }
    }
}

let key = getKey(bottles);
doneState.push(key);
dfs(bottles);






//---------------------------------------------原始思路-----------------------------------------------------------


    // //0->1 
    // if(bottles[0]==0 || bottles[1] == 5){
        
    // }else{
    //     let newBottles = getNewBottles(bottles);
    //     if(newBottles[0] > 5-newBottles[1]){
    //         newBottles[0] = newBottles[0] - (5-newBottles[1]);
    //         newBottles[1] = 5;
    //     }else{
    //         newBottles[1] = newBottles[1]+newBottles[0];
    //         newBottles[0] = 0;
    //     }
    //     let key = newBottles[0]+"---"+newBottles[1]+"---"+newBottles[2];
    //     if(!isDone(key)){
    //         doneState.push(key);
    //         dfs(newBottles);
    //         doneState.pop();
    //     }
    // }

    // if(bottles[0]==0 || bottles[2] == 3){
        
    // }else{
    //     let newBottles = getNewBottles(bottles);
    //     if(newBottles[0] > 3-newBottles[2]){
    //         newBottles[0] = newBottles[0] - (3-newBottles[2]);
    //         newBottles[2] = 3;
    //     }else{
    //         newBottles[2] = newBottles[2]+newBottles[0];
    //         newBottles[0] = 0;
    //     }
    //     let key = newBottles[0]+"---"+newBottles[1]+"---"+newBottles[2];
    //     if(!isDone(key)){
    //         doneState.push(key);
    //         dfs(newBottles);
    //         doneState.pop();
    //     }
       
    // }

    // //1->2
    // if(bottles[1]==0 || bottles[2] == 5){
        
    // }else{
    //     let newBottles = getNewBottles(bottles);
    //     if(newBottles[1] > 3-newBottles[2]){
    //         newBottles[1] = newBottles[1] - (3-newBottles[2]);
    //         newBottles[2] = 3;
    //     }else{
    //         newBottles[2] = newBottles[1]+newBottles[2];
    //         newBottles[1] = 0;
    //     }
    //     let key = newBottles[0]+"---"+newBottles[1]+"---"+newBottles[2];
    //     if(!isDone(key)){
    //         doneState.push(key);
    //         dfs(newBottles);
    //         doneState.pop();
    //     }
      
    // }

    // //1->0
    // if(bottles[1]==0 || bottles[0] == 8){
        
    // }else{
    //     let newBottles = getNewBottles(bottles);
    //     if(newBottles[1] > 8-newBottles[0]){
    //         newBottles[1] = newBottles[1] - (8-newBottles[0]);
    //         newBottles[0] = 8;
    //     }else{
    //         newBottles[0] = newBottles[0]+newBottles[1];
    //         newBottles[1] = 0;
    //     }

    //     let key = newBottles[0]+"---"+newBottles[1]+"---"+newBottles[2];
    //     if(!isDone(key)){
    //         doneState.push(key);
    //         dfs(newBottles);
    //         doneState.pop();
    //     }
    // }

    // //2->0
    // if(bottles[2]==0 || bottles[0] == 8){
        
    // }else{
    //     let newBottles = getNewBottles(bottles);
    //     if(newBottles[2] > 8-newBottles[0]){
    //         newBottles[2] = newBottles[2] - (8-newBottles[0]);
    //         newBottles[0] = 8;
    //     }else{
    //         newBottles[0] = newBottles[0]+newBottles[2];
    //         newBottles[2] = 0;
    //     }
    //     let key = newBottles[0]+"---"+newBottles[1]+"---"+newBottles[2];
    //     if(!isDone(key)){
    //         doneState.push(key);
    //         dfs(newBottles);
    //         doneState.pop();
    //     }
    // }

    // //2->1
    // if(bottles[2]==0 || bottles[1] == 5){
        
    // }else{
    //     let newBottles = getNewBottles(bottles);
    //     if(newBottles[2] > 5-newBottles[1]){
    //         newBottles[2] = newBottles[2] - (5-newBottles[1]);
    //         newBottles[1] = 5;
    //     }else{
    //         newBottles[1] = newBottles[2]+newBottles[1];
    //         newBottles[2] = 0;
    //     }
    //     let key = newBottles[0]+"---"+newBottles[1]+"---"+newBottles[2];
    //     if(!isDone(key)){
    //         doneState.push(key);
    //         dfs(newBottles);
    //         doneState.pop();
    //     }

    // }