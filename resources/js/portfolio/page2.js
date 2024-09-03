
import {Container} from "pixi.js";
import {gridify, gridifyCenter, grid, yStrt, xStrt} from "../tools/grid";
import Page from "../tools/Page";
import {pixifyText, block} from "../tools/build";

/**
 * Initialise Page Containers
 */
const page2 = new Container();
page2.x = xStrt();
page2.y = yStrt();

const title = new Container();
const blox = new Container()

/**
 * Initialise page variabeles
 */
let f1 = {size: 32};
let txt = pixifyText("TORTUOUS", 2, f1);
  
/**
 * Construct page
 */ 
// row 1
blox.addChild(block(0x000000, 3, 0).fill(0x000000));

//row 3
blox.addChild(block(0x000000, 0, 1));
title.addChild(gridifyCenter(txt[0], 0, 1));
blox.addChild(block(0x000000, 1, 1));
title.addChild(gridifyCenter(txt[1], 1, 1));
blox.addChild(block(0x000000, 2, 1));
title.addChild(gridifyCenter(txt[2], 2, 1));
blox.addChild(block(0x000000, 3, 1));
title.addChild(gridifyCenter(txt[3], 3, 1));
blox.addChild(block(0x000000, 4, 1));
title.addChild(gridifyCenter(txt[4], 4, 1));
blox.addChild(block(0x000000, 5, 1));
title.addChild(gridifyCenter(txt[5], 5, 1));
blox.addChild(block(0x000000, 6, 1));
title.addChild(gridifyCenter(txt[6], 6, 1));
blox.addChild(block(0x000000, 7, 1));
title.addChild(gridifyCenter(txt[7], 7, 1));

//row 4
blox.addChild(block(0x000000, 1, 2).fill(0x000000));
    
page2.x = xStrt();
page2.y = yStrt();
page2.addChild(title,blox);

// HTML TEXT
let pGrid = grid[1][4];
let top = yStrt() + pGrid.y;
let left = pGrid.x;

let domMedia = {};
let container = document.createElement("div");
const p1 = document.createElement("p");
container.appendChild(p1);
p1.outerHTML = `<p class="pgText fw-light text-wrap" style="position:absolute;top:${top}px;left:${left}px;right:${xStrt()}px;"> 
    One word that I think best sums up my journey as a professional writer 
    is “tortuous.” <br><br>
    The first time I read that word, I thought, “Torturous?” 
    It triggered an innately hostile characterisation, 
    contrary to the sense of discovery and adventure that “tortuous” inspires.
    </p>`;
domMedia.p1 = container.lastElementChild;

const page = new Page(null, page2, null, domMedia, ["pg1", "pg3"]);

function mView(t, m, b, d){
  page.display(t, m, b, d);
}
  
function tView(t, m, b ,d){
  page.display(t, m, b, d);
}
  
function dView(t, m, b, d){
  page.display(t, m, b, d);
}

const Two = {
  display : (t, m, b, d) => {
      if(window.innerWidth < 768){
          mView(t, m, b, d);
      }else{
          dView(t, m, b, d);
      }
  },
  main : page.main,
  background: page.background,
  top : page.top,
  domMedia : page.domMedia
}

export default Two;

