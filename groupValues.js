// const output = [
//     {
//         A: ['Aaron', 'Anthony']
//     },
//     {
//         B: ['Bernard']
//     },
//     {
//         R: ['Richard', 'Riley']
//     },
//     {
//         Z: ['Zack']
//     }
// ]


const names = [
    "Richard",
    "Elmer",
    "Zack",
    "Jess",
    "Jake",
    "Riley",
    "Drew",
    "Anthony",
    "Aaron",
    "Bernard",
  ];
  
  function transformArray(arr) {
    const output = {};
    arr.forEach((item) => {
      const row = {};
      const firstLetter = item.charAt(0);
      row[firstLetter] = [item];
      if(output[firstLetter]) {
          output[firstLetter] = [...output[firstLetter], item]
      } else {
          output[firstLetter] = [item]
      }
    });
    
    return output;
  }
  
  console.log("test",  transformArray(names));
  