/**
 * SCROLL function
 */


// Define page scroll function
export default function scroll(top, main, background) 
{
    window.addEventListener("wheel", (e) => {
          defaultScroll(e.deltaY, main, background);
    });
}

function defaultScroll(deltaY, main, background){
  if(deltaY > 0){
    if(document.getElementById("dom").hasChildNodes){
      for(const element of document.getElementById("dom").children){
        let offset = element.style.top;
        if((parseInt(offset,10) + element.scrollHeight + 30) > window.innerHeight){
          element.scrollBy(deltaY);
          if((main.height > window.innerHeight) && (Math.abs(main.y) < (main.height/2))){
            main.y -= deltaY;
          }
          if((background.height  > window.innerHeight) && Math.abs(background.y) < (background.height/2)){
            background.y -= deltaY;
          }
        }
      }

    }else{
      if((main.height > window.innerHeight) && (Math.abs(main.y) < (main.height/2))){
        main.y -= deltaY;
      }
      if((background.height  > window.innerHeight) && Math.abs(background.y) < (background.height/2)){
        background.y -= deltaY;
      }
    }
  }else if(deltaY < 0){
    if(main.y < 0){
      main.y -= deltaY;
    }
    if(background.y < 0){
      background.y -= deltaY;
    }
  }
}


  
