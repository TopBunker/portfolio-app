import {AnimatedSprite, Container, Texture, Assets, Graphics, Rectangle, Circle} from "pixi.js";
import {gridify, gridifyCenter, centerPage, grid, yStrt, xStrt, gridScale, scaleToCanvas} from "../tools/grid";
import Page from "../tools/Page";
import {pixifyText, block} from "../tools/build";

/**
 * Initialise page
 */
const page = new Page();

/**
 * Initialise Page Pixijs containers
 */
const card = new Container();
card.x = xStrt();
card.y = yStrt();

const buttons = new Container();
const blocks = new Container();


/**
 * Set page buttons
*/
let f1 = {size: 22};
let instructions = {destroy: null, transition: null, nextPage: null};

const w = "Writer";
const pW = pixifyText(w, 0, f1,)[0];
gridify(pW, 1, 4);
const bW = new Graphics();
<<<<<<< HEAD
bW.rect(-10, -5, pW.width + 20, pW.height + 10);
bW.fill({color: "#B8860B", alpha: 0.7});
gridify(bW, 1, 4);
const wBtn = new Graphics();
wBtn.rect(pW.x + xStrt(), pW.y + yStrt(), pW.width, pW.height);
wBtn.fill({color: "white", alpha: 1});
=======
bW.rect(-10,-5,pW.width+20,pW.height+10);
bW.fill({color:"#B8860B",alpha:0.5});
gridify(bW,1,4);
const wBtn = new Graphics();
wBtn.rect(pW.x+xStrt(),pW.y+yStrt(),pW.width,pW.height);
wBtn.fill({color:"white", alpha:0});
>>>>>>> bff6e2c (portfolio add)
wBtn.eventMode = 'static';
wBtn.hitArea = new Rectangle(pW.x + xStrt() - 10, pW.y + yStrt() -5, pW.width + 20, pW.height + 10);
const wBtnFn = () => {
  
  instructions.destroy = true;
  instructions.transition = null;
  instructions.nextPage  = "writer/1";
  
  return instructions;
}

const d = "Developer";
const pD = pixifyText(d, 0, f1)[0];
gridify(pD, 7, 4);
const bD = new Graphics();
bD.rect(-10,-5,pD.width+20,pD.height+10);
bD.fill({color:"#7FFF00",alpha:0.5});
gridify(bD,7,4);
const dBtn = new Graphics();
dBtn.rect(pD.x+xStrt()-60,pD.y+yStrt(),pD.width,pD.height);
dBtn.fill({color:"white", alpha:0});
dBtn.eventMode = 'static';
dBtn.hitArea = new Rectangle(pD.x+xStrt(),pD.y+yStrt(),pD.width,pD.height);
const dBtnFn = () => {
    console.log("to dev");

    instructions.destroy = true;
    instructions.transition = null;
    instructions.nextPage = "dev";

    return instructions;
}

card.addChild(bW, bD, pW, pD);
buttons.addChild(wBtn,dBtn);

/**
 * Build page
*/
const sign = Assets.load("sign").then(async () => {
  const seq1 = Assets.cache.get("sign").data.animations;
  const sani = AnimatedSprite.fromFrames(seq1["sign"]);
  sani.onRender = () =>  {
      sani.loop = false;
      sani.play();
  };
  gridScale(sani, "half");
  gridify(sani, 0, 1);
  
  const name = await Assets.load("name");
  const seq2 = Assets.cache.get("name").data.animations;
  const nani = AnimatedSprite.fromFrames(seq2["name"]);
  nani.onRender =  () => {
      nani.animationSpeed = 0.5;
    nani.loop = false;
    nani.play();
  }
  gridScale(nani, "half");
  gridify(nani, 0,  2);
  
  const dp = await Assets.load("photo");
  const seq3 = Assets.cache.get("photo").data.animations;
  const dpani = AnimatedSprite.fromFrames(seq3["photo"]);
  dpani.onRender = () => {
      dpani.animationSpeed = 0.3;
      dpani.loop = false;
      dpani.play();
  };
  gridScale(dpani, "half");
  gridify(dpani, 5, 1);
  
  card.addChild(sani, nani, dpani);
});

page.construct(buttons, card, null, null, ["writer","dev"]);

/**
 * Page mobile view definition
 * @param {*} t 
 * @param {*} m 
 * @param {*} b 
 * @param {*} d 
 */
function mView(t, m, b, d){
    pW.x+=30;
    bW.x+=30;
    wBtn.x+=30;
    pD.x-=60;
    bD.x-=60;
    page.display(t, m, b, d);
}
    
function tView(t, m, b ,d){
    page.display(t, m, b, d);
}
    
function dView(t, m, b, d){
    page.display(t, m, b, d);
}

/**
 * EXPORT
 */
const Home = {
    display : (t, m, b, d) => {
        if(window.innerWidth < 768){
            mView(t, m, b, d);
        }else{
            dView(t, m, b, d);
        }
    },
    state : pageState,
    nav : {"writer" : {"button" : wBtn, "fn" : wBtnFn}, "dev" : {"button" :  dBtn, "fn" : dBtnFn}},
    x : page.x,
    y : page.y,
    scale : page.scale,
    destroy: () => {page.destroy()}
}

/**
 * TICKER Fn
 */
let c = 1, i = 1, c1 = 1, i1 = 1;
function pageState(delta){
  if(bW.x >= pW.x+10 || (bW.x+bW.width) <= ((pW.x+10) + pW.width)){
    i = i * (-1);
  }
  if(bW.y >= pW.y+5 || (bW.y+bW.height) <= ((pW.y+5) + pW.height)){
    c = c * (-1);
  }
  bW.x+=((i*delta.deltaTime)/15);  
  bW.y+=((c*delta.deltaTime)/20);
  
  if(bD.x >= pD.x+10 || (bD.x+bD.width) <= ((pD.x+10) + pD.width)){
    i1 = i1 * (-1);
  }
  if(bD.y >= pD.y+5 || (bD.y+bD.height) <= ((pD.y+5) + pD.height)){
    c1 = c1 * (-1);
  }
  bD.x-=((i1*delta.deltaTime)/15);  
  bD.y-=((c1*delta.deltaTime)/20);

  delta.start();
}

export default Home;