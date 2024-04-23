const set = new Set([1, 2, 3]);
set.add(4);
set.add(3);
console.log(set.size);
set.delete(1)

for(let item of set) {
    console.log(item)
}