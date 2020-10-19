module.exports = function towelSort (matrix) {
    if (matrix !== undefined) {
      if (matrix.length > 0) {
        let arr = Array();
        for (let i = 0; i < matrix.length; i++) {
          const element = matrix[i];
          if(i%2 == 0){
            arr = arr.concat(element);
          }else{
            arr = arr.concat(element.reverse());
          }
        }
        return arr;
      } else {
        return [];
      }
    }
    return [];
  }
