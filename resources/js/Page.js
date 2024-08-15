
import { Container } from "pixi.js";
import scroll from "./scroll";

/**
 * Page Class
 */

export default class Page {
  #domMedia;
  #top;
  #main;
  #background;
  #neighbours;

  interactions = {"buttons": []};

  constructor(t,m,b,d,n) {
    this.#domMedia = d;
    this.#top = t;
    this.#main = m;
    this.#background = b;
    this.#neighbours = n;
  }

  display(top,main,background,dom) {
    scroll();
    if(this.#domMedia != null){
      dom.innerHTML = this.#domMedia;
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
}