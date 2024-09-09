import {Assets, Container, Sprite} from "pixi.js";
import {gridify, gridifyCenter, grid, yStrt, xStrt} from "../tools/grid";
import Page from "../tools/Page";
import {pixifyText, block, makeSprite} from "../tools/build";

/**
 * backgroundLoad Pixijs Assets
 */

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

/**
 * Initialise Page Containers
 */
const page4 = new Container();
page4.x = xStrt();
page4.y = yStrt();

let texture  = await Assets.load("pg4");
console.log(texture.label);
let image = Sprite.from(texture);

let img = new Image();
img.onload = async function(){
    let ref = document.getElementById("gridPanel").clientWidth;
    let oc = document.createElement("canvas");
    
    let octx = oc.getContext("2d");
    octx.imageSmoothingEnabled = false;

    let scale = ref < window.innerHeight ? 1 - (ref/window.innerHeight) : 1 - (window.innerHeight/ref);

    oc.width = img.width * scale;
    oc.height = img.height * scale;
    octx.drawImage(img, 0, 0, oc.width, oc.height);
   
    let txtr = oc.toDataURL("image,jpeg", 1);
    Assets.add({alias: "i", src: txtr});
    let t = await Assets.load("i");
    let ti = Sprite.from(t);
    ti = gridify(ti, 0, 2);
    //page4.addChild(ti);
  }
  //img.src = texture.label;

//image = gridify(image, 0, 2);
let i = await makeSprite(texture, "full");
page4.addChild(i);

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