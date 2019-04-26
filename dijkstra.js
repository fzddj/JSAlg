/**
 * 最短路径
 */

 let r = new Map();
 r.set("1-1", 0);
 r.set("1-2", 5);
 r.set("2-4", 2);
 r.set("1-3", 8);
 r.set("3-5", 3);
 r.set("2-5", 1);
 r.set("5-4", 1);

 var s = 1;
 var found = [1];
 var unFound = [2, 3, 4, 5];

var func = function(){
     while(unFound.length > 0) {
        for(let i=0; i<unFound.length; i++) {
            let v = unFound[i];
            let minKey = undefined;
            for(let j=0; j<found.length; j++) {
                let p = found[j];
                let curkey = p + "-" + v;  //2-5
                if(r.get(curkey)) {
                    if(minKey == undefined) {
                        minKey = curkey;
                    }else{
                        if(r.get(curkey) < r.get(minKey)) {
                            minKey = curkey;
                        }
                    }
                }
            }
            if(minKey != undefined) { //found
                let curkey = minKey;
                var p = curkey.split("-")[0];
                //松弛操作
                for(let k=0; k<found.length; k++) {
                    let p = found[k];
                    let key = v + "-" + p; //2-1
                    if(r.get(key)) {
                        let key1 = s+"-"+p; //1-1
                        if(r.get(key1) < r.get(curkey) + r.get(key)) {
                            r.set(key1, r.get(curkey) + r.get(key));
                        }
                    }
                }

                r.set(s+"-"+v, r.get(s+"-"+p) + r.get(curkey));
                
                found.push(unFound[i]);
                unFound.splice(i, 1);
                console.log(r);
                break;
            }
        }
     }
 }



 func();