try{
    window.addEventListener("load", () => {
        const cm_cursor = document.getElementById("cm-cursor");
        const business_section = document.getElementById("business");

        window.addEventListener("mousemove", function (e) {
            console.log(business_section);
            if (cm_cursor) {
                cm_cursor.style.cssText = `top:${e.pageY}px;left:${e.pageX}px`;
            }
        });

        business_section.addEventListener("mousemove", (e) => {
            cm_cursor.style.cssText = `top:${e.pageY}px;left:${e.pageX}px;display:block`;
        });
    })

} catch(e){
    console.log(e);
}