/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    
    
    let l = Math.min(...bloomDay), h = Math.max(...bloomDay);
    let res = -1;
    while(l <= h){
        let mid = Math.floor((l + h )/ 2);
        if(possible(bloomDay, mid, m, k)){
            res = mid;
            h = mid - 1;
        }else {
            l = mid + 1
        }
    }
    return res;
};

var possible = (arr, day, m, k) => {
    let count = 0, bo = 0;
    for(let ele of arr){
        if(ele <= day) {
            count++;
            if(count === k){
                bo++
                count = 0
            }
        }else {
            count = 0;
        }
    }
    return bo >= m
}