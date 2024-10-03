import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import jQuery from 'jquery';
window.$ = jQuery;

import {Assets} from 'pixi.js';

Assets.add({alias: "name", src: "./storage/images/animations/name/name-0.json"});
Assets.add({alias: "photo", src: "./storage/images/animations/photo/photo-0.json"});
Assets.add({alias: "sign", src: "./storage/images/animations/sign/sign.json"});
Assets.add({alias: "pg3", src: "./storage/images/page4/img1.jpeg" });
Assets.add({alias: "pg4", src: "./storage/images/page4/img1.jpeg" });
Assets.addBundle("pg5", [
  {alias: "p51", src: "./storage/images/page5/img1.jpeg"},
  {alias: "p52", src: "./storage/images/page5/img2.jpeg"},
  {alias: "p53", src: "./storage/images/page5/img3.jpeg"},
  {alias: "p54", src: "./storage/images/page5/img4.jpeg"}
]);
Assets.addBundle("pg6", [
  {alias: "p61", src: "./storage/images/page6/img1.jpeg"},
  {alias: "p62", src: "./storage/images/page6/img2.jpeg"},
  {alias: "p63", src: "./storage/images/page6/img3.jpeg"}
]);
Assets.addBundle("pg7", [
  {alias: "p71", src: "./storage/images/page7/img1.jpeg"},
  {alias: "p72", src: "./storage/images/page7/img2.jpeg"},
  {alias: "p73", src: "./storage/images/page7/img3.jpeg"},
  {alias: "p74", src: "./storage/images/page7/img4.jpeg"}
]);
Assets.addBundle("pg8", [
  {alias: "p81", src: "./storage/images/page8/img1.jpeg"},
  {alias: "p82", src: "./storage/images/page8/img2.jpeg"},
  {alias: "p83", src: "./storage/images/page8/img3.jpeg"},
  {alias: "p84", src: "./storage/images/page8/img4.jpeg"}
]);
Assets.addBundle("pg9", [
  {alias: "p91", src: "./storage/images/page9/img1.jpeg"},
  {alias: "p92", src: "./storage/images/page9/img2.jpeg"},
  {alias: "p93", src: "./storage/images/page9/img3.jpeg"}
]);
Assets.addBundle("pg10", [
  {alias: "p101", src: "./storage/images/page10/img1.jpeg"},
  {alias: "p102", src: "./storage/images/page10/img2.jpeg"},
  {alias: "p103", src: "./storage/images/page10/img3.jpeg"},
  {alias: "p104", src: "./storage/images/page10/img4.jpeg"},
  {alias: "p105", src: "./storage/images/page10/img5.jpeg"}
]);
Assets.backgroundLoad("name", "photo", "sign", "pg3","pg4","pg5", "pg6", "pg7", "pg8", "pg9", "pg10");