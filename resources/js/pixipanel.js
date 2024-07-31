
import {Application, Assets, Sprite, Container, Graphics, BitmapText, Point, AnimatedSprite} from "pixi.js";

/**
 * Pixijs Setup 
 */

/**
 * Initialise API
 * -setup environment
 * -define the interface between the Pixijs module and DOM
 */


// ready DOM 
const body = document.body;
const inner = document.getElementById("panelm");


// ready pixi canvas
const app = new Application();

(async () => {
    await app.init({backgroundAlpha:0, width: window.innerWidth, height: 1000, autoDensity: true, antialias: true, powerPreference: 'high-performance'});
    inner.appendChild(app.canvas); // link application to DOM
})();

const background = new Container();

const main = new Container();
let xStrt = document.getElementById("panell").clientWidth; 

app.stage.addChildAt(background, 0);
app.stage.addChildAt(main, 1);


/**
 * API
 */


/**
 * GRID SYSTEM 
 */
const grid = gridCoordinates();  // object of 49 (7/7) containers divded into three categories;  acccessed: grid.<sbn, tbt, cross>[col][row]


/**
 * -BUILD grid 
 * @returns {Object[]} :grid coordinates top left to bottom right; [col][row].property
 */
function gridCoordinates(){
  let count = 0;
  let grd = [];

  while (count < 10) {
    let col = [];

    for (let index = 0; index < 10; index++) {
      let x1;

      if(count === 0){
        x1 = xStrt;
      }else{
        x1 = 100 * count;
      }

      let tile = {
        x: x1,
        y: 100 * index,
        width: 100,
        height: 100
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
  
    let cross = {lat: {
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
   * @param {number} col :xp osition
   * @param {number} row :y position
   * @returns :updates the coordinates of the recieved object and returns the reference
   */
function gridify(a,col,row){
  let d = grid[col][row];
  a.x = d.x + (d.width / 4);
  a.y = d.y + (d.height / 4);

  return a;
}




/**
 * PAGINATION
 */

/**
 * -BUILD ppage
 * Instance of BUILD with preconfigurations
 */
function pageHome(){

  const txt = new Container();
  const blocks = new Container();
  
  /**
   * Define elements 
   */
 
  const title = "MEET TH WRITER";
  const pTitle = pixifyText(title,2);

  const name = "Jordane Delahaye";
  const pName = pixifyText(name,1);

  // define design  
  // row 1
  blocks.addChild(block(0x000000,4,0).fill(0x000000));
 
  // row 2
  blocks.addChild(gridify(pTitle[0],2,1));
  blocks.addChild(block(0x000000,2,1));
  blocks.addChild(gridify(pTitle[3],5,1));
  blocks.addChild(block(0x000000,5,1));

  // row 3
  blocks.addChild(block(0x000000, 2, 2).fill(0x000000));
  blocks.addChild(gridify(pTitle[1],3,2));
  blocks.addChild(block(0x000000,3,2));
  blocks.addChild(block(0x000000, 5, 2).fill(0x000000));
  blocks.addChild(gridify(pTitle[2],4,2));
  blocks.addChild(block(0x000000,4,2));
  blocks.addChild(block(0x000000, 6, 2).fill(0x000000));

  // row 4
  blocks.addChild(block(0x000000, 2, 3).fill(0x000000));
  blocks.addChild(block(0x000000, 3, 3).fill(0x000000));
  blocks.addChild(block(0x000000, 4, 3).fill(0x000000));
  blocks.addChild(gridify(pTitle[4],5,3));
  blocks.addChild(block(0x000000,5,3));

  // row 5
  blocks.addChild(block(0x000000, 3, 4).fill(0x000000));
  blocks.addChild(block(0x000000, 4, 4).fill(0x000000));
  blocks.addChild(gridify(pTitle[5],5,4));
  blocks.addChild(block(0x000000,5,4));

  //row 6
  blocks.addChild(gridify(pTitle[6],1,5));
  blocks.addChild(block(0x000000,1,5));
  blocks.addChild(gridify(pTitle[7],2,5));
  blocks.addChild(block(0x000000,2,5));
  blocks.addChild(gridify(pTitle[8],3,5));
  blocks.addChild(block(0x000000,3,5));
  blocks.addChild(gridify(pTitle[9],4,5));
  blocks.addChild(block(0x000000,4,5));
  blocks.addChild(gridify(pTitle[10],5,5));
  blocks.addChild(block(0x000000,5,5));
  blocks.addChild(gridify(pTitle[11],6,5));
  blocks.addChild(block(0x000000,6,5));

  // row 7
  blocks.addChild(block(0x000000,1,6).fill(0x000000));
  blocks.addChild(block(0x000000,6,6).fill(0x000000));

  // row 8
  blocks.addChild(block(0x000000,3,7).fill(0x000000));
  let first = gridify(pName[0],4,7);
  first.x -= 24;
  first.y -= 25;
  let last = gridify(pName[1],4,7);
  last.x -= 24;
  last.y += 25;
  main.addChild(first,last);

  // row 9 
  
  main.addChild(blocks,txt);

}


function pageTwo(){
  let title = new Container();
  let txt = pixifyText("TORTUOUS",2);
  
  // row 2
  title.addChild(block(0x000000,3,1).fill(0x000000));

  //row 3
  title.addChild(block(0x000000,0,2));
  title.addChild(gridify(txt[0],0,2));
  title.addChild(block(0x000000,1,2));
  title.addChild(gridify(txt[1],1,2));
  title.addChild(block(0x000000,2,2));
  title.addChild(gridify(txt[2],2,2));
  title.addChild(block(0x000000,3,2));
  title.addChild(gridify(txt[3],3,2));
  title.addChild(block(0x000000,4,2));
  title.addChild(gridify(txt[4],4,2));
  title.addChild(block(0x000000,5,2));
  title.addChild(gridify(txt[5],5,2));
  title.addChild(block(0x000000,6,2));
  title.addChild(gridify(txt[6],6,2));
  title.addChild(block(0x000000,7,2));
  title.addChild(gridify(txt[7],7,2));

  //row 4
  title.addChild(block(0x000000,1,3).fill(0x000000));

  main.addChild(title);


  // HTML TEXT
  let info = `<div class="text-wrap" >One word that I think best sums up my journey as a professional writer is “tortuous.” 

  The first time I read that word, I thought, “Torturous?” 
  It triggered an innately hostile characterisation, 
  contrary to the sense of discovery and adventure that “tortuous” inspires.<div> `

  inner.innerHTML =`${info}`;

}pageTwo();


/**
 * -BUILD -helpers
 */

/**
 * makeLetters
 * @param {String} str :string to convert to Pixijs BitmapText object    
 * @returns {BitmapText} :Pixijs BitmapText
 */
function makeLetter(str) {
  const letter = new BitmapText({text: str, style: {fontFamily:"Times New Roman",fontSize: 48, fill: 0x000000, align: "center"}});
  return letter;
}

/**
 * pixifyText
 * @param {string} str  -string to be converted to Pixijs BitmapText objects
 * @param {number} cut  -pixification method 0: as a single text object to be manipulated as a group, 1: split by white space, 2: each character
 * @returns {BitmapText[]}
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


/**
 * block
 * @param {color} c :block line color
 * @param {number} x :col
 * @param {number} y :row
 * @returns {Graphics} 
 */
function block(c, x, y){
  let tile = grid[x][y];
  let shape = new Graphics();
  shape.rect(tile.x, tile.y, tile.width, tile.height);
  shape.stroke(c);
  return shape;
}