
import {Application, Assets, Sprite, Container, Graphics, BitmapText, Point, AnimatedSprite} from "pixi.js";

/**
 * Pixijs Setup 
 */

/**
 * Initialise API
 * -setup environment
 * -define the interface between the Pixijs module and DOM
 */


// Ready DOM 
const body = document.body;
const inner = document.getElementById("canvas");
const outer = document.getElementById("gridPanel");

// Ready Pixijs canvas
const app = new Application();

(async () => {
    await app.init({backgroundAlpha:0, resizeTo: outer, width: outer.clientWidth, height: outer.clientHeight, autoDensity: true, antialias: true, powerPreference: "high-performance"});
    inner.appendChild(app.canvas); // link application to DOM
})();


const background = new Container();

const main = new Container();

app.stage.addChildAt(background, 0);
app.stage.addChildAt(main, 1);

let xFactor = window.innerWidth < window.innerHeight ? 0.05 : 0.15;
let yFactor = window.innerWidth < window.innerHeight ? 0.1 : 0.08;
let xStrt = () => xFactor * window.innerWidth; 
let yStrt = () => yFactor * window.innerHeight; 

// load Assets
Assets.add({alias: "pg3", src: "./storage/images/lead.JPG" });

(async () => {
  await Assets.backgroundLoad("pg3");
}
)();

/**
 * API
 */


/**
 * GRID SYSTEM 
 */
const grid = gridCoordinates();  // object of 49 (9/9) containers divded into three categories;  acccessed: grid.<sbn, tbt, cross>[col][row]

/**
 * -BUILD grid 
 * @returns {Object[]} :grid coordinates top left to bottom right; [col][row].property
 */
function gridCoordinates(){
  let count = 0;
  let grd = [];
  
  let widthRef = outer.clientWidth/9
  let heightRef = outer.clientHeight/9;
  let scale = (2 * window.innerWidth) < window.innerHeight ? 1 : 0.8;
  scale = window.innerWidth >= 1919 ? 2 : (window.innerWidth >= 768 ? 1 : scale);

  while (count < 9) {
    let col = [];

    for (let index = 0; index < 9; index++) {

      let tile = {
        x: widthRef * count,
        y: heightRef * index,
        width: widthRef,
        height: heightRef,
        scale: scale
      } 

      col.push(tile);
    }

    grd.push(col);

    count++;
  }

  return grd;
}

function gridFill(c){
  let x = 0;
  let full = new Container();
  while (x < grid.length){
    let y = 0;
    while (y < grid[x].length) {
        full.addChild(block(c,x,y));

        y++;
    }
    x++;
  }

  main.addChild(full);
}gridFill("0x000000");

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
   * @param {number} col :x position
   * @param {number} row :y position
   * @returns :updates the coordinates of the recieved object and returns the reference
   */
function gridify(a,col,row){
  let d = grid[col][row];
  a.anchor.set(0);
  a.x = d.x;
  a.y = d.y;
  a.scale.set(d.scale);
  return a;
}

function gridifyMid(a,col,row){
  let d = grid[col][row];
  a.anchor.set(0.5);
  a.x = d.x + (d.width / 2);
  a.y = d.y + (d.height / 2);
  a.scale.set(d.scale);
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

  let page1 = new Container();
  let cover = new Container();
  let txt = new Container();
  let blocks = new Container();
  
  /**
   * Define elements 
   */
  let f1 = {size:32};
  let title = "MEET TH WRITER";
  let pTitle = pixifyText(title,2,f1);

  let f2 = {size:28};
  let name = "Jordane Delahaye";
  let pName = pixifyText(name,1,f2);

  // define design  
  // row 1
  blocks.addChild(block(0x000000,4,0).fill(0x000000));
 
  // row 2
  blocks.addChild(gridifyMid(pTitle[0],2,1));
  blocks.addChild(block(0x000000,2,1));
  blocks.addChild(gridifyMid(pTitle[3],5,1));
  blocks.addChild(block(0x000000,5,1));

  // row 3
  blocks.addChild(block(0x000000, 2, 2).fill(0x000000));
  blocks.addChild(gridifyMid(pTitle[1],3,2));
  blocks.addChild(block(0x000000,3,2));
  blocks.addChild(block(0x000000, 5, 2).fill(0x000000));
  blocks.addChild(gridifyMid(pTitle[2],4,2));
  blocks.addChild(block(0x000000,4,2));
  blocks.addChild(block(0x000000, 6, 2).fill(0x000000));

  // row 4
  blocks.addChild(block(0x000000, 2, 3).fill(0x000000));
  blocks.addChild(block(0x000000, 3, 3).fill(0x000000));
  blocks.addChild(block(0x000000, 4, 3).fill(0x000000));
  blocks.addChild(gridifyMid(pTitle[4],5,3));
  blocks.addChild(block(0x000000,5,3));

  // row 5
  blocks.addChild(block(0x000000, 3, 4).fill(0x000000));
  blocks.addChild(block(0x000000, 4, 4).fill(0x000000));
  blocks.addChild(gridifyMid(pTitle[5],5,4));
  blocks.addChild(block(0x000000,5,4));

  //row 6
  blocks.addChild(gridifyMid(pTitle[6],1,5));
  blocks.addChild(block(0x000000,1,5));
  blocks.addChild(gridifyMid(pTitle[7],2,5));
  blocks.addChild(block(0x000000,2,5));
  blocks.addChild(gridifyMid(pTitle[8],3,5));
  blocks.addChild(block(0x000000,3,5));
  blocks.addChild(gridifyMid(pTitle[9],4,5));
  blocks.addChild(block(0x000000,4,5));
  blocks.addChild(gridifyMid(pTitle[10],5,5));
  blocks.addChild(block(0x000000,5,5));
  blocks.addChild(gridifyMid(pTitle[11],6,5));
  blocks.addChild(block(0x000000,6,5));

  // row 7
  blocks.addChild(block(0x000000,1,6).fill(0x000000));
  blocks.addChild(block(0x000000,6,6).fill(0x000000));

  // row 8
  blocks.addChild(block(0x000000,3,7).fill(0x000000));
  let first = gridify(pName[0],4,7);
  first.x += 5;
  first.y -= 0;
  let last = gridify(pName[1],4,7);
  last.x += 5;
  last.y += (first.height + 5);
  page1.addChild(first,last);

  // row 9 
  
  cover.addChild(blocks,txt);
  page1.addChild(cover);
  main.addChild(page1);

}


function pageTwo(){

  let f1 = {size:32};
  let page2 = new Container();
  let title = new Container();
  let blox = new Container()
  let txt = pixifyText("TORTUOUS",2,f1);
  
  // row 2
  blox.addChild(block(0x000000,3,1).fill(0x000000));

  //row 3
  blox.addChild(block(0x000000,0,2));
  title.addChild(gridifyMid(txt[0],0,2));
  blox.addChild(block(0x000000,1,2));
  title.addChild(gridifyMid(txt[1],1,2));
  blox.addChild(block(0x000000,2,2));
  title.addChild(gridifyMid(txt[2],2,2));
  blox.addChild(block(0x000000,3,2));
  title.addChild(gridifyMid(txt[3],3,2));
  blox.addChild(block(0x000000,4,2));
  title.addChild(gridifyMid(txt[4],4,2));
  blox.addChild(block(0x000000,5,2));
  title.addChild(gridifyMid(txt[5],5,2));
  blox.addChild(block(0x000000,6,2));
  title.addChild(gridifyMid(txt[6],6,2));
  blox.addChild(block(0x000000,7,2));
  title.addChild(gridifyMid(txt[7],7,2));

  //row 4
  blox.addChild(block(0x000000,1,3).fill(0x000000));

  page2.addChild(title,blox);

  main.addChild(page2);


  // HTML TEXT
  let bGrid = document.getElementById("r1c1r1c1");
  let pGrid = grid[3][4];
  let top = yStrt() + pGrid.y;
  let left = xStrt() + pGrid.x;
  let info = `<p class="pgText" style="position:absolute;top:${top}px;left:${left}px;right:${xStrt()+app.canvas.width}px;"> One word that I think best sums up my journey as a professional writer 
  is “tortuous.” 

  The first time I read that word, I thought, “Torturous?” 
  It triggered an innately hostile characterisation, 
  contrary to the sense of discovery and adventure that “tortuous” inspires.</p>`;
  document.getElementById("bg").innerHTML = info;

}pageTwo();


async function pageThree() {
  
  let pic = await Assets.load("pg3");
  
  let page3 = new Container();
  let heading = new Container();
  let blox = new Container();

  let txt = pixifyText("FRONT PAGE",2);

  // row 1
  blox.addChild(block(0x000000,1,0).fill(0x000000));
  blox.addChild(block(0x000000,2,0));
  heading.addChild(gridifyMid(txt[0],2,0));
  blox.addChild(block(0x000000,3,0));
  heading.addChild(gridifyMid(txt[1],3,0));
  blox.addChild(block(0x000000,4,0));
  heading.addChild(gridifyMid(txt[2],4,0));
  blox.addChild(block(0x000000,5,0));
  heading.addChild(gridifyMid(txt[3],5,0));
  blox.addChild(block(0x000000,6,0));
  heading.addChild(gridifyMid(txt[4],6,0));
  blox.addChild(block(0x000000,7,0).fill(0x000000));
  blox.addChild(block(0x000000,8,0).fill(0x000000));

  // row 2
  blox.addChild(block(0x000000,1,1).fill(0x000000));
  blox.addChild(block(0x000000,2,1).fill(0x000000));
  blox.addChild(block(0x000000,3,1).fill(0x000000));
  blox.addChild(block(0x000000,4,1));
  heading.addChild(gridifyMid(txt[5],4,1));
  blox.addChild(block(0x000000,5,1));
  heading.addChild(gridifyMid(txt[6],5,1));
  blox.addChild(block(0x000000,6,1));
  heading.addChild(gridifyMid(txt[7],6,1));
  blox.addChild(block(0x000000,7,1));
  heading.addChild(gridifyMid(txt[8],7,1));
  blox.addChild(block(0x000000,8,1).fill(0x000000));

  let lead = await Assets.load("pg3");

  let lsprite = Sprite.from(lead);

  page3.addChild(blox,heading,gridify(lsprite,0,3));

  // HTML TEXT
  let info = `<pre id="pg3txt1" class="position-absolute" style="padding:-1.5rem !important;">
  One word that I think best sums up my 
  journey as a professional writer 
  is “tortuous.” 

  The first time I read that word, I 
  thought, “Torturous?” 
  It triggered an innately hostile 
  characterisation, 
  contrary to the sense of discovery 
  and adventure that “tortuous” 
  inspires. <pre>`;

  let bGrid = document.getElementById("r3c2r3c1");
  bGrid.innerHTML =`${info}`;

  main.addChild(page3);
  // HTML Text
}


/**
 * -BUILD -helpers
 */

/**
 * makeLetters
 * @param {String} str :string to convert to Pixijs BitmapText object    
 * @returns {BitmapText} :Pixijs BitmapText
 */
function makeLetter(str, font) {
  let f = font ? font : {size:32};
  const letter = new BitmapText({text: str, style: {fontFamily:"Times New Roman",fontSize: f.size, fill: 0x000000, align: "center"}});
  return letter;
}

/**
 * pixifyText
 * @param {string} str  -string to be converted to Pixijs BitmapText objects
 * @param {number} cut  -pixification method 0: as a single text object to be manipulated as a group, 1: split by white space, 2: each character
 * @returns {BitmapText[]}
 */
function pixifyText(str,cut,font){
  let pixified = [];
  switch (cut) {
  case 0:
    pixified.push(makeLetter(str,font));
    break;
  case 1:
    let a = str.split(" ");
    a.forEach(s => {pixified.push(makeLetter(s,font))});
    break;
  case 2:
    let c = str.replaceAll(/ /g,"");
    let b = c.split("");
    b.forEach(s => {pixified.push(makeLetter(s,font))});
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

let count=0;
window.addEventListener("scroll", () => {
  console.log(count++);
});