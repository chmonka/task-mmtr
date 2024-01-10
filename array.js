
function getDigitalRoot(num) {
    let sum = num;
    while (sum > 9) {
      let arraySplit = sum.toString().split('').map((elem) => {
        return Number.parseInt(elem);
      });
      sum = arraySplit.reduce((sum, elem) => sum + elem, 0);
    }
    return sum;
  }
  

  console.log(getDigitalRoot(123456999))