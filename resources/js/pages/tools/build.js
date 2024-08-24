import {BitmapText,Graphics} from "pixi.js";
import {grid} from "./grid";

/**
 * -BUILD -helpers
 */

function domMedia(tagListObject){
    let dbg = document.getElementById("dom");
    let vals = Object.values(tagListObject);
    let element = vals[0];
    dbg.appendChild(element);
    if(vals.length > 1){
      for(let i = 1; i < vals.length; i++){
        let el = vals[i];
        let vOffset = (parseInt(dbg.lastElementChild.style.top, 10) + dbg.lastElementChild.scrollHeight + 20);
        el.style.top = `${vOffset}px`;
        dbg.appendChild(el);
      }
    }
  }


/**
 * makeLetters
 * @param {String} str :string to convert to Pixijs BitmapText object    
 * @returns {BitmapText} :Pixijs BitmapText
 */
function makeLetter(str, font) {
    const letter = new BitmapText({text: str, style: {fontFamily:"Times New Roman", fontSize: font.size, fill: 0x000000, align: "center"}});
    return letter;
  }

  /**
 * pixifyText
 * @param {string} str  -string to be converted to Pixijs BitmapText objects
 * @param {number} cut  -pixification method 0: as a single text object to be manipulated as a group, 1: split by white space, 2: each character
 * @returns {BitmapText[]}
 */
function pixifyText(str,cut,font){
    let f = font ? font : {size:32};
    let pixified = [];
    switch (cut) {
    case 0:
      pixified.push(makeLetter(str,f));
      break;
    case 1:
      let a = str.split(" ");
      a.forEach(s => {pixified.push(makeLetter(s,f))});
      break;
    case 2:
      let c = str.replaceAll(/ /g,"");
      let b = c.split("");
      b.forEach(s => {pixified.push(makeLetter(s,f))});
      break;
    default:
      break;
    }
    return pixified;
  }

  /**
 * block
 * @param {color} c :block line color
 * @param {number} x :col
 * @param {number} y :row
 * @returns {Graphics} 
 */
function block(c, x, y){
    let tile = grid[x][y];
    let shape = new Graphics();
    shape.rect(tile.x, tile.y, tile.width, tile.height);
    shape.stroke(c);
    return shape;
  }
  
  export {pixifyText, block, domMedia}; 