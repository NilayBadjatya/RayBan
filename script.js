// // Shery.imageEffect("#back", { style: 5, debug: true, gooey: true });
// var elems = document.querySelectorAll(".elem");

// const { promises } = require("dns");

// elems.forEach(function (elem) {
//   var h1s = elem.querySelectorAll("h1");
//   var index = 0;
//   //   var animating = false;
//   document.querySelector("#main").addEventListener("click", function () {
//     gsap.to(h1s[index], {
//       top: "-=100%",
//       ease: Expo.easeInOut,
//       duration: 1,
//       onComplete: function () {
//         gsap.set(this.targets[0], { top: "100%" });
//       },
//     });

//     index === h1s.length - 1 ? (index = 0) : index++;

//     gsap.to(h1s[index], {
//       top: "-=100%",
//       ease: Expo.easeInOut,
//       duration: 1,
//     });
//   });
// });

var n = new Promise((res, rej) => {
  var num = Math.floor(Math.random() * 10);
  if (num < 5) return res();
  else return rej();
});
n.then(() => {
  console.log("NIlay");
});
n.catch(() => {
  console.log("Badjatya");
});
