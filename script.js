function oneTothree(){
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
}, 10000);

Draggable.create('.replicaContainer', {
  type: "x", edgeResistance: .95, bounds: {
      top: 0, left:-300, width: 900, height: 250,
  }, onDragEnd: function () {
      // if (hitStatus) {
      //     gsap.to(".element_4", { display: "block", opacity: 1, duration: .5 });
      //     gsap.to(".element_6", { duration:.8, x: 0, y: 0});
      // }
      if(this.x<0){
        tl.reverse();
      }else{
        tl.play();
      }
      gsap.set('.replicaContainer',{x:0,y:0})
      console.log('drag end');
      
      // if(tl.reversed()){
      //   // tl.seek(-1);
      //   tl.reverse();
      // }else{
      //   // tl.seek(1);
      //   tl.play();
      // }

  }, onDrag: function () {
      
      console.log(tl.progress());

  },
  onDragStart: function () {
      // gsap.to(".element_4", { display: "none", opacity: 0, duration: .5 });
      console.log("working");
      tl.pause();
  }
})





// Draggable.create('.container', {
//   type: "x", edgeResistance: .95, bounds: {
//       top: 0, left: 80, width: 200, height: 100,
//   }, onDragEnd: function () {
//       // if (hitStatus) {
//       //     gsap.to(".element_4", { display: "block", opacity: 1, duration: .5 });
//       //     gsap.to(".element_6", { duration:.8, x: 0, y: 0});
//       // }
//       console.log('drag end');
//   }, onDrag: function () {
//       // if (this.hitTest(".element_5", 55) && hitStatus) {
//       //     hitStatus = false;
//       //     console.log('hitted');
//       //     hitHair();
//       // }
//       console.log('dragging');
//   },
//   onDragStart: function () {
//       // gsap.to(".element_4", { display: "none", opacity: 0, duration: .5 });
//       console.log("working");
//   }
// })

// mouseDown = false;
// // addEventListener("mousedown", () => (mouseDown = true));
// addEventListener("mouseup", () => (mouseDown = false));
// var e = window.event;
// posX = 0;
// posY = 0;

// document.querySelector(".container").addEventListener("mousedown", () => {
//   mouseDown = true;
//   {
//     // var e = window.event;

//     posX = e.clientX;
//     posY = e.clientY;
//     console.log(posX, posY);
//   }
// });

// document.querySelector(".container").addEventListener("mousemove", () => {
//   if (mouseDown) {
//     var e = window.event;

//     posX = e.clientX;
//     posY = e.clientY;
//     console.log(posX, posY);
//   }
// });
