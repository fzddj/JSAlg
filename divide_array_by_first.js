class CustomArray {

    constructor(a, start, end) {
        this.a = a;
        this.start = start;
        this.end = end;
    }

    set(index, value) {
        this.a[index + this.start] = value;
    }


    get(index) {
        return this.a[index + this.start];
    }

    size() {
        return (this.end - this.start)+1;
    }
}
var a = [6,2,3,8,9,6,1,2,3];

var result = new CustomArray(a, 0, a.length-1);



function divideArrayByFirst(a) {
    if(a.size() == 1) return;
    let v = a.get(0);
    let i = a.start+1;
    let j = a.end;

    while(i != j) {
        if(a.get(j) > v) {
            j--;
        }else {
            if(a.get(i) <= v) {
                i++;
            }else{
                let tmp = a.get(j);
                a.set(j, a.get(i));
                a.set(i, tmp);
            }
        }
    }
    if(a.get(j) < v) {
        a.set(0, a.get(j));
        a.set(j, a.get(0));
    }
    return j;
}

// function quick_sort(a, start, end){
//     if(a.length == 1) return;
//     let j = divideArrayByFirst(a, start, end);
//     quick_sort(a, start, j-1);
//     quick_sort(a, j+1, end);
// }

divideArrayByFirst(result);
console.log(result.a);