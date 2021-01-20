let box = document.querySelectorAll(".box");
let boxInfo = document.querySelectorAll(".box-info");


box[0].addEventListener("mouseover" , function(){
        boxInfo[0].style.opacity = "1";
        boxInfo[0].style.transition = ".3s ease-in-out";
        
})
    box[1].addEventListener("mouseover" , function(){
    boxInfo[1].style.opacity = "1";
    boxInfo[1].style.transition = ".3s ease-in-out";

    
})
  box[2].addEventListener("mouseover" , function(){
    boxInfo[2].style.opacity = "1";
    boxInfo[2].style.transition = ".3s ease-in-out";

    
})
box[0].addEventListener("mouseout" , function(){
        boxInfo[0].style.opacity = "0";
        boxInfo[0].style.transition = ".3s ease-in-out";
        
})
    box[1].addEventListener("mouseout" , function(){
    boxInfo[1].style.opacity = "0";
    boxInfo[1].style.transition = ".3s ease-in-out";

    
})
  box[2].addEventListener("mouseout" , function(){
    boxInfo[2].style.opacity = "0";
    boxInfo[2].style.transition = ".3s ease-in-out";

    
})
