/**
 * SETUP
 * 
 */
import {Application, Assets, Sprite, Spritesheet, Container, Graphics, AnimatedSprite, Text, Point} from "pixi.js";

const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
const cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

const app = new Application();
const base = new Container();
const hide = new Graphics();

const basewidth = window.innerWidth;
const baseheight = window.innerHeight;
let profilepic,logo,contact,developer,namae,profile,title,writer,line1,line2;
let scale=1;
let state=rest;

//Replay button
const play=new Container();
play.interactive=true;
play.buttonMode=true;
const pbttn = new Graphics();
const bttnarea = new Graphics();
const ptext = new Text({text: 'Play Animation', style: {fontFamily: 'Arial', fontSize: 11, fill: 0x000000, align: 'center'}});
ptext.anchor.set(0.5);
  
//Load assets for Intro Sequence animation
Assets.add({alias: "r-1",src: "./storage/images/reveal-1.json"});
Assets.add({alias: "icon",src: "./storage/images/icons.json"});
Assets.backgroundLoad(["r-1","icon"]);



/**
 * Initialise Pixi Application
 */
(async function(){
  await app.init({backgroundAlpha:0, autoDensity: true, antialias: true, powerPreference: 'high-performance'});
  document.getElementById("panelm").appendChild(app.canvas);

  app.stage.addChild(base);

  app.ticker.add((delta) => animate(delta));

  //prepare and enter animation loop
  start();

})();

async function start() {

  const icons = await Assets.load("icon",loadProgressHandler);
  
  logo = Sprite.from(icons.textures["logo.png"]);
  title = Sprite.from(icons.textures["title.png"]);
  namae = Sprite.from(icons.textures["name.png"]);
  line1 = Sprite.from(icons.textures['line.png']);
  line2 = Sprite.from(icons.textures['line.png']);

  playIntro();
  
}


/**
 * ANIMATION LOGIC
 * 
 */

/**
 * Zoom
 */
async function playIntro(){
  scale = getScale();

  //prepare assets
  title.alpha=0;
  line1.alpha=0;
  line2.alpha=0;

  populate();
  
  //logo.anchor.set(0.5);
  logo.width=0;
  logo.height=0;
  logo.position.set(window.innerWidth/2,window.innerHeight/2);

  namae.alpha=0;
  namae.anchor.set(0.5);
  namae.width=879*scale;
  namae.height=300*scale;
  namae.position.set(basewidth/2,baseheight/2);
  
  //begin opening sequence
  base.addChild(logo);
  let zoom = setInterval(() => {
    if(logo.width<(244*scale) || logo.height<(175*scale)){
      if(logo.width<(244*scale)){
        logo.width=Math.min(logo.width+(scale*2.8),244*scale);
      }
      if(logo.height<(175*scale)){
        logo.height=Math.min(logo.height+(scale*2),175*scale);
      }
    }else{
      if(logo.width==(244*scale) && logo.height==(175*scale)){
        clearInterval(zoom);
        setTimeout(()=>introsequence(),200);
      }
    }
  }, 1000/60);
}

/**
 * Reveal
 */
async function introsequence(){
  clearTimeout();
  let frames = await Assets.load("r-1",loadProgressHandler);
  let sequence = AnimatedSprite.fromFrames(frames.data.animations["reveal"]);
  sequence.width=879*scale;
  sequence.height=300*scale;
  sequence.anchor.set(0.5);
  sequence.position.set(logo.x,logo.y);
  sequence.animationSpeed=0.9;
  sequence.loop=false;
  
  sequence.onFrameChange = () => {
    let set;
    if(sequence.currentFrame==82){
        set = setInterval(() => {
          hide.x+=10;
        }, 1000/60);
    }
    if(sequence.currentFrame==120){
      clearInterval(set);
    }
  };
  sequence.onComplete = () => {
    namae.alpha=1;
    sequence.destroy();
    state=welcome;
  }
  hide.clear();
  hide.fill(0xFFFFFF).rect(basewidth/2+((350*scale)/3),baseheight/2-(175*scale),(879*scale),410*scale/2);
  hide.fill(0xFFFFFF).rect(basewidth/2+((300*scale)/2),baseheight/2+30,(879*scale),300*scale/2);
  base.addChild(namae, sequence,hide);
  base.removeChild(logo);
  sequence.play();
}

/**
 * ANIMATION Helpers
 */

/**
 * Before Animation
 */
async function populate(){
  title.anchor.set(0.5);
  title.width=879*scale;
  title.height=300*scale;
  title.position.set(basewidth/2,((300*scale)/2)+10);
  base.addChild(title);

  line1.anchor.set(0.5);
  line1.position.set(55,(baseheight/2)+10);
  line1.width=7*scale;
  line1.height=124*scale;

  line2.anchor.set(0.5);
  line2.position.set(basewidth-55,(baseheight/2)+10);
  line2.width=7*scale;
  line2.height=124*scale;

  base.addChild(line1, line2);
  }

  /**
   * After Animation
   */
async function welcome(delta){
  if(namae.y>((namae.height/2)+10)){
    namae.vy=3;
    namae.y=Math.max(namae.y-(namae.vy*delta),(namae.height/2)+10);
  }
  if(namae.y==((namae.height/2)+10) && namae.alpha>0.5){
    namae.alpha=Math.max(namae.alpha-(0.01*delta),0);
    namae.height-=0.4*delta;
  }
  if(namae.y==((namae.height/2)+10) && namae.alpha<=0.5){
    namae.alpha=Math.max(namae.alpha-(0.005*delta),0);
    namae.height-=0.4*delta;
    title.alpha=Math.min(title.alpha+(0.01*delta),1);
  }
  /*if(contact.alpha<1){
    menu.children.forEach((child) => {
      child.alpha=Math.min(child.alpha+(0.01*delta),1);
      line1.alpha=Math.min(line1.alpha+(0.01*delta),1);
      line2.alpha=Math.min(line2.alpha+(0.01*delta),1);
      selector.alpha=Math.min(selector.alpha+(0.01*delta),1);
    });
  }*/
  if(namae.alpha==0 && title.alpha==1){
    base.removeChild(namae);
    if(isNew()!=='false'){setCookie('isnew','false',1);}
    state=rest;
    addPlayBtn();
  }
}

/**
 * Replay Button
 */
function addPlayBtn(){
  play.removeChildren();

  bttnarea.clear();
  bttnarea.fill({color: 0xFFFFFF,alpha: 0.001}).circle(basewidth-(74*scale),(25*scale),20*scale);
  play.hitarea=bttnarea;

  ptext.width=74*scale;
  ptext.height=13*scale;
  ptext.position.set((basewidth-(74*scale)),(50*scale));

  pbttn.clear();
  play.removeChildren();
  for (let i = 0; i < 361; i=i+45) {
    let x = (basewidth-(74*scale)) + (10*scale) * Math.cos((i*Math.PI)/180);
    let y = (30*scale) + (10*scale) * Math.sin((i*Math.PI)/180);
    pbttn.fill(0x000000).circle(x,y,3*scale);
  }
  play.addChild(pbttn,ptext);
  play.addChildAt(bttnarea,2);
  base.addChild(play);
  play.interactive=true;
}

  
/**
 * TICKER
 */
function animate(delta){
    state(delta);
}

function rest(delta){
    //
}


/**
 * USER TRACKING
 */
function isNew(){
  let check = decodeURIComponent(document.cookie);
  let name = 'isnew=';
  let ca = check.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


/**
 * UTILITY FUNCTIONS
 */

function getScale(){
  if(window.innerWidth>=992){
    return 1;
  }else if(window.innerWidth>=768 && window.innerWidth<992){
    return 0.75;
  }else if(window.innerWidth>=568 && window.innerWidth<768){
    return 0.65;
  }else if(window.innerWidth>=414 && window.innerWidth<568){
    return 0.45;
  }else{
    return 0.3;
  }  
}

/**
 * Progress report
 */
const p = new Text({text: '0%',style: {fontFamily: 'Arial', fontSize: 24, fill: 0x000000, align: 'center' }});
p.x=window.innerWidth/2;
p.y=window.innerHeight/2;
p.alpha=0;

function loadProgressHandler(progress){
  base.removeChild(p);
  if(progress==1){
    p.alpha=0;
    p.text='0'
  }else{
    p.text=`${progress*100}%`;
    base.addChild(p);
  }
}