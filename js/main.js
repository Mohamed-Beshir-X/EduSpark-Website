let landingPage = document.querySelector(".landing-page")
setInterval(()=>{
    let imgs = ["1.jpg" , "2.jpg" , "3.jpg" , "4.jpg" , "5.jpg"]
    let randomNumber = Math.floor(Math.random() * imgs.length)
    if(localStorage.getItem("active-bg") == "on" || localStorage.getItem("active-bg") == null){
        landingPage.style.backgroundImage = 'url("../imgs/'+imgs[randomNumber]+'")'
    }
    // landingPage.style.backgroundImage = 'url("../imgs/'+imgs[randomNumber]+'")'
},7000)


document.querySelector(".settings i").addEventListener("click", ()=>{
    document.querySelector(".settings").classList.toggle("oppened")
})

let colors = document.querySelectorAll(".colors ul li")
if(localStorage.getItem("color") !== null){
    document.documentElement.style.setProperty("--main-color" , localStorage.getItem("color"))
}
if(localStorage.getItem("active-color") !== null){
    colors[localStorage.getItem("active-color")].classList.add("active")
}else{
    colors[0].classList.add("active")
}
colors.forEach((color)=>{
    color.addEventListener("click" , (e)=>{
        document.documentElement.style.setProperty("--main-color" , e.target.dataset.color)
        for(let i =0; i<colors.length; i++){
            colors[i].classList.remove("active")
        }
        color.classList.add("active")
        localStorage.setItem("color" , e.target.dataset.color)
        localStorage.setItem("active-color" , Array.from(colors).indexOf(e.target))
    })
})
console.log(localStorage.getItem("active-color"))


// start Background setting
let randomBgSpans = document.querySelectorAll(".settings .random-bg span")
randomBgSpans.forEach((span)=>{
    span.addEventListener("click" ,(e)=>{
        for(let i = 0; i < randomBgSpans.length; i++){
            randomBgSpans[i].classList.remove("active")
        }
        span.classList.add("active")
        localStorage.setItem("active-bg" , span.dataset.bg)
        if(span.dataset.bg == "on"){
            for(let i = 0; i < backgroundImages.length; i++){
                backgroundImages[i].classList.remove("active")
            }
        }
    })
})
if(localStorage.getItem("active-bg") === "on" || localStorage.getItem("active-bg") === null){
    randomBgSpans[0].classList.add("active")
}else if(localStorage.getItem("active-bg") === "off"){
    randomBgSpans[1].classList.add("active")
}else if(localStorage.getItem("active-bg") === null){
}

let backgroundImages = Array.from(document.querySelectorAll(".settings .choose-bg div"))

backgroundImages.forEach((div)=>{
    div.addEventListener("click" ,(e)=>{
        for(let i = 0; i < backgroundImages.length; i++){
            backgroundImages[i].classList.remove("active")
        }
        div.classList.add("active")
        landingPage.style.backgroundImage = 'url("../imgs/'+div.children[0].dataset.img+'.jpg")'
        randomBgSpans[0].classList.remove("active")
        randomBgSpans[1].classList.add("active")
        localStorage.setItem("active-bg" , "off")
    })
})
// End Background setting -------------------------------------------------------------
// Start Image Show -------------------------------------------------------------
let galleryImages = document.querySelectorAll(".our-gallery .img")
galleryImages.forEach((img)=>{
    img.addEventListener("click" , ()=>{
        let layer = document.createElement("div")
        layer.className="img-layer"
        document.body.appendChild(layer)
        let box = document.createElement("div")
        box.className = "popup-box"
        layer.appendChild(box)
        let image = document.createElement("img")
        image.src = img.childNodes[0].src
        box.appendChild(image)
        let close = document.createElement("i")
        close.className = "close"
        close.classList.add("fas")
        close.classList.add("fa-close")
        box.appendChild(close)
        close.addEventListener("click" , ()=>{
            document.querySelector(".img-layer").remove()
        })
    })    
})
// End Image Show -------------------------------------------------------------
// Start bullets Setting   -------------------------------------------------------------

let bullets = document.querySelector(".nav-bullets")
let bulletSetting = document.querySelector(".settings .show-bullets .choose")
bulletSetting.addEventListener("click" , ()=>{
    bulletSetting.classList.toggle("off")
    if(bulletSetting.classList.contains("off")){
        bulletSetting.classList.remove("on")
        localStorage.setItem("bullets" , "off")
    }else{
        bulletSetting.classList.add("on")
        localStorage.setItem("bullets" , "on")
    }
    if(localStorage.getItem("bullets") === "off"){
        bullets.style.display = "none"
    }else{
        bullets.style.display = "flex"
    }
})
if(localStorage.getItem("bullets") === "off"){
        bullets.style.display = "none"
        bulletSetting.classList.add("off")
    }else{
        bullets.style.display = "flex"
        bulletSetting.classList.add("on")

}

// End bullets Setting   -------------------------------------------------------------
// Start Reset website   -------------------------------------------------------------
document.querySelector("button.reset").onclick = function(){
    localStorage.removeItem("active-bg")
    localStorage.removeItem("active-color")
    localStorage.removeItem("bullets")
    localStorage.removeItem("color")
    window.location.reload()
}

// End Reset website   -------------------------------------------------------------


// Start Bullets -------------------------------------------------------------
let AllBullets = document.querySelectorAll(".bullet")
AllBullets.forEach((e)=>{
    e.addEventListener("click",()=>{
        document.querySelector(e.dataset.section).scrollIntoView({
            behavior: "smooth"
        })
        AllBullets.forEach((e)=>{
            e.classList.remove("active")
        })
        e.classList.add("active")
    })
})
// End Bullets -------------------------------------------------------------
// Start Links -------------------------------------------------------------
let allLinks = document.querySelectorAll(".links a")
allLinks.forEach((e)=>{
    // e.preventDefault()
    e.addEventListener("click", (k)=>{
        console.log(e)
        document.querySelector(e.dataset.section).scrollIntoView({
            behavior:"smooth"
        })
    })
})

// End Links   -------------------------------------------------------------

// start toggle menu   -------------------------------------------------------------
let toggleMenu = document.querySelector(".toggle-menu")
let toggleMenuSpans = Array.from(document.querySelectorAll(".toggle-menu span"))
let listsLinks = document.querySelector(".header .links")
toggleMenu.addEventListener("click" , ()=>{
    listsLinks.classList.toggle("open")
    toggleMenu.classList.toggle("active")
})
window.onclick = function(e){
    console.log()
    if(e.target !== toggleMenu && toggleMenuSpans.indexOf(e.target) == -1 && e.target !== listsLinks){
        listsLinks.classList.remove("open")
        toggleMenu.classList.remove("active")
    }
}

// End toggle menu   -------------------------------------------------------------







// Start Observing -------------------------------------------------------------
let conc = document.querySelectorAll(".conc")
let aboutUs = document.querySelector(".about-us")
let ourGallery = document.querySelector(".our-gallery")
let timeLine = document.querySelector(".time-line")
let feateurs = document.querySelector(".features")
let testimonials= document.querySelector(".testimonials")
let contactUs = document.querySelector(".contact-us")
let ourSkills = document.querySelector(".our-skills .skills")
let skillsprogress = document.querySelectorAll(".our-skills .skills .skill .progress span.prog")
let skillsprogressNum = document.querySelectorAll(".our-skills .skills .skill .progress span.prog span")

let observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry=>{
        if(entry.isIntersecting){
            skillsprogress.forEach((span)=>{
                setTimeout(()=>{
                    span.style.width =span.dataset.progress
                    span.children[0].textContent = span.dataset.progress
                },500)
            })
            AllBullets.forEach((e)=>{
                e.classList.remove("active")
                if(e.dataset.section === ".our-skills"){
                    e.classList.add("active")
                }
            })
        }
    }))
})
let observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry=>{
        if(entry.isIntersecting){
            aboutUs.classList.add("appeared")
            AllBullets.forEach((e)=>{
                e.classList.remove("active")
                if(e.dataset.section === ".about-us"){
                    e.classList.add("active")
                }
            })
        }
    }))
})
let observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry=>{
        if(entry.isIntersecting){
            AllBullets.forEach((e)=>{
                e.classList.remove("active")
                if(e.dataset.section === ".our-gallery"){
                    e.classList.add("active")
                }
            })
        }
    }))
})
let observer4 = new IntersectionObserver((entries)=>{
    entries.forEach((entry=>{
        if(entry.isIntersecting){
            AllBullets.forEach((e)=>{
                e.classList.remove("active")
                if(e.dataset.section === ".time-line"){
                    e.classList.add("active")
                }
            })
        }
    }))
})
let observer5 = new IntersectionObserver((entries)=>{
    entries.forEach((entry=>{
        if(entry.isIntersecting){
            AllBullets.forEach((e)=>{
                e.classList.remove("active")
                if(e.dataset.section === ".features"){
                    e.classList.add("active")
                }
            })
        }
    }))
})

let observer6 = new IntersectionObserver((entries)=>{
    entries.forEach((entry=>{
        if(entry.isIntersecting){
            AllBullets.forEach((e)=>{
                e.classList.remove("active")
                if(e.dataset.section === ".testimonials"){
                    e.classList.add("active")
                }
            })
        }
    }))
})
let observer7 = new IntersectionObserver((entries)=>{
    entries.forEach((entry=>{
        if(entry.isIntersecting){
            AllBullets.forEach((e)=>{
                e.classList.remove("active")
                if(e.dataset.section === ".contact-us"){
                    e.classList.add("active")
                }
            })
        }
    }))
})

observer1.observe(ourSkills)
observer2.observe(aboutUs)
observer3.observe(ourGallery)
observer4.observe(timeLine)
observer5.observe(feateurs)
observer6.observe(testimonials)
observer7.observe(contactUs)
// End Observing  -------------------------------------------------------------
