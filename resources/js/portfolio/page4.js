import {Assets, Container, Sprite} from "pixi.js";
import {gridify, gridifyCenter, grid, yStrt, xStrt} from "../tools/grid";
import Page from "../tools/Page";
import {pixifyText, block, makeSprite} from "../tools/build";

/**
 * Initialise Page Containers
 */
const page4 = new Container();
page4.x = xStrt();
page4.y = yStrt();

// get backgroundloaded asset from loader
let texture  = Assets.load("pg4").then(async () => {
  let i = await makeSprite(texture, "full");
  page4.addChild(i);
});

// HTML Text
let pgrid = grid[0][0];
let top = yStrt() + pgrid.y;
let left = pgrid.x;
let right = xStrt();
let domMedia = {};
let container = document.createElement("div");
let p1 = document.createElement("div");
container.appendChild(p1);
p1.outerHTML = `<p class="domText fw-light text-wrap" style="position:absolute;top:${top}px;left:${left}px;">
Those formative experiences culminated in a dynamic career as a freelance writer. 
</p>`;
domMedia.p1 = container.lastElementChild;

const page = new Page(null,page4,null,domMedia,["p3","p5"]);

function mView(t, m, b, d){
    page.display(t, m, b, d);
}
    
function tView(t, m, b ,d){
    page.display(t, m, b, d);
}
    
function dView(t, m, b, d){
    page.display(t, m, b, d);
}

const Four = {
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

export default Four;