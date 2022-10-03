// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

// array.includes()
function includes(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }    
    }
    return false;
}

// array.indexOf()
function indexOf(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }    
    }
    return -1;
}

// array.reverse()
function reverse(array) {
    let reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
}

// array.slice()
function slice(start, stop, array) {
    let slicedArray = []
    for (let i = start; i < stop; i++) {
        slicedArray.push(array[i]);
    }    
    return slicedArray;
}

// array.concat()
function concat(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
    return array1;
}

// array.join()
function join(sep, array) {
    let joinedArray = `${array[0]}`;
    for (let i = 1; i < array.length; i++) {
        joinedArray += sep;
        joinedArray += array[i];
    }
    return joinedArray;
}

// array.max()
function max(array) {
    let maxValue = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;
}
    