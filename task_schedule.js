var task = ['A','A','A','B','B','B'];
var delta = 2;
var lastTaskPosition = new Map();

var found = 0;

var result = [];

var getNextTask = function() {
    for(let i=0; i<task.length; i++) {
        let t = task[i];
        if(t != -1) {
            let lastPosition = lastTaskPosition.get(t);
            if(lastPosition == undefined) {
                lastTaskPosition.set(t, result.length);
                found++;
                task[i] = -1;
                result.push(t);
                return;
            }else{
                if(result.length - lastPosition > delta) {
                    lastTaskPosition.set(t, result.length);
                    result.push(t);
                    found++;
                    task[i] = -1;
                    return;
                }
            }
        }
    }
    result.push('idle');
}

while(found < task.length) {
    getNextTask();
}

console.log(result);


/**************************** 应用贪心算法 分块 *****************************/

