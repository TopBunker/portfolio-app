
import {Application, Assets, Sprite, Container, Graphics, BitmapText, Point, AnimatedSprite} from "pixi.js";
import {gridify, gridifyCenter, grid, yStrt, xStrt} from "./grid";
import Page from "./Page";
import {pixifyText, block} from "./build";

$.when($.ready).then(async () =>
{
/**
 * Pixijs Setup 
 */

/**
 * Initialise API
 * -setup environment
 * -define the interface between the Pixijs module and DOM
 */

// Ready DOM 
const body = document.getElementById("bgCanvas");
const inner = document.getElementById("canvas");
const outer = document.getElementById("gridPanel");
const screen = document.getElementById("topCanvas");
const dom = document.getElementById("dom");

// Ready Pixijs canvas
const bg = new Application();
const app = new Application();
const top = new Application();

(async () => {
  await bg.init({backgroundAlpha: 0, resizeTo: window, width: window.innerWidth, height: window.innerHeight, powerPreference: "high-performance",  autoDensity: true, antialias: true});
  body.appendChild(bg.canvas);

  await app.init({backgroundAlpha: 0, resizeTo: inner, width: inner.clientWidth, height: inner.clientHeight, autoDensity: true, antialias: true});
  inner.appendChild(app.canvas);

  await top.init({backgroundAlpha: 0, resizeTo: window, width: window.innerWidth, height: window.innerHeight});
  screen.appendChild(top.canvas);
})();

const background = new Container();
bg.stage.addChild(background);

const main = new Container();
app.stage.addChild(main);

// load Assets
Assets.add({alias: "pg3", src: "./storage/images/page3/img1.jpeg" });
Assets.add({alias: "pg4", src: "./storage/images/page4/img1.jpeg" });
Assets.addBundle("pg5", [
  {alias: "p51", src: "./storage/images/page5/img1.jpeg"},
  {alias: "p52", src: "./storage/images/page5/img2.jpeg"},
  {alias: "p53", src: "./storage/images/page5/img3.jpeg"},
  {alias: "p54", src: "./storage/images/page5/img4.jpeg"}
]);
Assets.addBundle("pg6", [
  {alias: "p61", src: "./storage/images/page6/img1.jpeg"},
  {alias: "p62", src: "./storage/images/page6/img2.jpeg"},
  {alias: "p63", src: "./storage/images/page6/img3.jpeg"}
]);
Assets.addBundle("pg7", [
  {alias: "p71", src: "./storage/images/page7/img1.jpeg"},
  {alias: "p72", src: "./storage/images/page7/img2.jpeg"},
  {alias: "p73", src: "./storage/images/page7/img3.jpeg"},
  {alias: "p74", src: "./storage/images/page7/img4.jpeg"}
]);
Assets.addBundle("pg8", [
  {alias: "p81", src: "./storage/images/page8/img1.jpeg"},
  {alias: "p82", src: "./storage/images/page8/img2.jpeg"},
  {alias: "p83", src: "./storage/images/page8/img3.jpeg"},
  {alias: "p84", src: "./storage/images/page8/img4.jpeg"}
]);
Assets.addBundle("pg9", [
  {alias: "p91", src: "./storage/images/page9/img1.jpeg"},
  {alias: "p92", src: "./storage/images/page9/img2.jpeg"},
  {alias: "p93", src: "./storage/images/page9/img3.jpeg"}
]);
Assets.addBundle("pg10", [
  {alias: "p101", src: "./storage/images/page10/img1.jpeg"},
  {alias: "p102", src: "./storage/images/page10/img2.jpeg"},
  {alias: "p103", src: "./storage/images/page10/img3.jpeg"},
  {alias: "p104", src: "./storage/images/page10/img4.jpeg"},
  {alias: "p105", src: "./storage/images/page10/img5.jpeg"}
]);

Assets.load(["pg3", "pg4"]);
Assets.loadBundle(["pg5", "pg6", "pg7", "pg8", "pg9", "pg10"]);

/**
 * API
 */

/**
 * PAGINATION
 */

/**
 * -BUILD pages
 */
function pageHome(){
  let cover = new Container();
  let txt = new Container();
  let blocks = new Container();
  
  /**
   * Define elements 
   */
  let f1 = {size:32};
  let title = "MEET TH WRITER";
  let pTitle = pixifyText(title,2,f1,);

  let f2 = {size:28};
  let name = "Jordane Delahaye";
  let pName = pixifyText(name,1,f2);

  // define design  
  // row 1
  blocks.addChild(block(0x000000,4,0).fill(0x000000));
 
  // row 2
  blocks.addChild(gridifyCenter(pTitle[0],2,1));
  blocks.addChild(block(0x000000,2,1));
  blocks.addChild(gridifyCenter(pTitle[3],5,1));
  blocks.addChild(block(0x000000,5,1));

  // row 3
  blocks.addChild(block(0x000000, 2, 2).fill(0x000000));
  blocks.addChild(gridifyCenter(pTitle[1],3,2));
  blocks.addChild(block(0x000000,3,2));
  blocks.addChild(block(0x000000, 5, 2).fill(0x000000));
  blocks.addChild(gridifyCenter(pTitle[2],4,2));
  blocks.addChild(block(0x000000,4,2));
  blocks.addChild(block(0x000000, 6, 2).fill(0x000000));

  // row 4
  blocks.addChild(block(0x000000, 2, 3).fill(0x000000));
  blocks.addChild(block(0x000000, 3, 3).fill(0x000000));
  blocks.addChild(block(0x000000, 4, 3).fill(0x000000));
  blocks.addChild(gridifyCenter(pTitle[4],5,3));
  blocks.addChild(block(0x000000,5,3));

  // row 5
  blocks.addChild(block(0x000000, 3, 4).fill(0x000000));
  blocks.addChild(block(0x000000, 4, 4).fill(0x000000));
  blocks.addChild(gridifyCenter(pTitle[5],5,4));
  blocks.addChild(block(0x000000,5,4));

  //row 6
  blocks.addChild(gridifyCenter(pTitle[6],1,5));
  blocks.addChild(block(0x000000,1,5));
  blocks.addChild(gridifyCenter(pTitle[7],2,5));
  blocks.addChild(block(0x000000,2,5));
  blocks.addChild(gridifyCenter(pTitle[8],3,5));
  blocks.addChild(block(0x000000,3,5));
  blocks.addChild(gridifyCenter(pTitle[9],4,5));
  blocks.addChild(block(0x000000,4,5));
  blocks.addChild(gridifyCenter(pTitle[10],5,5));
  blocks.addChild(block(0x000000,5,5));
  blocks.addChild(gridifyCenter(pTitle[11],6,5));
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

  // row 9 
  
  cover.addChild(blocks,txt,first,last);

  return new Page(null,cover,null,null,["pg2"]);
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
  title.addChild(gridifyCenter(txt[0],0,2));
  blox.addChild(block(0x000000,1,2));
  title.addChild(gridifyCenter(txt[1],1,2));
  blox.addChild(block(0x000000,2,2));
  title.addChild(gridifyCenter(txt[2],2,2));
  blox.addChild(block(0x000000,3,2));
  title.addChild(gridifyCenter(txt[3],3,2));
  blox.addChild(block(0x000000,4,2));
  title.addChild(gridifyCenter(txt[4],4,2));
  blox.addChild(block(0x000000,5,2));
  title.addChild(gridifyCenter(txt[5],5,2));
  blox.addChild(block(0x000000,6,2));
  title.addChild(gridifyCenter(txt[6],6,2));
  blox.addChild(block(0x000000,7,2));
  title.addChild(gridifyCenter(txt[7],7,2));

  //row 4
  blox.addChild(block(0x000000,1,3).fill(0x000000));

  page2.addChild(title,blox);

  // HTML TEXT
  let pGrid = grid[3][4];
  let top = yStrt() + pGrid.y;
  let left = xStrt() + pGrid.x;
  let info = `<p class="pgText fw-light text-wrap" style="position:absolute;top:${top}px;left:${left}px;right:${xStrt()}px;"> 
  One word that I think best sums up my journey as a professional writer 
  is “tortuous.” <br><br>
  The first time I read that word, I thought, “Torturous?” 
  It triggered an innately hostile characterisation, 
  contrary to the sense of discovery and adventure that “tortuous” inspires.</p>`;

  return new Page(null,page2,null,info,["pg1","pg3"]);
}

async function pageThree() {
  
  let pic = await Assets.load("pg3");
  
  let page3 = new Container();
  let heading = new Container();
  let blox = new Container();

  let txt = pixifyText("FRONT PAGE",2);

  // row 1
  blox.addChild(block(0x000000,1,0).fill(0x000000));
  blox.addChild(block(0x000000,2,0));
  heading.addChild(gridifyCenter(txt[0],2,0));
  blox.addChild(block(0x000000,3,0));
  heading.addChild(gridifyCenter(txt[1],3,0));
  blox.addChild(block(0x000000,4,0));
  heading.addChild(gridifyCenter(txt[2],4,0));
  blox.addChild(block(0x000000,5,0));
  heading.addChild(gridifyCenter(txt[3],5,0));
  blox.addChild(block(0x000000,6,0));
  heading.addChild(gridifyCenter(txt[4],6,0));
  blox.addChild(block(0x000000,7,0).fill(0x000000));
  blox.addChild(block(0x000000,8,0).fill(0x000000));

  // row 2
  blox.addChild(block(0x000000,1,1).fill(0x000000));
  blox.addChild(block(0x000000,2,1).fill(0x000000));
  blox.addChild(block(0x000000,3,1).fill(0x000000));
  blox.addChild(block(0x000000,4,1));
  heading.addChild(gridifyCenter(txt[5],4,1));
  blox.addChild(block(0x000000,5,1));
  heading.addChild(gridifyCenter(txt[6],5,1));
  blox.addChild(block(0x000000,6,1));
  heading.addChild(gridifyCenter(txt[7],6,1));
  blox.addChild(block(0x000000,7,1));
  heading.addChild(gridifyCenter(txt[8],7,1));
  blox.addChild(block(0x000000,8,1).fill(0x000000));

  let lead = await Assets.load("pg3");

  let image = Sprite.from(lead);
  image = gridify(image,0,3);
  page3.addChild(blox,heading,image);
  
  // HTML TEXT
  let pGrid = grid[0][0];
  let top = main.height + yStrt();
  console.log(top);
  let left = xStrt() + pGrid.x;
  let right = xStrt();
  let p1 = `<p class="domText fw-light text-wrap" style="position:absolute;top:${top}px;left:${left}px;">
  My passion for language took me on a tortuous path. I was encouraged to flex my pen at a young age, 
  and I wrote for a national youth weekly as a high schooler. 
  <br><br>
  </p>`;
  top += (100 + yStrt());
  let p2 = `<p class="domText fw-light text-wrap" style="position:absolute;top:${top}px;left:${left}px;">
  I later gained further tutelage as a journalist in the editorial department of two 
  national print publications, each with readerships of over 3 million. 
  <br><br>
  </p>`;
  top += (100 + yStrt());
  let p3 = `<p class="domText fw-light text-wrap" style="position:absolute;top:${top}px;left:${left}px;">
  One of my proudest achievements as a freelance reporter for the Jamaica Gleaner came with my first lead story.
  <br><br>
  </p>`;
  let domMedia = p1+p2+p3;
  return new Page(null,page3,null,domMedia,["pg2","pg4"]);
}

async function pageFour(){

  let texture  = await Assets.load("p4");
  let image = Sprite.from(texture);
  image = gridify(image,0,0);

  let top = yStrt();
  let left = xStrt;
  let p1 = `<p class="domText fw-light text-wrap" style="position:absolute;top:${top}px;left:${left}px;">
  Those formative experiences culminated in a dynamic career as a freelance writer. 
  </p>`;

  return new Page(null,image,null,p1,["p3","p5"]);

}

async function pageFive(){

  let textures = await Assets.loadBundle("pg5");

  let blocks = new Container();
  let images = new Container();
  let p5 = new Container();
  let txt = pixifyText("THINK CONTENT",2);

  // row1
  blocks.addChild(block(0x000000,1,0).fill(0x000000));
  blocks.addChild(gridifyCenter(txt[0],2,0));
  blocks.addChild(gridifyCenter(txt[1],3,0));
  blocks.addChild(gridifyCenter(txt[2],4,0));
  blocks.addChild(gridifyCenter(txt[3],5,0));
  blocks.addChild(gridifyCenter(txt[4],6,0));
  blocks.addChild(block(0x000000,7,1).fill(0x000000));

  // row2
  blocks.addChild(block(0x000000,1,1).fill(0x000000));
  blocks.addChild(block(0x000000,2,1).fill(0x000000));
  blocks.addChild(block(0x000000,3,1).fill(0x000000));
  blocks.addChild(block(0x000000,4,1));
  blocks.addChild(block(0x000000,5,1));
  blocks.addChild(block(0x000000,6,1).fill(0x000000));
  blocks.addChild(block(0x000000,7,1).fill(0x000000));
  
  // row3
  blocks.addChild(gridifyCenter(txt[5],1,2));
  blocks.addChild(gridifyCenter(txt[6],2,2));
  blocks.addChild(gridifyCenter(txt[7],3,2));
  blocks.addChild(gridifyCenter(txt[8],4,2));
  blocks.addChild(gridifyCenter(txt[9],5,2));
  blocks.addChild(gridifyCenter(txt[10],6,2));
  blocks.addChild(gridifyCenter(txt[11],7,2));
  blocks.addChild(block(0x000000,7,2).fill(0x000000));

  let i1 = Sprite.from(textures.p51);
  i1 = gridify(i1, 0,4);
  let i2 = Sprite.from(textures.p52);
  i2 = gridify(i2, 1,5);
  let i3 = Sprite.from(textures.p53);
  i3 = gridify(i3, 2, 6);
  let i4 = Sprite.from(textures.p54);
  i4 = gridify(i4, 3, 7);
  images.addChild(p1, p2, p3, p4);

  p5.addChild(blocks,images);

  return new Page(null, p5, null, null, ["p4", "p6"]);

}

async function pageSix(){

  let p6 = new Container();
  let images = new Container();

  let textures = await Assets.loadBundle("pg6");

  let i1 = Sprite.from(textures.p61);
  i1 = gridify(i1, 0, 0);
  let i2 = Sprite.from(textures.p62);
  i2 = gridify(i2, 0, 5);
  let i3 = Sprite.from(textures.p63);
  i3 = gridify(i3, 5, 5);

  images.addChild(i1, i2, i3);
  
  let top = yStrt();
  let right = xStrt();
  let text = `<p class="pageText fw-light text-wrap" style="postion:absolute;top:${top};right:${right}">
  I gained practical experience in marketing communications, including copywriting and content production.
  </p>`;
  return new Page(null,p6,null,text,["p5","p7"]);
}

async function pageSeven(){

  let p7 = new Container();
  let images = new Container();
  let blocks = new Container();
  let text = pixifyText("ON BRANDING", 2);

  let textures = await Assets.loadBundle("pg7");

  let i1 = Sprite.from(textures.p71);
  i1 = gridify(i1, 0, 0);
  let i2 = Sprite.from(textures.p72);
  i2 = gridify(i2, 0, 5);
  let i3 = Sprite.from(textures.p73);
  i3 = gridify(i3, 5, 0);
  let i4 = Sprite.from(textures.p74);
  i4 = gridify(i4, 5, 5);

  images.addChild(i1, i2, i3, i4);

  // row7
  blocks.addChild(block(0x000000, 1, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 2, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 3, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 4, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 5, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 6, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 7, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 8, 6).fill(0x000000));
  
  // row8
  blocks.addChild(block(0x000000, 1, 7).fill(0x000000));
  blocks.addChild(block(0x000000, 2, 7).fill(0x000000));
  blocks.addChild(block(0x000000, 3, 7).fill(0x000000));
  blocks.addChild(block(0x000000, 4, 7));
  blocks.addChild(gridifyCenter(text[0], 4, 7));
  blocks.addChild(block(0x000000, 5, 7));
  blocks.addChild(gridifyCenter(text[1], 5, 7));
  blocks.addChild(block(0x000000, 6, 7).fill(0x000000));
  blocks.addChild(block(0x000000, 6, 7).fill(0x000000));
  blocks.addChild(block(0x000000, 8, 7).fill(0x000000));

  // row9
  blocks.addChild(block(0x000000, 1, 8));
  blocks.addChild(gridifyCenter(text[2], 1, 8));
  blocks.addChild(block(0x000000, 2, 8));
  blocks.addChild(gridifyCenter(text[3], 2, 8));
  blocks.addChild(block(0x000000, 3, 8));
  blocks.addChild(gridifyCenter(text[4], 3, 8));
  blocks.addChild(block(0x000000, 4, 8));
  blocks.addChild(gridifyCenter(text[5], 4, 8));
  blocks.addChild(block(0x000000, 5, 8));
  blocks.addChild(gridifyCenter(text[6], 5, 8));
  blocks.addChild(block(0x000000, 6, 8));
  blocks.addChild(gridifyCenter(text[7], 6, 8));
  blocks.addChild(block(0x000000, 7, 8));
  blocks.addChild(gridifyCenter(text[8], 7, 8));
  blocks.addChild(block(0x000000, 8, 8));
  blocks.addChild(gridifyCenter(text[9], 8, 8));

  p7.addChild(i1, i2, i3, i4, blocks);

  return new Page(null,p7,null,null,["p6","p8"]);
}

async function pageEight(){

  let p8 = new Container();
  let images = new Container();
  let shapes = new Container();

  let textures = await Assets.loadBundle("pg8");

  let i1 = Sprite.from(textures.p81);
  i1 = gridify(i1, 0, 0);
  let i2 = Sprite.from(textures.p82);
  i2 = gridify(i2, 5, 0);
  let i3 = Sprite.from(textures.p83);
  i3 = gridify(i3, 0, 5);
  let i4 = Sprite.from(textures.p84);
  i4 = gridify(i4, 5, 5);

  images.addChild(i1, i2, i3, i4);

  p8.addChild(images, shapes);

  return new Page(null,p8,null,null,["p7","p9"]);
}

async function pageNine(){

  let p9 = new Container();
  let images = new Container();
  let blocks = new Container();

  let textures = await Assets.loadBundle("pg9");

  let i1 = Sprite.from(textures.p91);
  i1 = gridify(i1, 0, 0);
  let i2 = Sprite.from(textures.p92);
  i2 = gridify(i2, 0, 5);
  let i3 = Sprite.from(textures.p93);
  i3 = gridify(i3, 5, 0);
  
  images.addChild(i1, i2, i3);

  // row1  

  return new Page(null,p9,null,dom,["p8","p10"]);
}

async function pageTen(){

  let p10 = new Container();
  let images = new Container();

  return new Page(null,p10,null,dom,["p9"]);
}


});