import scroll from "./scroll";
import { domMedia } from "./build";

/**
 * Base level encapsulation of webpage object
 */
export default class Page {

 
  #top; 
  #main; 
  #background; 
  #domMedia; 
  #neighbors;  

  #views;
  #clicks;

  /**
   * 
   * @param {*} t 
   * @param {*} m 
   * @param {*} b 
   * @param {*} d 
   * @param {*} n 
   */
  constructor(t,m,b,d,n) {
    this.#top = t;
    this.#main = m;
    this.#background = b;
    this.#domMedia = d;
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