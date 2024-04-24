// Flattened the object
const obj = {
    A: 12,
    B: "23",
    C: {
        P: 23,
        O: {
            L: 56
        },
        Q: [1, 2]
    }
};

function flattenedObject(obj) {
    const output = {};
    function generateFlatObject(inputObj, parent = '') {
        for(let key in inputObj) {
            const newParent = parent + key;
            const newObjValue = inputObj[key];
            if(typeof newObjValue === 'object') {
                generateFlatObject(newObjValue, `${newParent}.`)
            } else {
                output[newParent] = newObjValue;
            }
        }
    }

    generateFlatObject(obj)
    return output;
}


console.log("result", flattenedObject(obj))