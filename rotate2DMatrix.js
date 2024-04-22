
let m = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  function clockWise(m) {
    for(let row = 0; row<m.length; row++) {
        for(let col = 0; col < row; col++) {
            let temp = m[row][col];
            m[row][col] = m[col][row];
            m[col][row] = temp;
        }
      }
      let final = m.map(r => r.reverse());
      console.log(final, "final")
  }

  clockWise(m)

