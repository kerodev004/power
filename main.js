//in the name of god
let links = document.querySelectorAll(".link")
let ham = document.querySelector(".ham")
let menu = document.querySelector(".menu")
let load = document.querySelector(".load")
let logo = document.querySelector(".logo")
let head = document.querySelector(".head")
let icons = document.querySelectorAll(".icons li")
let imgs = document.querySelectorAll("  .img ")
let conts = document.querySelectorAll("  .service-container ")
let texts = document.querySelectorAll("  .blog-text ")
let blogs = document.querySelectorAll("  .blog-img ")
let sub = document.querySelector(".sub")
let inps = document.querySelectorAll("  .inp-box input ")
let area = document.querySelector(" .area textarea")
///////////////////////////////
links.forEach((link) => {
    link.addEventListener('click' , change )
})
function change() {
    links.forEach((link) => {
        link.classList.remove("active")
        this.classList.add("active")
    } )
}
////////////////////////////////////////
ham.onclick = () => {
    menu.classList.toggle("activemenu")
}
links.forEach((link) => {
    link.addEventListener("click", remove)
})
function remove() {
    menu.classList.remove("activemenu")
}
//////////////////
window.addEventListener("load", () => {
    let preload = setTimeout(() => {
        load.classList.add("actload")
    }, 1500)
})
////////////////////////////////
window.onscroll = () => {
    if (scrollY>=50) {
        head.classList.add("acthead")
    }
    else {
        head.classList.remove("acthead")
    }
}
/////////////////////////////////
icons.forEach((icon) => {
    icon.addEventListener('click', changeclass)
    icon.addEventListener('click', imgbox)
    icon.addEventListener('click' , filter)
})
function changeclass() {
    icons.forEach((icon) => {
        icon.classList.remove("actli") 
        this.classList.add("actli")
    })
}
function imgbox() {
    imgs.forEach((img) => {
        img.classList.remove("actimg")
        for (i = 0; i < 5; i++){
            img.classList.add('actimg')
            console.log('i made it')
        }
    })
}
function filter() {
    conts.forEach((cont) => {
        cont.classList.remove("actcont")
    })
    document.querySelectorAll(this.dataset.filter).forEach((co) => {
        co.classList.add('actcont')
    })
}
/////////////////////////////////////////
texts.forEach((text) => {
    text.addEventListener("click", move)
    text.addEventListener("click", context)
})

function move() {
    texts.forEach((text => {
        text.classList.remove("actext")
        this.classList.add("actext")
    }))
}

function context() {
    blogs.forEach((blog) => {
        blog.classList.remove("actblog")
        document.querySelector(this.dataset.rate).classList.add("actblog")
    })
}
//////////////////////////
sub.onclick = () => {
    inps.forEach((inp) => {
        inp.value  = ""
    })
    area.value = ""
}