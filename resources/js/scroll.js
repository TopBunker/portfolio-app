/**
 * SCROLL function
 */


// Define page scroll function
export default function scroll(main) 
{
    window.addEventListener("wheel", (e) => {
          defaultScroll(e.deltaY, main);
    });
}

function defaultScroll(deltaY, main){
  if(deltaY > 0){
    if(document.getElementById("dom").hasChildNodes){
      for(const element of document.getElementById("dom").children){
        let offset = element.style.top;
        let topInt = pparseInt(offset,10);
        if((topInt + element.scrollHeight + 30) > window.innerHeight){
          element.scrollBy({top: deltaY, left: 0, behavior: smooth});
          main.y -= deltaY;
        }else if((main.height > window.innerHeight) && (Math.abs(main.y) < (main.height/2))){
          element.scrollBy({top: deltaY, left: 0, behavior: smooth});
          main.y -= deltaY;
        }
      }
    }else{
      if((main.height > window.innerHeight) && (Math.abs(main.y) < (main.height/2))){
        main.y -= deltaY;
      }
    }
  }else if(deltaY < 0){
    if(document.getElementById("dom").hasChildNodes){
      if(main.y < 0){
        element.scrollBy({top: deltaY, left: 0, behavior: smooth});
        main.y -= deltaY;
      }
    }else{
      if(main.y < 0){
        main.y -= deltaY;
      }
    }
  }
}


  
