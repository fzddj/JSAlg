
var a = [1,3,2,5,4,7,9,8,11];

function bubbleSort(a) {
    for(var i=0; i<a.length; i++) {
        for(var j = i+1; j < a.length; j++) {
            if(a[i] > a[j]) {
                let tmp = a[j];
                a[j] = a[i];
                a[i] = tmp;
            }
        }
    }
}

bubbleSort(a);
console.log(a);


