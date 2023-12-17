const zeroCode = 48;
const nineCode = 57;

function getLockCodes(lock) {
    return lock.split('').map(s => s.charCodeAt(0));
}

function rotateWheelUp(i, lock) {
    const codes = getLockCodes(lock);
    if (codes[i] === nineCode) codes[i] = zeroCode;
    else codes[i]++;
    return String.fromCharCode(...codes);
}

function rotateWheelDown(i, lock) {
    const codes = getLockCodes(lock);
    if (codes[i] === zeroCode) codes[i] = nineCode;
    else codes[i]--;
    return String.fromCharCode(...codes);
}

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
function openLock(deadends, target) {
    let turns = 0;
    let queue = [];
    let visited = new Set(deadends);
    
    const tryPush = (lock) => {
        if (visited.has(lock)) return false;
        queue.push(lock);
        visited.add(lock);
        return true;
    };
    
    if (!tryPush('0000')) return -1;

    while (queue.length) {
        const iterator = queue[Symbol.iterator]();
        queue = [];
        for (const lock of iterator) {
            if (lock === target) return turns;
            for (let j = 0; j < target.length; j++) {
                tryPush(rotateWheelUp(j, lock));
                tryPush(rotateWheelDown(j, lock));
            }
        }
        turns++;
    }
    return -1;
}