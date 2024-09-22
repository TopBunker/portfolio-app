
import {AnimatedSprite, Container, Texture, Assets} from "pixi.js";
import {gridify, gridifyCenter, grid, yStrt, xStrt} from "../tools/grid";
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
const pW = pixifyText(w, 2, f1,);

const d = "Developer";
const pD = pixifyText(d, 2, f1);

/**
 * Build page
*/
const txtr = await Assets.load("meishi");
const seq = Assets.cache.get("meishi").data.animations;
console.log(seq);
const ani = AnimatedSprite.fromFrames(seq["frame"]);
gridify(ani,0,0);

card.addChild(ani);

    
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