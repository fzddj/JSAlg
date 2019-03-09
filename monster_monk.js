var LOCAL = 1;
var REMOTE = 2;
var ori_state = [3, 3, 0, 0, LOCAL];
var end_state = [0, 0,3, 3,REMOTE];

let doneState = [];

let ONE_MONSTER_GO = 1;
let TOW_MONSTER_GO = 2;
let ONE_MONK_GO  = 3;
let TWO_MONK_GO = 4;
let ONE_MONSTER_ONE_MONK_GO = 5;



/**
 * 获取key
 * @param {} bottles 
 */
function getKey(state) {
    return state[0]+"---"+state[1]+"---"+state[2]+"---"+state[3]+"---"+state[4];
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
 * 正确解答
 * @param {*} state 
 */
function isRightAnswer(state){
    return state[0] == 0 && state[1] == 0 && state[2] == 3&&
    state[3] == 3 && state[4] == REMOTE;
}
 
function isValidState(state) {

    var rightState = state[0]+state[2] == 3 && state[1]+state[3] == 3;
    for(let i=0; i<4; i++) {
        if(state[i]<0 || state[i]>3) {
            return false;
        }
    }
    return rightState && (state[0] - state[1] > -1 || state[0]==0) && (state[2] - state[3] > -1 || state[2]==0);
}



function dfs(state) {

    if(isRightAnswer(state)) {
        console.log("=======================================")
        console.log(doneState+"");
        return;
    }

    if(state[4] == LOCAL) {



        //ONE_MONK_GO
        if(state[0]>0) {
              let newState = [state[0]-1, state[1], state[2]+1, state[3], REMOTE];
              if(isValidState(newState)){
                let key = getKey(newState);
                if(!isDone(key)){
                    doneState.push(key);
                    dfs(newState);
                    doneState.pop();
                }
              }
        }

        //TOW_MONK_GO  
        if(state[0]>1) {
              let newState = [state[0]-2, state[1], state[2]+2, state[3], REMOTE];
              if(isValidState(newState)){
                let key = getKey(newState);
                if(!isDone(key)){
                    doneState.push(key);
                    dfs(newState);
                    doneState.pop();
                }
            }
        }

        //ONE_MONSTER_GO
        if(state[1]>0) {
              let newState = [state[0], state[1]-1, state[2], state[3]+1, REMOTE];
              if(isValidState(newState)){
                let key = getKey(newState);
                if(!isDone(key)){
                    doneState.push(key);
                    dfs(newState);
                    doneState.pop();
                }
            }
        }

         //TWO_MONSTER_GO
         if(state[1]>1 )  {
              let newState = [state[0], state[1]-2, state[2], state[3]+2, REMOTE];
              if(isValidState(newState)){
                let key = getKey(newState);
                if(!isDone(key)){
                    doneState.push(key);
                    dfs(newState);
                    doneState.pop();
                }
              }
        }

        //ONE_MONSTER_ONE_MONK_GO
        if(state[1]>0 && state[0]>0) {
            let newState = [state[0]-1, state[1]-1, state[2]+1, state[3]+1, REMOTE];
            if(isValidState(newState)){
            let key = getKey(newState);
            if(!isDone(key)){
                doneState.push(key);
                dfs(newState);
                doneState.pop();
            }
        }
        }

    }else if(state[4] == REMOTE){
        //ONE_MONK_LEAVE
        if(state[2]>0) {
              let newState = [state[0]+1, state[1], state[2]-1, state[3], LOCAL];
              if(isValidState(newState)){
              let key = getKey(newState);
              if(!isDone(key)){
                  doneState.push(key);
                  dfs(newState);
                  doneState.pop();
              }
            }
        }

        //TOW_MONK_LEAVE
        if(state[2]>1) {
              
              let newState = [state[0]+2, state[1], state[2]-2, state[3], LOCAL];
              if(isValidState(newState)){
              let key = getKey(newState);
              if(!isDone(key)){
                  doneState.push(key);
                  dfs(newState);
                  doneState.pop();
              }
            }
        }

        //ONE_MONSTER_LEAVE
        if(state[3]>0) {
              
              let newState = [state[0], state[1]+1, state[2], state[3]-1, LOCAL];
              if(isValidState(newState)){
              let key = getKey(newState);
              if(!isDone(key)){
                  doneState.push(key);
                  dfs(newState);
                  doneState.pop();
              }
            }
        }

         //TWO_MONSTER_GO
         if(state[3]>1 ) {
              
              let newState = [state[0], state[1]+2, state[2], state[3]-2, LOCAL];
              if(isValidState(newState)){
              let key = getKey(newState);
              if(!isDone(key)){
                  doneState.push(key);
                  dfs(newState);
                  doneState.pop();
              }
            }
        }

        //ONE_MONSTER_ONE_MONK_GO
        if(state[2]>0 && state[3]>0) {
            
            let newState = [state[0]+1, state[1]+1, state[2]-1, state[3]-1, LOCAL];
            if(isValidState(newState)){
                let key = getKey(newState);
                if(!isDone(key)){
                    doneState.push(key);
                    dfs(newState);
                    doneState.pop();
                }
            }
        }
    }
}

let key = getKey(ori_state);
doneState.push(key);
dfs(ori_state);


