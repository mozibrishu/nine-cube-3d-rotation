gsap.timeline({repeat:1,repeatDelay:3})
.to(['.cube'],{stagger:.3,rotateY:360,duration:2,scale:.7})
.to(['.cube'],{stagger:.3,rotateY:720,duration:2,scale:1},">1")
.to(['.cube'],{stagger:.3,rotateY:180,duration:2,scale:1},">1")
// .to(['.cube.cube-1','.cube.cube-2','.cube.cube-3','.cube.cube-4'],{stagger:.3,rotateY:0,duration:2,scale:.7})
// .to(['.cube.cube-1','.cube.cube-2','.cube.cube-3','.cube.cube-4'],{stagger:.3,rotateY:270,duration:2,scale:1},'>1')
// .to(['.cube.cube-1','.cube.cube-2','.cube.cube-3','.cube.cube-4'],{stagger:.3,rotateY:0,duration:2,scale:1},'>1')
// .to('.cube',{stagger:.3,rotateY:180,duration:2,scale:1},'>1')

// gsap.set('.cube__face--bottom',{translateZ:42});