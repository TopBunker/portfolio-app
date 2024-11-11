
import {Application, Container, Ticker} from "pixi.js";
import { wipeScreen } from "./tools/build.js";
import Home from "./main/home"; 
import One from "./portfolio/page1.js"; 
/*import Two from "./portfolio/page2.js"; 
import Three from "./portfolio/page3.js"; 
import Four from "./portfolio/page4.js"; 
import Five from "./portfolio/page5.js"; 
import Six from "./portfolio/page6.js"; 
import Seven from "./portfolio/page7.js"; 
import Eight from "./portfolio/page8.js"; 
import Nine from "./portfolio/page9.js"; 
import PageX from "./portfolio/pagex.js";*/

/**
 * Pixijs containers for adding canvas elements
 * @type {Container}
 */
const background = new Container();
const main = new Container();
const topScreen = new Container();

$.when($.ready).then(async () =>
{ 
  /**
   * DOM element for placing programmatically generated content 
   * @type  {Element}
   */
  const dom = document.getElementById("dom");    
    
  /**
   * DOM element containing Pixijs canvas
   * @type {Element}
   */
  const body = document.getElementById("canvas");

  /**
   *  Pixijs Application
   * @type {Application}
   * interface for Pixijs canvas
   */
  const bg = new Application();

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
  }); 
  body.appendChild(bg.canvas);

  //add containers to canvas
  bg.stage.addChildAt(background, 0);
  bg.stage.addChildAt(main, 1);

  //initialise Pixijs ticker
  bg.ticker.add((delta)=>{update(delta)});
    
  /**
   * Pixijs Application with z-index = top to capture user interactions
   * @type {Element} screen
   * @type {Application} top
   * @type {Container} topScreen
   */
  const screen = document.getElementById("topCanvas");
  const top = new Application();
  await top.init({
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
  });
  screen.appendChild(top.canvas);
    
  top.stage.addChild(topScreen);

  /**
   * Page manager
   */
  curPage.display(topScreen,main,background);
  history.pushState(navTracker,null,"#home"); 
  state = curPage.state;

  //setup page's navigation buttons
  //
  for (const key in curPage.nav) {
    let  btn = curPage.nav[key];
    btn.button.on("pointerdown", () => {
      let process = btn.fn();
      if(process.destroy == true){
        wipeScreen(process.transition);
        curPage.destroy();
        let  path = process.nextPage.split("/");
        let nextNode = path[0];
        let navKeys = Object.keys(nav);
        if(navKeys.includes(nextNode)){
          let index = navKeys.indexOf(nextNode);
          curPage = Object.values(nav)[index];
        }
        if(path.length > 1){
          for (let i = 1; i < (path.length + 1); i++) {
            let keys = Object.keys(curPage);
            let n = path[i];
            if(keys.includes(n)){
              let index = Object.keys(curPage).indexOf(n);
              curPage = Object.values(curPage)[index];
            }
          }
        }
        curPage.display(topScreen,main,background);
        state = curPage.state;
        navTracker = navTracker + "#" + process.nextPage;
        history.pushState(navTracker,null,`#${process.nextPage}`);
      }
    });
  }

});

/**
 * 
 */
 $(window).on("popstate", (event)=>{
  curPage.destroy();
  curPage = navigate(location.hash);
  curPage.display(topScreen,main,background);
  state = curPage.state;
  history.pushState(navTracker,null,`${location.hash}`);
});

/**
 * NAVIGATION
 */
const dev  = {};
const portfolioNav = {"1" : One};
  
const nav = {"home": Home, "writer" : portfolioNav, "dev" : dev};

let curPage = nav.home;

let navTracker = "home";

/**
 * @param {string} hash string representing the current page within the app 
 * @returns {Object} page object resolved from the hash string
 */
function navigate(hash){
  let  path = hash.replaceAll("#","").split("/");
  let nextNode = path[0];
  let navKeys = Object.keys(nav);
  let newPage = {};
  if(navKeys.includes(nextNode)){
    let index = navKeys.indexOf(nextNode);
    newPage = Object.values(nav)[index];
  }
  if(path.length > 1){
    for (let i = 1; i < (path.length + 1); i++) {
      let keys = Object.keys(newPage);
      let n = path[i];
      if(keys.includes(n)){
        let index = Object.keys(newPage).indexOf(n);
        newPage = Object.values(newPage)[index];
      }
    }
  }
  return newPage;
}


/**
 * TICKER
 */

let state = rest;

function update(delta){
  delta.autoStart = false;
  state(delta);

}

function rest(delta){
  delta.start();
}