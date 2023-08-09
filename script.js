let cur=document.querySelector("#cursor")
let curb=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
cur.style.left=dets.x+"px"
cur.style.top=dets.y+"px"
curb.style.left=dets.x-150+"px"
curb.style.top=dets.y-150+"px"
})

let navh4=document.querySelectorAll("#nav h4")
navh4.forEach(function (elem) {
  elem.addEventListener("mouseenter",function () {
    cur.style.scale=2.5
    cur.style.border='0.3px solid #fff'
    cur.style.backgroundColor='transparent'
  })
  elem.addEventListener("mouseleave",function () {
    cur.style.scale=1
    cur.style.border='0.3px solid #95C11E'
    cur.style.backgroundColor='#95C11E'
  })
})
const movingPara = document.getElementById("para");

document.addEventListener("mousemove", (e) => {
    const xPos = e.clientX;
    const yPos = e.clientY;
    const xOffset = window.innerWidth / 2 - xPos;
    const yOffset = window.innerHeight / 2 - yPos;
    
    gsap.to(movingPara, {
        x: xOffset * 0.05,
        y: yOffset * 0.05,
        duration: 0.5
    });
});
gsap.to("#nav",{
    backgroundColor:'black',
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    start:"top -25%",
    end:"top -75%",
    scrub:2
  }
})

gsap.from("#about img,#about-us",{
  y:50,
  opacity:0,
  duration:1,
  
  scrollTrigger:{
    trigger:"#about",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:1
  }
})
gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration:1,
  stagger:0.1,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:1,
    onEnter: () => console.log("Entering card section"), // Debug message
    onLeaveBack: () => console.log("Leaving card section")
  }
})

gsap.from("#colon1",{
  y:-70,
  x:-70,
  duration:2,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start: "top 55%",
    end:"top 45%",
    scrub:4,
    
  }
})

gsap.from("#colon2",{
  y:70,
  x:70,
  duration:2,
  scrollTrigger:{
    trigger:"#colon2",
    scroller:"body",
    start: "top 100%",
    end:"top 85%",
    scrub:4,
  
  }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
      trigger:"#page4",
      scroller:"body",
      start: "top 75%",
      end:"top 70%",
      scrub:3
    
    }

})
