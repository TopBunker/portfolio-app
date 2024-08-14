
import { Container } from "pixi.js";
import scroll from "./scroll";

/**
 * Page Class
 */

export default class Page {
  #fullPage = new Container();

  #neighbours;
  #domMedia;
  #canvasMedia;

  interactions = {"buttons": []};

  constructor(t,m,b,d,n) {
    this.#neighbours = n;
    this.#domMedia = d;
    this.#canvasMedia = {
      "top": t, 
      "main": m,
      "bg": b
    };
  }

  display(top,main,background,dom) {
    this.#fullPage.addChildAt(this.canvasMedia.bg,0);
    this.#fullPage.addChildAt(this.canvasMedia.main,1);
    this.#fullPage.addChildAt(this.canvasMedia.top,2);

    scroll();

    top.addChild(this.#fullPage.children[0]);
    main.addChild(this.#fullPage.children[1]);
    background.addChild(this.#fullPage.children[2]);

    this.domDisplay = this.domMedia;

    dom.innerHTML = this.domDisplay;
  }

  hide() {
    window.removeEventListener("wheel", scroll);
    this.#fullPage.removeChildren();
  }
}