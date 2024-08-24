
const outer = document.getElementById("gridPanel");
let refWidth = outer.clientWidth/9;
let refHeight = outer.clientHeight/9;

//scale factor
let xFactor = window.innerWidth < window.innerHeight ? 0.05 : 0.15;
let yFactor = window.innerWidth < window.innerHeight ? 0.1 : 0.08;
let xStrt = () => window.innerWidth < window.innerHeight ? xFactor * window.innerWidth : xFactor * window.innerHeight; 
let yStrt = () => window.innerWidth < window.innerHeight ? yFactor * window.innerHeight : yFactor * window.innerWidth; 

/**
 * GRID SYSTEM 
 */
const grid = gridCoordinates();  // object Array of 81 (9/9) coordinate objects defining the grid system;  acccessed: grid[col][row]

/**
 * -BUILD grid 
 * @returns {Object[]} :grid coordinates top left to bottom right; [col][row].property
 */
function gridCoordinates(width, height){
  let grd = [];
  let scale = (2 * window.innerWidth) < window.innerHeight ? 1 : 0.75;
  scale = window.innerWidth >= 1919 ? 2 : (window.innerWidth >= 768 ? 1 : scale);
  
  let count = 0;
  while (count < 9) {
    let col = [];
  
    for (let index = 0; index < 9; index++) {
      let tile = {
        x: refWidth * count,
        y: refHeight * index,
        width: refWidth,
        height: refHeight,
        scale: scale
      } 
      col.push(tile);
    }
  
    grd.push(col);
  
    count++;
  }
  
  return grd;
}
  
/**
 * quadrant
 * @param {Array[]} tiles  :7x7 Array[] of Pixi Containers
 * @returns {Object} :object of Pixi Containers divided into four dimensions: twoxtwo, horizontal centre, vertical centre and centre
 */
function quadrant(){    
  let grd = {tbt: tbt, cross: cross};
    
  let tbt = {
    tl: {
      x: xStrt,
      y: 0,
      width: 100 / 2,
      height: 100 / 2
    },
    tr: {
      x: xStrt + 100,
      y: 0,
      width: 100 / 2,
      height: 100
    },
    bl: {
      x: xStrt,
      y: 100,
      width: 100,
      height: 100
    },
    br: {
      x: xStrt + 100,
      y: 100,
      width: 100,
      height: 100
    }
  }
    
  let cross = {
    lat: {
      x: xStrt + (100 * 4),
      y: 0,
      width: 100,
      height: 100
    },
    horizon: {
      x: xStrt,
      y: 100,
      width: 100,
      height: 100
    }
  }

  return grd;
}

    
/**
 * GRIDIFY
 * @param {Object} a :image, text...
 * @param {number} col :x position
 * @param {number} row :y position
 * @returns :updates the coordinates of the recieved object and returns the reference
 */
function gridify(a, col, row){
  let d = grid[col][row];
  a.anchor.set(0);
  a.x = d.x;
  a.y = d.y;
  a.scale.set(d.scale);
  scaleToCanvas(a); // if further scaling is needed
  return a;
}
  
function gridifyCenter(a,col,row){
  let d = grid[col][row];
  a.x = d.x + (d.width / 2);
  a.y = d.y + (d.height / 2);
  a.scale.set(d.scale);
  scaleToCanvas(a); 
  return a;
}


function scaleToCanvas(element){
  let width = element.width;
  let ref = outer.clientWidth - (0.05 * outer.clientWidth);
  if(width > outer.clientWidth){
    element.scale.x *= ref/width;
    element.scale.y *= ref/width;
  }
}

  export {gridify, gridifyCenter, grid, yStrt, xStrt};