Shery.mouseFollower({
  // mouseFollower:true,
//    skew:true,
 
})

Shery.imageMasker(".aaa" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Explore",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".magnet" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

// Shery.imageEffect(".divimg", {
//   style: 5,
//   debug: true,
// });


// Shery.imageEffect(".animateImg", {
//   style: 1,
//   debug: true,
// });