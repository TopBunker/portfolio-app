import scroll from "./scroll";
import { domMedia } from "./build";

/**
 * Page Class
 */

export default class Page {

  #domMedia; // elements to be placed on DOM
  #top; // animation and interaction objects for top canvas
  #main; // main container in main canvas
  #background; // background container in main canvas
  #neighbors; // neighbour pages 

  // SEO and related data functions
  #views;
  #clicks;

  constructor(t,m,b,d,n) {
    this.#domMedia = d;
    this.#top = t;
    this.#main = m;
    this.#background = b;
    this.#neighbors = n;
  }

  display(top,main,background,dom,scrollFn) {
    scrollFn = null ? "default" : scrollFn;

    // page scroll function
    window.addEventListener("wheel", (e) => {
      scroll(scrollFn, e, main, dom);
    });

    if(this.#domMedia != null){
      domMedia(this.#domMedia);
    }
    if(this.#top != null){
      top.addChild(this.#top);
    }
    if(this.#main != null){
      main.addChild(this.#main);
    }
    if(this.#background != null){
      background.addChild(this.#background);
    }
  }

  get top(){
    return this.#top;
  }

  get main(){
    return this.#main;
  }

  get background(){
    return this.#background;
  }

  get domMedia(){
    return this.#domMedia;
  }

  static #destroy(){
    window.removeEventListener("wheel", scroll);
  }
}