
import {Application, Assets, Sprite, Container, Graphics, BitmapText, Point, AnimatedSprite} from "pixi.js";
import {gridify, gridifyCenter, grid, yStrt, xStrt} from "./grid";
import Page from "./Page";
import {pixifyText, block} from "./build";


$.when($.ready).then(async () =>
{
  // background load Pixijs assets
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
    Assets.backgroundLoad("pg3","pg4","pg5", "pg6", "pg7", "pg8", "pg9", "pg10");

    /**
    * Pixijs Setup 
    */     
      
    const dom = document.getElementById("dom");    
    
    // Pixijs DOM interface
    // background 
    const body = document.getElementById("bgCanvas");
    const bg = new Application();
    await bg.init({backgroundAlpha: 0, resizeTo: window, width: window.innerWidth, height: window.innerHeight, powerPreference: "high-performance",  autoDensity: true, antialias: true});
    body.appendChild(bg.canvas);

    const background = new Container();
    bg.stage.addChild(background);

    // main canvas
    const inner = document.getElementById("canvas");
    const app = new Application();
    await app.init({backgroundAlpha: 0, resizeTo: inner, width: inner.clientWidth, height: inner.clientHeight, autoDensity: true, antialias: true});
    inner.appendChild(app.canvas);

    const main = new Container();
    app.stage.addChild(main);
    
    // top canvas for interactions
    const screen = document.getElementById("topCanvas");
    const top = new Application();
    await top.init({backgroundAlpha: 0, resizeTo: window, width: window.innerWidth, height: window.innerHeight});
    screen.appendChild(top.canvas);
    
    const topScreen = new Container();
    top.stage.addChild(topScreen);
    
  async function landing(){

    const pages = []
    const home = pageHome();
    pages.push(home);
    const page2 = pageTwo();
    pages.push(page2)
    const page3 = pageThree();
    pages.push(page3);
    const page4 = pageFour();
    pages.push(page4);
    const page5 = pageFive();
    pages.push(page5);
    const page6 = pageSix();
    pages.push(page6);
    const page7 = pageSeven();
    pages.push(page7);
    const page8 = pageEight();
    pages.push(page8);
    const page9 = pageNine();
    pages.push(page9);
    const page10 = pageTen();
    pages.push(page10);

    page2.display(top,main,background,dom);
    
  } landing();

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

  cover.y = yStrt();

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
  let pGrid = grid[2][3];
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

  let texture  = await Assets.load("pg4");
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
  images.addChild(i1, i2, i3, i4);

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
  let text = `<p class="pageText fw-light text-wrap" style="postion:absolute;top:${top}px;right:${right}px;">
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

  let text = pixifyText("S O METRICS", 2);

  let textures = await Assets.loadBundle("pg9");

  let i1 = Sprite.from(textures.p91);
  i1 = gridify(i1, 0, 0);
  let i2 = Sprite.from(textures.p92);
  i2 = gridify(i2, 0, 5);
  let i3 = Sprite.from(textures.p93);
  i3 = gridify(i3, 5, 0);
  
  images.addChild(i1, i2, i3);

  // row1  
  blocks.addChild(block(0x000000, 1, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 2, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 3, 6));
  blocks.addChild(gridify(text[0], 3, 6));
  blocks.addChild(block(0x000000, 4, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 5, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 8, 6).fill(0x000000));

  // row2
  blocks.addChild(block(0x000000, 1, 7).fill(0x000000));
  blocks.addChild(block(0x000000, 2, 7));
  blocks.addChild(gridify(text[2], 2, 7));
  blocks.addChild(block(0x000000, 3, 7));
  blocks.addChild(gridify(text[3], 3, 7));
  blocks.addChild(block(0x000000, 4, 7));
  blocks.addChild(gridify(text[4], 4, 7));
  blocks.addChild(block(0x000000, 5, 7));
  blocks.addChild(gridify(text[5], 5, 7));
  blocks.addChild(block(0x000000, 6, 7));
  blocks.addChild(gridify(text[6], 6, 7));
  blocks.addChild(block(0x000000, 7, 7));
  blocks.addChild(gridify(text[7], 7, 7));
  blocks.addChild(block(0x000000, 8, 7));
  blocks.addChild(gridify(text[8], 8, 7));

  // row3
  blocks.addChild(block(0x000000, 3, 8));
  blocks.addChild(gridify(text[1], 3, 8));

  p9.addChild(images, blocks);

  let top = yStrt() + i3.height + blocks.height;
  let right = xStrt();
  let domTxt = `<p class="pgText fw-light text-wrap" style="position:absolute;top:${top}px;right:${right}px;">
  Most notably, I worked with a small lifestyle blog to build a repository of content 
  as part of a content marketing strategy I developed.
  </p>
  <p class="pgText fw-light text-wrap" style="position:absolute;top:${top+20}px;right:${right}px;">
  The metrics for the email campaign showed results: subscriptions increased by over 67%; 
  average click-through rate of approx. 4% (industry high).
  </p>`;

  return new Page(null,p9,null,domTxt,["p8","p10"]);
}

async function pageTen(){

  let p10 = new Container();
  let images = new Container();
  let blocks = new Container();

  let txt = pixifyText("RESULTS",2);

  let textures = await Assets.loadBundle("pg10");

  let i1 = Sprite.from(textures.p101);
  i1 = gridify(i1, 0, 4);
  let i2 = Sprite.from(textures.p102);
  i2 = gridify(i2, 2, 4);
  let i3 = Sprite.from(textures.p103);
  i3 = gridify(i3, 3, 4);
  let i4 = Sprite.from(textures.p104);
  i4 = gridify(i4, 5, 4);
  let i5 = Sprite.from(textures.p105);
  i5 = gridify(i5, 7, 4);
  
  images.addChild(i1, i2, i3, i4, i5);

  let top = yStrt();
  let left = xStrt();
  let text1 = `<p class="pgText fw-light text-wrap" style="position:absolute;top${top}px;left:${left}px;">
  I combine creativity and methodology to define, design, and execute solutions with an emphasis on optimising value across stakeholders.
  </p>`;

  let text2 = `<p class="pgText fw-light text-wrap" style="position:absolute;top:${top}px;left:${top}px;">
  To nurture my creativity, I continuosly engae in poetry and creative fiction, always striving to push the boundaries of language 
  and explore new horizons beyond the postmodern.
  </p>
  <p class="pgText fw-light text-wrap" style="position:absolute;top:${top}px;left:${left}px;">
  One advantage of my tortuous career is the myriad of perspectives gleaned. All the twists and turns shape my pen.
  </p>`;

  // row1
  blocks.addChild(block(0x000000, 2, 4).fill(0x000000));
  blocks.addChild(block(0x000000, 3, 4).fill(0x000000));
  blocks.addChild(block(0x000000, 4, 4).fill(0x000000));
  blocks.addChild(block(0x000000, 5, 4).fill(0x000000));
  blocks.addChild(block(0x000000, 6, 4).fill(0x000000));
  blocks.addChild(block(0x000000, 7, 4).fill(0x000000));
  blocks.addChild(block(0x000000, 8, 4).fill(0x000000));

  // row2
  blocks.addChild(block(0x000000, 1, 5));
  blocks.addChild(gridifyCenter(txt[0], 1, 5));
  blocks.addChild(block(0x000000, 2, 5));
  blocks.addChild(gridifyCenter(txt[1], 2, 5));
  blocks.addChild(block(0x000000, 3, 5));
  blocks.addChild(gridifyCenter(txt[2], 3, 5));
  blocks.addChild(block(0x000000, 4, 5));
  blocks.addChild(gridifyCenter(txt[3], 4, 5));
  blocks.addChild(block(0x000000, 5, 5));
  blocks.addChild(gridifyCenter(txt[4], 5, 5));
  blocks.addChild(block(0x000000, 6, 5));
  blocks.addChild(gridifyCenter(txt[5], 6, 5));
  blocks.addChild(block(0x000000, 7, 5));
  blocks.addChild(gridifyCenter(txt[6], 7, 5));

  // row3
  blocks.addChild(block(0x000000, 1, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 2, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 3, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 4, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 5, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 6, 6).fill(0x000000));
  blocks.addChild(block(0x000000, 7, 6).fill(0x000000));


  p10.addChild(blocks,images);
  

  return new Page(null,p10,null,[text1, text2],["p9"]);
}
 


});