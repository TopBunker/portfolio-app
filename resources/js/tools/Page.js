import scroll from "./scroll";
import { domMedia } from "./build";
import { yStrt, xStrt } from "./grid";

/**
 * Base level encapsulation of webpage object
 */
export default class Page {

  /**
   * 
   * @param {number} w width of page
   * @param {number} h height of page
   * @param {number} x horizontal position of page
   * @param {number} y vertical position of page
   */
  constructor(x, y, w, h){
    this._x = x ? x : xStrt();
    this._y = y ? y : yStrt();
    this._width = w ? w :  window.innerWidth;
    this._height = h ? h : window.innerHeight;
    this._scale = 1;
  }

  /**
   * @param {*} t Pixijs container with page's interactive elements
   * @param {*} m Pixijs container with page's main content
   * @param {*} b Pixijs container with background content
   * @param {*} d page elements attached to the HTML DOM
   * @param {*} n pages that can be navigated to from this page
   */
  construct(t,m,b,d,n) {
    this._top = t;
    this._main = m;
    this._background = b;
    this._domEl = d;
    this._neighbors = n;
  }

  pageScroll(sFn){
    scroll(sFn, e, main, dom);
  }

  display(top,main,background,dom,scrollFn) {

    if(this._domEl != null){
      domMedia(this._domEl);
    }
    if(this._top != null){
      if(top.children.includes(this._top)){
        this._top.visible = true;
      }else{
        top.addChild(this._top);
      }
    }
    if(this._main != null){
      if(main.children.includes(this._main)){
        this._main.visible = true;
      }else{
        main.addChild(this._main);
      }
    }
    if(this._background != null){
      if(background.children.includes(this._background)){
        this._background.visible = true;
      }else{
        background.addChild(this._background);
      }
    }

    // page scroll function
    let scroll = scrollFn ? scrollFn : "default";
    window.addEventListener("wheel", () => {pageScroll(scroll)})
  }

  destroy(scrollFn){

    if(this._domEl != null){
      //
    }
    if(this._top != null){
      this._top.visible = false;
    }
    if(this._main != null){
     this._main.visible = false;
    }
    if(this._background != null){
      this._background.visible = false;
    }

    //reset scrolling function
    let scroll = scrollFn ? scrollFn : "default";
    window.removeEventListener("wheel", () => {pageScroll(scroll)});
  }

  /**
   * @param {number} s positive integer value
   */
  set scale(s){
    this._scale = s;
    let pS = s >=1 ? s : (1 - s);
    this._width *= pS;
    this._height *= pS;
    this.pixiScale(s);
    this.domScale(pS);
  }

  pixiScale(s){
    if(this._top != null){
      this._top.scale = s;
    }
    if(this._main != null){
      this._main.scale = s;
    }
    if(this._background != null){
      this._background.scale = s;
    }
  }

  domScale(s){
    let val = s * 100;
    let vals = Object.values(tagListObject);
    let element = vals[0];
    if(element.nodeName == "P"){
      element.style.fontSize = `${val}%`; 
    }else{
      element.style.width = `${val}%`;
      element.style.height = `${val}%`;
    }
    if(vals.length > 1){
      for(i =1; i < vals.length; i++){
        element = vals[i];
        if(element.nodeName == "P"){
          element.style.fontSize = `${val}%`; 
        }else{
          element.style.width = `${val}%`;
          element.style.height = `${val}%`;
        }
      }
    }
  }
  
  /**
   * @param {number} val 
   */
  set x(val){
    let distance = val - this._x;
    this._x = val;
    pX(distance);
    domX(distance);
  }

  pX(dis){
    if(this._top != null){
      this._top.x += dis;
    }
    if(this._main != null){
      this._main.x += dis;
    }
    if(this._background != null){
      this._background.x += dis;
    }
  }

  domX(dis){
    let vals = Object.values(tagListObject);
    for(i = 0; i < vals.length; i++){
      let element = vals[i];
      let leftInt = parseInt(element.style.left, 10);
      element.style.left = `${leftInt + dis}px`; 
    }
  }

  /**
   * @param {number} val 
   */
  set y(val){
    let distance = val - this._y;
    this._y = val;
    pY(distance);
    domY(distance);
  }

  pY(dis){
    if(this._top != null){
      this._top.y += dis;
    }
    if(this._main != null){
      this._main.y += dis;
    }
    if(this._background != null){
      this._background.y += dis;
    }
  }

  domY(dis){
    let vals = Object.values(tagListObject);
    for(i = 0; i < vals.length; i++){
      let element = vals[i];
      let topInt = parseInt(element.style.top, 10);
      element.style.left = `${topInt + dis}px`; 
    }
  }

  setPosition(x,y){
    this.x(x);
    this.y(y);
  }

  /**
   * @param {number} val 
   */
  set width(val){
    let change = this._width - val;
    this._width = val;
  }

  /**
   * @param {number} val
   */
  set height(val){
    let change = this._height - val;
    this._height =  val;
  }

  get x(){
    return this._x;
  }

  get y(){
    return this._y;
  }

  get top(){
    return this._top;
  }

  get main(){
    return this._main;
  }

  get background(){
    return this._background;
  }

  get domMedia(){
    return this._domMedia;
  }

  
}