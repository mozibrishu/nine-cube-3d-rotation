tl = gsap.timeline({defaults:{ease:'none'},repeat:-1,yoyo:true})
.to(['.cube-1','.cube-7'],{x:0,rotateY:180,duration:2,scale:.8},1)
.to(['.cube-1','.cube-7'],{x:100,rotateY:270,duration:1,scale:.8},'>')
.to(['.cube-1','.cube-7'],{x:200,rotateY:360,duration:1.5,scale:.8},'>')
.to(['.cube-1','.cube-7'],{x:200,rotateY:540,duration:2,scale:1},'>')

.to(['.cube-3','.cube-9'],{x:0,rotateY:180,duration:2,scale:.8},1)
.to(['.cube-3','.cube-9'],{x:-100,rotateY:270,duration:1,scale:.8},'>')
.to(['.cube-3','.cube-9'],{x:-200,rotateY:360,duration:1.5,scale:.8},'>')
.to(['.cube-3','.cube-9'],{x:-200,rotateY:540,duration:2,scale:1},'>')


.to(['.cube-2','.cube-8'],{x:0,rotateY:90,duration:1,scale:1},1)
.to(['.cube-2','.cube-8'],{x:-100,rotateY:270,duration:2.5,scale:.8},'>')
.to(['.cube-2','.cube-8'],{x:-100,rotateY:360,duration:1,scale:.8},'>')
.to(['.cube-2','.cube-8'],{x:0,rotateY:540,duration:2,scale:1},'>')
// .to(['.cube-3','.cube-9','.cube-6'],{x:-100,rotateY:270,duration:1,scale:.7},1)
// .to(['.cube-3','.cube-9','.cube-6'],{x:-200,rotateY:540,duration:1,scale:1},'>')
// .to(['.cube-4','.cube-6'],{x:100,rotateY:270,duration:1,scale:.7},1)
// .to(['.cube-4','.cube-6'],{x:200,rotateY:540,duration:1,scale:1},'>')
// .to(['.cube-2'],{x:-100,rotateY:90,duration:2,scale:1},1)
// .to(['.cube-3'],{x:-100,rotateY:90,duration:2,scale:1},1)

.to(['.cube-4'],{x:50,rotateY:180,duration:2,scale:1},1)
.to(['.cube-4'],{x:100,rotateY:270,duration:1,scale:.8},'>')
.to(['.cube-4'],{x:150,rotateY:360,duration:1.5,scale:.8},'>')
.to(['.cube-4'],{x:200,rotateY:540,duration:2,scale:1},'>')

.to(['.cube-6'],{x:-50,rotateY:180,duration:2,scale:1},1)
.to(['.cube-6'],{x:-100,rotateY:270,duration:1,scale:.8},'>')
.to(['.cube-6'],{x:-150,rotateY:360,duration:1.5,scale:.8},'>')
.to(['.cube-6'],{x:-200,rotateY:540,duration:2,scale:1},'>')

.to(['.cube-5'],{x:-50,rotateY:180,duration:2,scale:1},1)
.to(['.cube-5'],{x:-100,rotateY:270,duration:1,scale:.8},'>')
.to(['.cube-5'],{x:50,rotateY:360,duration:1.5,scale:.8},'>')
.to(['.cube-5'],{x:0,rotateY:540,duration:2,scale:1},'>')
tl.timeScale( 4); 