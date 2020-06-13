(()=>{      
    const aboutUsRight = document.querySelector(".about-us-right");
    const aboutUsLeft = document.querySelector(".about-us-left-image");
    let check = false;
    document.addEventListener('scroll',()=>{
        const scrollY = window.scrollY;
        console.log(scrollY);
        if(scrollY>483 && check === false){
            aboutUsRight.classList.remove("about-us-right-animDisappear");
            aboutUsRight.classList.add("about-us-right-anim");
            aboutUsRight.style.opacity = `1`;
            aboutUsLeft.classList.add("about-us-left-imgAnim");
            aboutUsLeft.style.opacity = `.85`;
            aboutUsLeft.addEventListener("mouseenter",(e)=>{
                e.target.style.opacity = `1`;
            });
            aboutUsLeft.addEventListener("mouseleave",(e)=>{
                e.target.style.opacity = '.85';
            })
            check = true;
        }else if(scrollY<483){
            if(check===true){
                aboutUsRight.classList.add("about-us-right-animDisappear");
                setTimeout(() => {
                    aboutUsLeft.style.opacity = `.3`;
                }, 300);
                setTimeout(() => {
                    aboutUsLeft.style.opacity = `0`;
                    aboutUsRight.style.opacity = `0`;
                    aboutUsRight.classList.remove("about-us-right-anim");
                    aboutUsLeft.classList.remove("about-us-left-imgAnim");
                }, 500);
                check = false;
                aboutUsLeft.addEventListener("mouseenter",(e)=>{
                    e.target.style.opacity = `0`;
                });
                aboutUsLeft.addEventListener("mouseleave",(e)=>{
                    e.target.style.opacity = '0';
                })
            }
        }
    })
    
})();

(()=>{
    const tags = document.querySelectorAll(".tags");
    const checkBox = document.querySelector("#check-side-bar");
    const hiddenSideBar = document.querySelector(".hidden-side-bar");
    tags.forEach((el)=>{
        el.addEventListener("click",()=>{
            setTimeout(() => {
                hiddenSideBar.style.opacity = `0`; 
                checkBox.checked = false;
            }, 300);
            
        });
    });

    checkBox.addEventListener("click",(e)=>{
        if(e.target.checked){            
            hiddenSideBar.style.opacity = 1;
        }
    })

})();