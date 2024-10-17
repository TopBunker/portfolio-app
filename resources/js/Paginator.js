
import {Application, Container, Ticker} from "pixi.js";
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
   * Manage pages
   */

  const dev  = [];
  //const portfolio = [One, Two,  Three, Four, Five, Six, Seven, Eight, Nine, PageX];
  
  const nav = [Home,One];
  let current = Home.current;
  nav[`${current}`].display(topScreen,main,background,dom);
  window.addEventListener('click',()=>{
    console.log(current);
    nav[`${current}`].display(topScreen,main,background,dom);
  })
  
  
 
  state = nav[`${current}`].state;


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