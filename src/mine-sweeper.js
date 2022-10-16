const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];

  // ************** ГОВНОКОД *****************************

  for (let row = 0; row < matrix.length; row++) {
    res.push([]);

    for (let col = 0; col < matrix[row].length; col++) {
      let counter = 0;

      if (row === 0) {
        counter += matrix[row + 1][col] ? 1 : 0;    //клетка снизу
        if (col === 0) {
          counter += matrix[row][col + 1] ? 1 : 0;  //клетка справа
          counter += matrix[row + 1][col + 1] ? 1 : 0;  //клетка справа снизу
        } else if (col === matrix[row].length - 1) {
          counter += matrix[row][col - 1] ? 1 : 0;  //клетка слева
          counter += matrix[row + 1][col - 1] ? 1 : 0;  //клетка слева снизу
        } else {
          counter += matrix[row][col - 1] ? 1 : 0;  //клетка слева
          counter += matrix[row + 1][col - 1] ? 1 : 0;  //клетка слева снизу
          counter += matrix[row][col + 1] ? 1 : 0;  //клетка справа
          counter += matrix[row + 1][col + 1] ? 1 : 0;  //клетка справа снизу
        }


      } else if (row === matrix.length - 1) {
        counter += matrix[row - 1][col] ? 1 : 0;    //клетка сверху
        if (col === 0) {
          counter += matrix[row][col + 1] ? 1 : 0;  //клетка справа
          counter += matrix[row - 1][col + 1] ? 1 : 0;  //клетка справа сверху
        } else if (col === matrix[row].length - 1) {
          counter += matrix[row][col - 1] ? 1 : 0;  //клетка слева
          counter += matrix[row - 1][col - 1] ? 1 : 0;  //клетка слева сверху
        } else {
          counter += matrix[row][col - 1] ? 1 : 0;  //клетка слева
          counter += matrix[row - 1][col - 1] ? 1 : 0;  //клетка слева сверху
          counter += matrix[row][col + 1] ? 1 : 0;  //клетка справа
          counter += matrix[row - 1][col + 1] ? 1 : 0;  //клетка справа сверху
        }


      } else {
        counter += matrix[row + 1][col] ? 1 : 0;    //клетка снизу
        counter += matrix[row - 1][col] ? 1 : 0;    //клетка сверху

        if (col === 0) {
          counter += matrix[row][col + 1] ? 1 : 0;  //клетка справа
          counter += matrix[row + 1][col + 1] ? 1 : 0;  //клетка справа снизу
          counter += matrix[row - 1][col + 1] ? 1 : 0;  //клетка справа сверху
        } else if (col === matrix[row].length - 1) {
          counter += matrix[row][col - 1] ? 1 : 0;  //клетка слева
          counter += matrix[row + 1][col - 1] ? 1 : 0;  //клетка слева снизу
          counter += matrix[row - 1][col - 1] ? 1 : 0;  //клетка слева сверху
        } else {
          counter += matrix[row][col - 1] ? 1 : 0;  //клетка слева
          counter += matrix[row + 1][col - 1] ? 1 : 0;  //клетка слева снизу
          counter += matrix[row - 1][col - 1] ? 1 : 0;  //клетка слева сверху
          counter += matrix[row][col + 1] ? 1 : 0;  //клетка справа
          counter += matrix[row + 1][col + 1] ? 1 : 0;  //клетка справа снизу
          counter += matrix[row - 1][col + 1] ? 1 : 0;  //клетка справа сверху
        }
      }











      res[row][col] = counter;

    }

  }
  console.log(res)
  return res;

}

module.exports = {
  minesweeper
};
