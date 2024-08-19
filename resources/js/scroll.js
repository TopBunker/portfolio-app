/**
 * SCROLL function
 */


// Define page scroll function
export default function defaultScroll(e, main,dom) 
{
  vScroll(e.deltaY, main, dom);
}

function vScroll(deltaY, main, dom){
  // deltaY > 0 : scrolling down the page; element.y decreases to move content up
  if(deltaY > 0){
    if(dom.hasChildNodes){
      
      // check for content below window
      if(((parseInt(dom.lastElementChild.style.top, 10) + dom.lastElementChild.scrollHeight + 50) > window.innerHeight) || ((main.y + main.height + 50) > window.innerHeight)){
        
        // scroll canvas and dom in sync
        for(const element of dom.children){
          let topInt = parseInt(element.style.top, 10);
          element.style.top = `${topInt - deltaY}px`;
        }
        main.y -= deltaY;

        // enforce scroll limit according to bottom-most content 
        if(((main.y + main.height + 50) > (parseInt(dom.lastElementChild.style.top, 10) + dom.lastElementChild.scrollHeight + 50))){
          if((main.y + main.height + 50) < window.innerHeight){
            let a = window.innerHeight - main.height - 50;
            for(const element of dom.children){
              let topInt = parseInt(element.style.top, 10);
              element.style.top = `${topInt + (Math.abs(a) - Math.abs(main.y))}px`;
            }
            main.y = a;
          }
        }else{
          if((parseInt(dom.lastElementChild.style.top, 10) + dom.lastElementChild.scrollHeight + 50) < window.innerHeight){
            let a = window.innerHeight - dom.lastElementChild.scrollHeight - 50;
            let topInt = parseInt(dom.lastElementChild.style.top, 10);
            for(const element of dom.children){
              let eTop = parseInt(element.style.top, 10);
              element.style.top = `${eTop + (a - topInt)}px`;
            }
            main.y += (a - topInt);
            console.log(a,parseInt(dom.lastElementChild.style.top, 10));
          }
        }
      }
    }else if(((main.y + main.height + 50) > window.innerHeight) && (Math.abs(main.y) < ((main.height / 2) + 50))){
      main.y -= deltaY;

      // enforce scroll limit according to bottom-most content on canvas
      if((main.y + main.height + 50) < window.innerHeight){
        main.y = window.innerHeight - main.height - 50;
      }
    }
  }else if(deltaY < 0){
    if(dom.hasChildNodes){
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
