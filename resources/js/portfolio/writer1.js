
import {Container,Assets,Sprite} from "pixi.js";
import {gridify, gridifyCenter, grid, yStrt, xStrt} from "../tools/grid";
import Page from "../tools/Page";
import {pixifyText, block, makeSprite} from "../tools/build";

/**
 * Initialise page
 */
const page = new Page();

/**
 * Initialise Page Containers
 */
const cover = new Container();
cover.x = -50;
cover.y = yStrt();

const txt = new Container();
const blocks = new Container();

/**
 * Initialise page variabeles
*/
let f1 = {size: 32};
const title = "MEET TH WRITER";
const pTitle = pixifyText(title, 2, f1,);

let f2 = {size: 28};
const name = "Jordane Delahaye";
const pName = pixifyText(name, 1, f2);

/**
 * Construct page
*/
// row 1
blocks.addChild(block(0x000000, 4, 0).fill(0x000000));
 
// row 2
blocks.addChild(gridifyCenter(pTitle[0], 2, 1));
blocks.addChild(block(0x000000, 2, 1));
blocks.addChild(gridifyCenter(pTitle[3], 5, 1));
blocks.addChild(block(0x000000, 5, 1));

// row 3
blocks.addChild(block(0x000000, 2, 2).fill(0x000000));
blocks.addChild(gridifyCenter(pTitle[1], 3, 2));
blocks.addChild(block(0x000000, 3, 2));
blocks.addChild(block(0x000000, 5, 2).fill(0x000000));
blocks.addChild(gridifyCenter(pTitle[2], 4, 2));
blocks.addChild(block(0x000000, 4, 2));
blocks.addChild(block(0x000000, 6, 2).fill(0x000000));

// row 4
blocks.addChild(block(0x000000, 2, 3).fill(0x000000));
blocks.addChild(block(0x000000, 3, 3).fill(0x000000));
blocks.addChild(block(0x000000, 4, 3).fill(0x000000));
blocks.addChild(gridifyCenter(pTitle[4], 5, 3));
blocks.addChild(block(0x000000, 5, 3));

// row 5
blocks.addChild(block(0x000000, 3, 4).fill(0x000000));
blocks.addChild(block(0x000000, 4, 4).fill(0x000000));
blocks.addChild(gridifyCenter(pTitle[5], 5, 4));
blocks.addChild(block(0x000000, 5, 4));

//row 6
blocks.addChild(gridifyCenter(pTitle[6], 1, 5));
blocks.addChild(block(0x000000, 1, 5));
blocks.addChild(gridifyCenter(pTitle[7], 2, 5));
blocks.addChild(block(0x000000, 2, 5));
blocks.addChild(gridifyCenter(pTitle[8], 3, 5));
blocks.addChild(block(0x000000, 3, 5));
blocks.addChild(gridifyCenter(pTitle[9], 4, 5));
blocks.addChild(block(0x000000, 4, 5));
blocks.addChild(gridifyCenter(pTitle[10], 5, 5));
blocks.addChild(block(0x000000, 5, 5));
blocks.addChild(gridifyCenter(pTitle[11], 6, 5));
blocks.addChild(block(0x000000, 6, 5));

// row 7
blocks.addChild(block(0x000000, 1, 6).fill(0x000000));
blocks.addChild(block(0x000000, 6, 6).fill(0x000000));

// row 8
blocks.addChild(block(0x000000, 3, 7).fill(0x000000));
let first = gridify(pName[0], 4, 7);
first.x += 5;
first.y -= 0;
let last = gridify(pName[1], 4, 7);
last.x += 5;
last.y += (first.height + 5);

Assets.loadBundle("portfolio").then(async (port) => {
    let width = window.innerWidth+100;
    const page1 =  await makeSprite(port.p1, width);
    const page2 = await makeSprite(port.p2, width);
    page2.y = page1.height;
    const page3 = await makeSprite(port.p3, width);
    page3.y = page2.y + page2.height - 200;
    const page4 = await makeSprite(port.p4, width);
    page4.y = page3.y + page3.height  - 100;
    const page5 = await makeSprite(port.p5, width);
    page5.y = page4.y + page4.height - 200;
    const page6 = await makeSprite(port.p6, width);
    page6.y =  page5.y + page5.height;
    const page7 = await makeSprite(port.p7, width);
    page7.y  = page6.y + page6.height  - 100;
    const page8 = await makeSprite(port.p8, width);
    page8.y = page7.y + page7.height - 100;
    const page9 = await makeSprite(port.p9, width);
    page9.y = page8.y + page8.height - 200;
    const page10 = await makeSprite(port.p10, width);
    page10.y = page9.y + page9.height - 200;

    cover.addChild(page1, page2, page3, page4, page5, page6, page7, page8, page9, page10);
});
//cover.addChild(blocks, txt, first, last);
    
page.construct(null, cover, null, null, ["home", "writer/2"]);
  
function mView(t, m, b, d){
    page.display(t, m, b, d);
}
    
function tView(t, m, b ,d){
    page.display(t, m, b, d);
}
    
function dView(t, m, b, d){
    page.display(t, m, b, d);
}

const One = {
    display : (t, m, b, d) => {
        if(window.innerWidth < 768){
            mView(t, m, b, d);
        }else{
            dView(t, m, b, d);
        }
    },
    state : pageState,
    nav : {},
    x : page.x,
    y : page.y,
    scale : page.scale,
    destroy: () => {page.destroy()}
}

/**
 * TICKER Fn
 */
function pageState(delta){

}

export default One;