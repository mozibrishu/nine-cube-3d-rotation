function oneTothree(){
  tl = gsap.timeline({defaults:{ease:'none'}})
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

.to(['.cube-4'],{x:50,rotateY:180,duration:2,scale:1},1)
.to(['.cube-4'],{x:100,rotateY:270,duration:1,scale:.8},'>')
.to(['.cube-4'],{x:150,rotateY:360,duration:1.5,scale:.8},'>')
.to(['.cube-4'],{x:200,rotateY:540,duration:2,scale:1},'>')

.to(['.cube-6'],{x:-50,rotateY:180,duration:2,scale:1},1)
.to(['.cube-6'],{x:-100,rotateY:270,duration:1,scale:.8},'>')
.to(['.cube-6'],{x:-150,rotateY:360,duration:1.5,scale:.8},'>')
.to(['.cube-6'],{x:-200,rotateY:540,duration:2,scale:1},'>')

.to(['.cube-5'],{x:-50,rotateY:180,rotateZ:720,duration:2,scale:1},1)
.to(['.cube-5'],{x:-100,rotateY:270,duration:1,scale:.8},'>')
.to(['.cube-5'],{x:50,rotateY:360,duration:1.5,scale:.8},'>')
.to(['.cube-5'],{x:0,rotateY:540,rotateZ:0,duration:2,scale:1},'>')

.to('.container',{rotateZ:10,duration:1.5},1)
.to('.container',{rotateZ:-10,duration:3},">")
.to('.container',{rotateZ:0,duration:1.5},">");
tl.timeScale( 1); 
}

oneTothree();

setTimeout(() => {
  tl.reverse();
}, 8000);


