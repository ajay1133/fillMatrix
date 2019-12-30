var fillMatrix = function (startRow, startCol, endRow, endCol, output) {
  if (endRow <= startRow || endCol <= startCol) {
    return output;
  }
  var maxRow = 1 << maxPower(endRow - startRow);
      maxCol = 1 << maxPower(endCol - startCol);    
  output.push({
    startRow,
    startCol,
    endRow: maxRow,
    endCol: maxCol,
    size: `${maxRow} x ${maxCol}`
  });
  return fillMatrix(startRow + maxRow, startCol + maxCol, endRow, endCol, output);     
}

var maxPower = function(num) {
  if (num < 2) {
    return 0;
  }
  var max = 0;
  for (var i = 1; i <= num/2; i++) {
    if (num / 1 >> i >= 1) {
      max = i;
    }  
  }
  return max;
}

console.log(fillMatrix(0, 0, 14, 16, []));