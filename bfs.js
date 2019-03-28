/**
 * 广度优先遍历
 */

 var vertex = {
     discoverd:false,
     level:-1,
     parent:-1,
 }

 var graph = [[], [0, 2], [0, 4], [2], [2,3]];

 const Queue = require("./common/queue");


function BFS(graph, s) {
    if(s > graph.length) {
        return;  //无此顶点
    }

    var vetexs = [];
    for(let i=0; i<graph.length; i++) {
        let vetex = {
            discoverd:false,
            level:-1,
            parent:i,
        }
        vetexs.push(vetex);
    }
    vetexs[s].discoverd = true;
    vetexs[s].level = 0;

    var queue = new Queue();
    var stack = [];

    queue.enqueue(s);
    while(!queue.empty()) {
        let u = queue.dequeue();
        stack.unshift(u);
        //访问邻接表
        for(let i=0; i<graph[u].length; i++) {
            let v = graph[s][i];
            if(!vetexs[v].discoverd) {
                vetexs[v].discoverd = true;
                vetexs[v].level = vetexs[u].level + 1;
                vetexs[v].parent = u;
                queue.enqueue(v);
            }
            queue.dequeue();
        }
        console.log("---------------")
    }





}