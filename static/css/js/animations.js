gsap.utils.toArray(".page").forEach(p=>{
 gsap.from(p,{y:40,opacity:0,scrollTrigger:{trigger:p,start:"top 80%"}});
});
