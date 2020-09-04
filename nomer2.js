function makeLine(length) {
    var arr = [
        [0],
        [0, 0],
        [0, 0, 0],
        [0, 0, 0, 0]
      ];
      var line = ""
      var counter = 1;
      for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
          arr[i][j] = counter;
          counter += 2;
          line += " " + (arr[i][j]) +" "
        //   console.log(arr[i][j])
        }
        line += "\n"
      }
  
    return line
  }
  console.log(makeLine(5));

function segitigaganjil(n){
    let angkaPertama = (n * n) - (n -1)
    let ans = 0;
    let count = 0;

    while (count < n){
        if (angkaPertama % 2 !== 0){
            ans += angkaPertama;
            count++;
        }
        angkaPertama++
    }
    return ans
}
console.log(segitigaganjil(2))
console.log(segitigaganjil(3))

