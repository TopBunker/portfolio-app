
import {Application, Container, Ticker} from "pixi.js";
import { wipeScreen } from "./tools/build.js";
import Home from "./main/home"; 
import One from "./portfolio/writer1.js"; 
/*import Two from "./portfolio/page2.js"; 
import Three from "./portfolio/page3.js"; 
import Four from "./portfolio/page4.js"; 
import Five from "./portfolio/page5.js"; 
import Six from "./portfolio/page6.js"; 
import Seven from "./portfolio/page7.js"; 
import Eight from "./portfolio/page8.js"; 
import Nine from "./portfolio/page9.js"; 
import PageX from "./portfolio/pagex.js";*/

$.when($.ready).then(async () =>
{ 
  let state = rest;
  /**
   * DOM element for placing programattically generated content 
   * @type  {Element}
   */
  const dom = document.getElementById("dom");    
    
  /**
   * DOM element for placing Pixijs canvas
   * @type {Element}
   */
  const body = document.getElementById("canvas");

  /**
   *  Pixijs Application
   * @type {Application}
   * [website ingres:  Pixijs object encapsulating, and providing an interface for, the canvas element]
   */
  const bg = new Application();

  /**
   * Initialise Application with settings and append to DOM
   */
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
  });body.appendChild(bg.canvas);

  /**
   * Start Ticker
   */

  bg.ticker.add((delta)=>{update(delta)});
  console.log(bg.ticker);

  /**
   * Create and add Pixijs Container elements to the stage (root container)
   * @type {Container}
   * [element ingres: main website containers for canvas elements; subcontainers = true;]
   */
  const background = new Container();
  bg.stage.addChildAt(background, 0);

  const main = new Container();
  bg.stage.addChildAt(main, 1);
    
  /**
   * Define Application with z-index = front to capture user interactions;
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
    
  const topScreen = new Container();
  top.stage.addChild(topScreen);

  /**
   * Page manager
   */

  const dev  = [];
  const portfolioNav = {"1" : One};
  
  const nav = {"home": Home, "writer" : portfolioNav, "dev" : dev};
  let curPage = nav.home;
  curPage.display(topScreen,main,background,dom);
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
              console.log(path);
            }
          }
        }
        curPage.display(topScreen,main,background,dom);
      }
      
  });

  }
  
  
 
  state = curPage.state;


  /**
   * TICKER
   */

  function update(delta){
    state(delta);
  
  }

  function rest(delta){
    delta.autoStart = false;
  }
});