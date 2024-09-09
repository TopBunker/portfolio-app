
import {Application, Assets, Container} from "pixi.js";
import Home from "./portfolio/page1";
import Two from "./portfolio/page2";
import Three from "./portfolio/page3";
import Four from "./portfolio/page4";

$.when($.ready).then(async () =>
{         
  /**
   * DOM element for placing programattically generated content 
   * @type  {Element}
   */
  const dom = document.getElementById("dom");    
    
  /**
   * DOM element for placing Pixijs canvas
   * @type {Element}
   */
  const body = document.getElementById("canvas");

  /**
   *  Pixijs Application
   * @type {Application}
   * [website ingres:  Pixijs object encapsulating, and providing an interface for, the canvas element]
   */
  const bg = new Application();

  /**
   * Initialise Application with settings and append to DOM
   */
  await bg.init({
    backgroundAlpha: 0, 
    resizeTo: window, 
    width: window.innerWidth, 
    height: window.innerHeight, 
    powerPreference: "high-performance",
    autoDensity: true,
    antialias: false,
    resolution: window.devicePixelRatio,
    imageSmoothingEnabled: true,
    imageSmoothingQuality: "high"
  });body.appendChild(bg.canvas);

  /**
   * Create and add Pixijs Container elements to the stage (root container)
   * @type {Container}
   * [element ingres: main website containers for canvas elements; subcontainers = true;]
   */
  const background = new Container();
  bg.stage.addChildAt(background, 0);

  const main = new Container();
  bg.stage.addChildAt(main, 1);
    
  /**
   * Define Application with z-index = front to capture user interactions;
   * @type {Element} screen
   * @type {Application} top
   * @type {Container} topScreen
   */
  const screen = document.getElementById("topCanvas");
  const top = new Application();
  await top.init({backgroundAlpha: 0, resizeTo: window, width: window.innerWidth, height: window.innerHeight});
  screen.appendChild(top.canvas);
    
  const topScreen = new Container();
  top.stage.addChild(topScreen);
    
  /**
   * Manage pages
   */
  Four.display(topScreen,main,background,dom);


/**
 * -BUILD pages
 

async function pageFour(){

 

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
 */


});