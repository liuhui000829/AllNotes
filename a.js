// let a = [1, 2, 3].reduce((pre, current) => {
//     console.log(pre, current)
// }, 0)


let b = [1, 1, 0, 1, 1, 1, 0, 1, 1,1,1]   //输出3


let sum = 0;
let Max = 0;
function CountMax() {

    for (let i = 0; i < b.length; i++) {
        sum += b[i];
        if (b[i] === 0 || i === b.length - 1) {
            if (sum > Max) {
                Max = sum;
                sum = 0;
            }
        }
    }
    return Max;
}
console.log(

    CountMax(b)
)














