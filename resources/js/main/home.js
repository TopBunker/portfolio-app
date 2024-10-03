
import {AnimatedSprite, Container, Texture, Assets} from "pixi.js";
import {gridify, gridifyCenter, centerPage, grid, yStrt, xStrt, gridScale, scaleToCanvas} from "../tools/grid";
import Page from "../tools/Page";
import {pixifyText, block} from "../tools/build";

/**
 * Initialise Page Containers
 */
const card = new Container();
card.x = xStrt();
card.y = yStrt();

const txt = new Container();
const blocks = new Container();

/**
 * Initialise page variabeles
*/
let f1 = {size: 32};

const w = "Writer";
const pW = pixifyText(w, 0, f1,)[0];
gridify(pW, 1, 4);

const d = "Developer";
const pD = pixifyText(d, 0, f1)[0];
gridify(pD, 5, 4);

/**
 * Build page
*/
const sign = await Assets.load("sign");
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
dpani.onRender = () =>  {
    dpani.animationSpeed = 0.3;
    dpani.loop = false;
    dpani.play();
};
gridScale(dpani, "half");
gridify(dpani, 5, 1);

card.addChild(sani, nani, dpani, pW, pD);

const page = new Page(null, card, null, null, ["p1"]);
  
function mView(t, m, b, d){
    page.display(t, m, b, d);
}
    
function tView(t, m, b ,d){
    page.display(t, m, b, d);
}
    
function dView(t, m, b, d){
    page.display(t, m, b, d);
}

const Home = {
    display : (t, m, b, d) => {
        if(window.innerWidth < 768){
            mView(t, m, b, d);
        }else{
            dView(t, m, b, d);
        }
    },
    main : page.main,
    background: page.background,
    top : page.top
}

export default Home;