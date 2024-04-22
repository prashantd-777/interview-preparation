

const arr = [1, 2, 3, 4, 5];

function modifyArray(arr, cb) {
    arr.push(10);
    cb();
}

function callBackFunc() {
    console.log("Arr is updated or changed", arr)
}

modifyArray(arr, callBackFunc)