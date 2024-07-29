
import {Application, Assets, Sprite, Container, Graphics, BitmapText} from "pixi.js";

/**
 * Pixijs Setup 
 */

/**
 * Initialise API
 * Define the interface with the Pixijs module
 */

const app = new Application();

// top container
const panel = new Container();

app.stage.addChild(panel);

// initialise DOM interface
const main = document.getElementById("panelm");
const background = document.getElementById("background-layer");

// Pixijs Assets.load ProgressCallback (progress) display element
const p = new Text({text: '0%', style: {fontFamily: 'Arial', fontSize: 24, fill: 0x000000, align: 'center'}});


/**
 * API FUNCTIONS
 */

/**
 * Grid System 
 */
const grid = tileCoordinates();  // object of 63 containers divded into three categories;  acccessed: grid.<sbn, tbt, cross>[col][row]


/**
 * -BUILD grid 
 * @returns {Object[]} grid coordinates top left to bottom right; [col][row].properties
 */
function tileCoordinates(){
  // scale grid dimensions to DOM 
  let mStrt = document.getElementById("panell").clientWidth;
  let count = 0;
  let grd = [];

  while (count < 7) {
    let col = [];

    for (let index = 0; index < 9; index++) {
      let x1;
      if(count === 0){
        x1 = mStrt;
      }else{
        x1 = (main.clientWidth / 7) * count;
      }

      let tile = {
        x: x1,
        y: (main.clientHeight / 9) * index,
        width: main.clientWidth / 7,
        height: main.clientHeight / 9
      }

      col.push(tile);
    }

    grd.push(col);

    count++;
  }

  return grd;
}

/**
 * @param {Arrary[]} tiles  -7x9 Array[] containing Pixijs containers
 * @returns {Object} object of Pixijs containers divided into three categories: 7x9
 */
function quadrant(){
    let mStrt = document.getElementById("panell").clientWidth;
    
    let grd = {tbt: tbt, cross: cross};
  
    let tbt = {
      tl: {
      x: mStrt,
      y: 0,
      width: main.clientWidth / 2,
      height: main.clientHeight / 2
    },
    tr: {
      x: mStrt + (main.clientWidth / 2),
      y: 0,
      width: main.clientWidth / 2,
      height: main.clientHeight / 2
    },
    bl: {
      x: mStrt,
      y: (main.clientHeight / 2),
      width: main.clientWidth / 2,
      height: main.clientHeight / 2
    },
    br: {
      x: mStrt + (main.clientWidth / 2),
      y: (main.clientHeight / 2),
      width: main.clientWidth / 2,
      height: main.clientHeight / 2
    }
    }
  
    let cross = {lat: {
      x: mStrt + ((main.clientWidth / 7) * 4),
      y: 0,
      width: main.clientWidth / 7,
      height: main.clientHeight
    },
    horizon: {
      x: mStrt,
      y: (main.clientHeight / 2),
      width: main.clientWidth,
      height: main.clientHeight / 9
    }
    }
  
  
    return grd;
  }

/**
 * -BUILD homepage
 * Instance of BUILD with preconfigurations
 */
async function pageHome(){

  await app.init({backgroundAlpha:0, autoDensity: true, antialias: true, powerPreference: 'high-performance'});

  main.appendChild(app.canvas); // link application to DOM


  /**
   * Define elements for homepage
   * to do: responsive layout 
   */
 
  const title = "MEET TH WRITER";
  const pTitle = pixifyText(title,2);

  const name = "Jordane Delahaye";
  const pName = pixifyText(name,1);


  // DESIGN  
  // row 1

  // row 2
  panel.addChild(block(0x000000,4,1));
 

  //row3

  // row 4
  panel.addChild(block(0x000000,2,3));
  panel.addChild(block(0x000000,5,3));
  panel.addChild(block(0x000000,6,3));

  // row 5
  panel.addChild(block(0x000000,2,4));
  panel.addChild(block(0x000000,3,4));
  panel.addChild(block(0x000000,4,4));

  // row 6
  panel.addChild(block(0x000000,3,5));
  panel.addChild(block(0x000000,4,5));

  //row 7

  // row 8
  panel.addChild(block(0x000000,1,7));
  panel.addChild(block(0x000000,6,7));
  

  // row 9 

}pageHome();


/**
 * -BUILD -helpers
 */

/**
 * makeLetters
 * @param {String} str  -string to convert to Pixijs BitmapText objecgt    
 * @returns {BitmapText} Pixijs BitmapText
 */
function makeLetter(str) {
  const letter = new BitmapText({text:str, style: {fontFamily:"Times New Roman",fontSize: 48, fill: 0x000000, align: "center"}});
  return letter;
}

/**
 * pixifyText
 * @param {string} str  -string to be converted to Pixijs BitmapText objects
 * @param {number} cut  -pixification method 0: as a single string, 1: split by white space, 2: each character
 * @returns BitmapText[]
 */
function pixifyText(str,cut){
  let pixified = [];
  switch (cut) {
  case 0:
    pixified.push(makeLetter(str));
    break;

  case 1:
    let a = str.split(" ");
    a.forEach(s => {pixified.push(makeLetter(s))});
    break;

  case 2:
    let c = str.replaceAll(/ /g,"");
    let b = c.split("");
    b.forEach(s => {pixified.push(makeLetter(s))});
    break;

  default:
    break;
  }
  return pixified;
}


function block(c, x, y){
  let tile = grid[x][y];
  let shape = new Graphics();
  shape.rect(tile.x, tile.y, tile.width, tile.height);
  shape.fill(c);
  return shape;
}
