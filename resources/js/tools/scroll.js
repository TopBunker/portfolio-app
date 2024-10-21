/**
 * SCROLL function
 */


// Define page scroll function
export default function scroll(scroll, e, main,dom) 
{
  switch (scroll) {
    case "default": 
      vScroll(e.deltaY, main, dom);
      break;
    case "vScroll":
      vScroll(e.deltaY, main, dom);
      break;
    default:
      vScroll(e.deltaY, main, dom);
      break;
  }
  
}

function vScroll(deltaY, main, dom){
  // deltaY > 0 : scrolling down the page; element.y decreases to move content up
  if(deltaY > 0){
    if(dom){
      // check for content below window
      if(((parseInt(dom.lastElementChild.style.top, 10) + dom.lastElementChild.scrollHeight + 100) > window.innerHeight) || ((main.y + main.height + 100) > window.innerHeight)){
        
        // scroll canvas and dom in sync
        for(const element of dom.children){
          let topInt = parseInt(element.style.top, 10);
          element.style.top = `${topInt - deltaY}px`;
        }
        main.y -= deltaY;

        // enforce scroll limit according to bottom-most content 
        if(((main.y + main.height + 100) > (parseInt(dom.lastElementChild.style.top, 10) + dom.lastElementChild.scrollHeight + 100))){
          if((main.y + main.height + 100) < window.innerHeight){
            let a = window.innerHeight - main.height - 100;
            for(const element of dom.children){
              let topInt = parseInt(element.style.top, 10);
              element.style.top = `${topInt + (Math.abs(a) - Math.abs(main.y))}px`;
            }
            main.y = a;
          }
        }else{
          if((parseInt(dom.lastElementChild.style.top, 10) + dom.lastElementChild.scrollHeight + 100) < window.innerHeight){
            let a = window.innerHeight - dom.lastElementChild.scrollHeight - 100;
            let topInt = parseInt(dom.lastElementChild.style.top, 10);
            for(const element of dom.children){
              let eTop = parseInt(element.style.top, 10);
              element.style.top = `${eTop + (a - topInt)}px`;
            }
            main.y += (a - topInt);
          }
        }
      }
    }else if(((main.y + main.height + 100) > window.innerHeight) /*&& (Math.abs(main.y) < ((main.height / 2) + 100))*/){
      main.y -= deltaY;
      
      // enforce scroll limit according to bottom-most content on canvas
      if((main.y + main.height + 100) < window.innerHeight){
        main.y = window.innerHeight - main.height - 100;
      }
    }
  }else if(deltaY < 0){
    if(dom){
      // scroll up if content present off screen 
      if((main.y < 0)){
        main.y -= deltaY;
        for(const element of dom.children){
          element.style.top = `${parseInt(element.style.top, 10) - deltaY}px`;
        }

        //enforce scroll limit according to position top
        if((main.y > 0)){
          let a = main.y;
          for(const element of dom.children){
          element.style.top = `${parseInt(element.style.top, 10) - a}px`;
          }
          main.y -= a;
       }

      }
    }else{
      // scroll down if canvas has scrollable content above window
      if(main.y < 0){
        main.y -= deltaY;

        // enforce scroll limit according to top position 
        if(main.y > 0){
          main.y = 0;
        }     
      }
    }
  }
}  
