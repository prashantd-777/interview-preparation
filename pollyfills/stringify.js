function formatArray(data) {
    const result = (data.map(item => String(item))).join();
    return result;
}

function formatObj(data) {
    const res = Object.keys(data).filter(key => data[key]);
    const result = res.map(key => `"${key}": ${String(data[key])}`).join();
    return result;
}

JSON.myStringify = function (data) {
    if([null, NaN, undefined].includes(data)) {
        if(data === undefined) {
            return undefined;
        }
        return null;
    }

    const type = typeof data;
    switch(type) {
        case 'function': return undefined;
        case 'string': return `"${data}"`;
        case 'object': {
            if(Array.isArray(data)) {
                return `[${formatArray(data)}]`
            }
            if(data instanceof Date) {
                return `"${data.toISOString()}"`
            }

            return `{${formatObj(data)}}`
        }
        default: return String(data);
    }
}

console.log(JSON.myStringify([1, 2, 3, 4, 5, 6]));
console.log(JSON.myStringify(null)); // null
console.log(JSON.myStringify(undefined)); //undefined
console.log(JSON.myStringify(NaN)); //null
console.log(
  JSON.myStringify(function () {
    console.log("rahul");
  })
); //undefinded

console.log(JSON.myStringify({ a: "rahul", city: "gwalior", d: undefined })); // {"a":"rahul","city":"gwalior"}



console.log(JSON.stringify([1, 2, 3, 4, 5, 6])); //[1,2,3,4,5,6]
console.log(JSON.stringify(null)); // null
console.log(JSON.stringify(undefined)); //undefined
console.log(JSON.stringify(NaN)); //null
console.log(
  JSON.stringify(function () {
    console.log("rahul");
  })
); //undefinded
console.log(JSON.stringify({ a: "rahul", city: "gwalior", d: undefined })); // {"a":"rahul","city":"gwalior"}
