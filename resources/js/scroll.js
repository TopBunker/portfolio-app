/**
 * SCROLL function
 */


// Define page scroll function
export default function scroll() 
{
    window.addEventListener("wheel", (e) => {
        if(document.getElementById("dom").scrollHeight > window.innerHeight){
          domScroll(window.scrollY);
        }else{
          scroll(e.deltaY);
        } 
    });   
}

let ref = 0;
let temp = 0;
function domScroll(scrollY){
  temp = window.scrollY;
  if(ref < temp){
    main.x = 0;
    main.y -= (temp - ref);

    background.x =0;
    background.y -= (temp - ref);
  }else if(ref > temp){
    main.x;
    main.y += (ref - temp);

    background.x;
    background.y += (ref - temp); 
  }
  ref = temp;
}

function scroll(deltaY){
  if(deltaY > 0){
    if((main.height > window.innerHeight) && (Math.abs(main.y) < (main.height/2))){
      main.y -= deltaY;
    }
    if((background.height  > window.innerHeight) && Math.abs(background.y) < (background.height/2)){
      background.y -= deltaY;
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


  
