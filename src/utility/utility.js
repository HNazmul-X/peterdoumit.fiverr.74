try{
    window.addEventListener("load", async () => {
       window.addEventListener("scroll", async (e)=> {
           const animation_box = document.querySelectorAll(".my-aos-animation");
           animation_box.forEach((element,index) => {
               const animation_enter_line = element.getAttribute("data-aos-enterline") || 1.25;
               const animation_area = window.innerHeight/Number(animation_enter_line) || document.rootElement.clientHeight
               const {top} = element.getBoundingClientRect()
               console.log(index,top);
               if(animation_area>top){
                   console.log(index,true)
                   element.classList.add("scrolled")
               } 
                else {
                   element.classList.remove("scrolled")
               }
           });
       })
    })

} catch(e){
    console.log(e);
}