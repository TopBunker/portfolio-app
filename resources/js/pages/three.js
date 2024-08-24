import {Assets, Container, Sprite} from "pixi.js";
import {gridify, gridifyCenter, grid, yStrt, xStrt} from "./tools/grid";
import Page from "./tools/Page";
import {pixifyText, block} from "./tools/build";

/**
 * backgroundLoad Pixijs Assets
 */
Assets.add({alias: "pg3", src: "./storage/images/page3/img1.jpeg" });
Assets.backgroundLoad("pg3");

/**
 * Initialise Page Containers
 */
const page3 = new Container();
page3.x = xStrt();
page3.y = yStrt();

const heading = new Container();
const blox = new Container();

/**
 * Initialise page variabeles
 */
const txt = pixifyText("FRONT PAGE", 2);

/**
 * Construct page
 */
// row 1
blox.addChild(block(0x000000, 1, 0).fill(0x000000));
blox.addChild(block(0x000000, 2, 0));
heading.addChild(gridifyCenter(txt[0], 2, 0));
blox.addChild(block(0x000000, 3, 0));
heading.addChild(gridifyCenter(txt[1], 3, 0));
blox.addChild(block(0x000000, 4, 0));
heading.addChild(gridifyCenter(txt[2], 4, 0));
blox.addChild(block(0x000000, 5, 0));
heading.addChild(gridifyCenter(txt[3], 5, 0));
blox.addChild(block(0x000000, 6, 0));
heading.addChild(gridifyCenter(txt[4], 6, 0));
blox.addChild(block(0x000000, 7, 0).fill(0x000000));
blox.addChild(block(0x000000, 8, 0).fill(0x000000));

// row 2
blox.addChild(block(0x000000, 1, 1).fill(0x000000));
blox.addChild(block(0x000000, 2, 1).fill(0x000000));
blox.addChild(block(0x000000, 3, 1).fill(0x000000));
blox.addChild(block(0x000000, 4, 1));
heading.addChild(gridifyCenter(txt[5], 4, 1));
blox.addChild(block(0x000000, 5, 1));
heading.addChild(gridifyCenter(txt[6], 5, 1));
blox.addChild(block(0x000000, 6, 1));
heading.addChild(gridifyCenter(txt[7], 6, 1));
blox.addChild(block(0x000000, 7, 1));
heading.addChild(gridifyCenter(txt[8], 7, 1));
blox.addChild(block(0x000000, 8, 1).fill(0x000000));

page3.addChild(blox,heading);

let texture = await Assets.load("pg3");
let image = Sprite.from(texture);
image = gridify(image, 0, 3);
page3.addChild(image);
            
// HTML TEXT
let pGrid = grid[0][8];
let top = yStrt() + page3.height + 50;
let left = pGrid.x;
let right = xStrt();

let domMedia = {};
let container = document.createElement("div");
let p1 = document.createElement("p");
container.appendChild(p1);
p1.outerHTML = `<p class="domText fw-light text-wrap" style="position:absolute;top:${top}px;left:${left}px;right:${right}px;">
      My passion for language took me on a tortuous path. I was encouraged to flex my pen at a young age, 
      and I wrote for a national youth weekly as a high schooler. 
      </p>`;
domMedia.p1 = container.lastElementChild;

let p2 = document.createElement("p");
container.appendChild(p2);
p2.outerHTML = `<p class="domText fw-light text-wrap" style="position:relative;top:${top}px;left:${left}px;right:${right}px;">
      I later gained further tutelage as a journalist in the editorial department of two 
      national print publications, each with readerships of over 3 million. 
      </p>`;
domMedia.p2 = container.lastElementChild;

let p3 = document.createElement("p");
container.appendChild(p3);
p3.outerHTML = `<p class="domText fw-light text-wrap" style="position:absolute;top:${top}px;left:${left}px;right:${right}px;">
      One of my proudest achievements as a freelance reporter for the Jamaica Gleaner came with my first lead story.
      </p>`;
domMedia.p3 = container.lastElementChild;

const page = new Page(null, page3, null, domMedia, ["pg2", "pg4"]);


function mView(t, m, b, d){
    page.display(t, m, b, d);
}
    
function tView(t, m, b ,d){
    page.display(t, m, b, d);
}
    
function dView(t, m, b, d){
    page.display(t, m, b, d);
}

const Three = {
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

export default Three;