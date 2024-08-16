import scroll from "./scroll";
import { domText } from "./build";

/**
 * Page Class
 */

export default class Page {
  #domMedia;
  #top;
  #main;
  #background;
  #neighbors;

  #interactions = {"buttons": []};

  constructor(t,m,b,d,n) {
    this.#domMedia = d;
    this.#top = t;
    this.#main = m;
    this.#background = b;
    this.#neighbors = n;
  }

  display(top,main,background,dom) {
    scroll(top,main,background);
    if(this.#domMedia != null){
      domText(this.#domMedia);
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

  getTop(){
    return this.#top;
  }

  getMain(){
    return this.#main;
  }

  getBackground(){
    return this.#background;
  }

  getNeighbors(){
    return this.#neighbors;
  }

  getDomElements(){
    return this.#domMedia;
  }

}