/*
INPUT: an array of rectangles
RETURN: the total area covered by all rectangles

ALGORITHM:
- find area of each rectangle array -> map
- sum the areas -> reduce
*/

function totalArea(rectangles){
  let areas = rectangles.map(([side1, side2]) => side1 * side2);
  return areas.reduce((total, area) => total + area);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141


/*
INPUT: an array of rectangles
RETURN: the total area covered by all of the squares
RULES:
- don't include the area of non-square rectangles

ALGORITHM:
- filter out all non-square rectangles -> filter
- find area of each rectangle array -> map
- sum the areas -> reduce
*/

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  let areas = squares.map(([side1, side2]) => side1 * side2);
  return areas.reduce((total, area) => total + area);
}

console.log(totalSquareArea(rectangles));    // 121