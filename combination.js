var a = [1,2,3,4];
var result = [];

var clone = function(a) {
    var b = [];
    a.forEach(element => {
        b.push(element);
    });
    return b;
}

var printCombination = function(a) {
    if(result.length == 1) {
        console.log(result);
        return;
    }

    for(let i=0; i<a.length; i++) {
        let v = a[i];
        result.push(v);
        let new_a = clone(a);
        new_a = new_a.splice(i+1);
        printCombination(new_a);
        result.pop();
    }
}

printCombination(a);