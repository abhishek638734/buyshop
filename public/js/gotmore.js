//three js code of all the products in our mall
var my_scene = document.querySelector("a-scene");
var sceneEl = document.createElement("a-entity");
sceneEl.setAttribute("position", "0 0 0");
sceneEl.setAttribute("rotation", "0 0 0");
sceneEl.setAttribute("id", "goto");
AFRAME.registerComponent("do-something-once-loaded", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout?itemname=Ready Player Me\n Men's Stylish Jackket&itemrating=3.9&price=5000&product=./products/p1.glb&description=Biker Jacket,Pattern Solid,Regular fit Jacket&scale=3.7 3.7 3.7&qr=./qr_code/1p.png`,
        "_blank"
      );
    });
  },
});

// --------- City-----------------



var entityEl1 = document.createElement("a-entity");
entityEl1.setAttribute("gltf-model", "./products/google.glb");
entityEl1.setAttribute("position", "-60 30 -50");
entityEl1.setAttribute("scale", "3 4 3");
entityEl1.setAttribute("rotation", "0 180 0");
sceneEl.appendChild(entityEl1);

var model1 = document.createElement("a-cylinder");
model1.setAttribute("height", "0.7");
model1.setAttribute("material", "color:#939393;opacity: 0.8;");
model1.setAttribute("position", "70 0 -60"); // Adjusted position
model1.setAttribute("radius", "2");
model1.setAttribute("side", "double");
model1.setAttribute("theta-start", "50");
sceneEl.appendChild(model1);


// ------------------------------------------------------------
//model
// Product 1
var entityEl1 = document.createElement("a-entity");
entityEl1.setAttribute("gltf-model", "./products/p1.glb");
entityEl1.setAttribute("position", "70 1 -60");
entityEl1.setAttribute("scale", "4.5 4.5 4.5");
entityEl1.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl1);

var model1 = document.createElement("a-cylinder");
model1.setAttribute("height", "0.7");
model1.setAttribute("material", "color:#939393;opacity: 0.8;");
model1.setAttribute("position", "70 0 -60"); // Adjusted position
model1.setAttribute("radius", "2");
model1.setAttribute("side", "double");
model1.setAttribute("theta-start", "50");
sceneEl.appendChild(model1);



// Product 2
var entityEl2 = document.createElement("a-entity");
entityEl2.setAttribute("gltf-model", "./products/p2.glb");
entityEl2.setAttribute("position", "60 1 -60");
entityEl2.setAttribute("scale", "4.5 4.5 4.5");
entityEl2.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl2);

var model2 = document.createElement("a-cylinder");
model2.setAttribute("height", "0.7");
model2.setAttribute("material", "color:#939393;opacity: 0.8;");
model2.setAttribute("position", "60 0 -60"); // Adjusted position
model2.setAttribute("radius", "2");
model2.setAttribute("side", "double");
model2.setAttribute("theta-start", "50");
sceneEl.appendChild(model2);

// Product 3
var entityEl3 = document.createElement("a-entity");
entityEl3.setAttribute("gltf-model", "./products/p3.glb");
entityEl3.setAttribute("position", "80 1 -60");
entityEl3.setAttribute("scale", "4.5 4.5 4.5");
entityEl3.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl3);

var model3 = document.createElement("a-cylinder");
model3.setAttribute("height", "0.7");
model3.setAttribute("material", "color:#939393;opacity: 0.8;");
model3.setAttribute("position", "80 0 -60"); // Adjusted position
model3.setAttribute("radius", "2");
model3.setAttribute("side", "double");
model3.setAttribute("theta-start", "50");
sceneEl.appendChild(model3);

sceneEl.setAttribute("do-something-once-loaded", "");
my_scene.appendChild(sceneEl);



// 4)
// Product 4
var entityEl4 = document.createElement("a-entity");
entityEl4.setAttribute("gltf-model", "./products/p4.glb");
entityEl4.setAttribute("position", "70 1 -80");
entityEl4.setAttribute("scale", "4.5 4.5 4.5");
entityEl4.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl4);

var model4 = document.createElement("a-cylinder");
model4.setAttribute("height", "0.7");
model4.setAttribute("material", "color:#939393;opacity: 0.8;");
model4.setAttribute("position", "70 1 -60"); // Adjusted position
model4.setAttribute("radius", "2");
model4.setAttribute("side", "double");
model4.setAttribute("theta-start", "50");
sceneEl.appendChild(model4);

// Product 5
var entityEl5 = document.createElement("a-entity");
entityEl5.setAttribute("gltf-model", "./products/p5.glb");
entityEl5.setAttribute("position", "60 1 -80");
entityEl5.setAttribute("scale", "4.5 4.5 4.5");
entityEl5.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl5);

var model5 = document.createElement("a-cylinder");
model5.setAttribute("height", "0.7");
model5.setAttribute("material", "color:#939393;opacity: 0.8;");
model5.setAttribute("position", "60 1 -60"); // Adjusted position
model5.setAttribute("radius", "2");
model5.setAttribute("side", "double");
model5.setAttribute("theta-start", "50");
sceneEl.appendChild(model5);

// Product 6
var entityEl6 = document.createElement("a-entity");
entityEl6.setAttribute("gltf-model", "./products/p6.glb");
entityEl6.setAttribute("position", "80 1 -80");
entityEl6.setAttribute("scale", "4.5 4.5 4.5");
entityEl6.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl6);

var model6 = document.createElement("a-cylinder");
model6.setAttribute("height", "0.7");
model6.setAttribute("material", "color:#939393;opacity: 0.8;");
model6.setAttribute("position", "80 1 -60"); // Adjusted position
model6.setAttribute("radius", "2");
model6.setAttribute("side", "double");
model6.setAttribute("theta-start", "50");
sceneEl.appendChild(model6);

// Product 7
var entityEl7 = document.createElement("a-entity");
entityEl7.setAttribute("gltf-model", "./products/p7.glb");
entityEl7.setAttribute("position", "50 1 -60");
entityEl7.setAttribute("scale", "4.5 4.5 4.5");
entityEl7.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl7);

var model7 = document.createElement("a-cylinder");
model7.setAttribute("height", "0.7");
model7.setAttribute("material", "color:#939393;opacity: 0.8;");
model7.setAttribute("position", "50 1 -60"); // Adjusted position
model7.setAttribute("radius", "2");
model7.setAttribute("side", "double");
model7.setAttribute("theta-start", "50");
sceneEl.appendChild(model7);

// Product 8
var entityEl8 = document.createElement("a-entity");
entityEl8.setAttribute("gltf-model", "./products/p8.glb");
entityEl8.setAttribute("position", "90 1 -60");
entityEl8.setAttribute("scale", "4.5 4.5 4.5");
entityEl8.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl8);

var model8 = document.createElement("a-cylinder");
model8.setAttribute("height", "0.7");
model8.setAttribute("material", "color:#939393;opacity: 0.8;");
model8.setAttribute("position", "90 1 -60"); // Adjusted position
model8.setAttribute("radius", "2");
model8.setAttribute("side", "double");
model8.setAttribute("theta-start", "50");
sceneEl.appendChild(model8);

sceneEl.setAttribute("do-something-once-loaded", "");
my_scene.appendChild(sceneEl);


// 9)
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p9.glb");
entityEl.setAttribute("position", "100 1 -60");
entityEl.setAttribute("scale", "4.5 4.5 4.5");
entityEl.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl);

// Create a cylinder as a stand/base for the model
var model = document.createElement("a-cylinder");
model.setAttribute("height", "0.5"); // Adjust height as needed
model.setAttribute("material", "color:#939393; opacity: 0.8;");
model.setAttribute("position", "100 0.25 -60"); // Adjust y-position to slightly below the model
model.setAttribute("radius", "2");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);

sceneEl.setAttribute("do-something-once-loaded", "");
my_scene.appendChild(sceneEl);


var entityEl10 = document.createElement("a-entity");
entityEl10.setAttribute("gltf-model", "./products/p10.glb");
entityEl10.setAttribute("position", "109 1 -60");
entityEl10.setAttribute("scale", "4.5 4.5 4.5");
entityEl10.setAttribute("rotation", "0 0 0");
sceneEl.appendChild(entityEl10);
// sceneEl.appendChild(entityEl10);
// my_scene.appendChild(sceneEl);

// ------------------------------------------------------------
// var sceneEl = document.createElement("a-entity");
// sceneEl.setAttribute("position", "83 0 -137");
// // sceneEl.setAttribute("position", "110 0 0");
// sceneEl.setAttribute("rotation", "0 35 0");
// sceneEl.setAttribute("id", "goto1");
// AFRAME.registerComponent("do-something-once-loaded-1", {
//   init: function () {
//     // This will be called after the entity has properly attached and loaded.
//     const playBtn = document.querySelector("#goto1");
//     playBtn.addEventListener("click", (e) => {
//       window.open(
//         `/checkout.html?itemname=Mens Casual Wear&itemrating=4.2&price=3500&product=./products/p2.glb&description=Formal,Regular Fit,Solid,Spread,Long Sleeve&scale=3.7 3.7 3.7&qr=./qr_code/2p.png`,
//         "_blank"
//       );
//     });
//   },
// });


// //model
// var entityEl = document.createElement("a-entity");
// entityEl.setAttribute("gltf-model", "./products/sofa/scene.gltf");
// entityEl.setAttribute("position", "0 2.1 0");
// entityEl.setAttribute("scale", "0.1 0.06 0.06");
// // entityEl.setAttribute("scale", "1.4 1 1");
// sceneEl.appendChild(entityEl);
// //cylender stand
// model = document.createElement("a-cylinder");
// model.setAttribute("height", "0.7");
// model.setAttribute("material", "color:#939393;opacity: 0.8;");
// model.setAttribute("position", "-6 1 -9");
// model.setAttribute("radius", "18.5");
// model.setAttribute("side", "double");
// model.setAttribute("theta-start", "50");
// sceneEl.appendChild(model);
// // for up heiht change second ...for left keep 1 in - for right +
// //info stand
// model = document.createElement("a-entity");
// model.setAttribute(
//   "geometry",
//   "primitive: box; width: 4; height: 3.2;depth: 0.1"
// );
// model.setAttribute("rotation", "-14 70 0");
// model.setAttribute("position", "8 5.1 2");
// model.setAttribute(
//   "material",
//   "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
// );
// sceneEl.appendChild(model);
// //model text
// var model = document.createElement("a-entity");
// // /
// model.setAttribute("side", "double");
// model.setAttribute("position", "8.1 5.9 2.05");
// model.setAttribute("rotation", "0 70 0");
// model.setAttribute(
//   "troika-text",
//   "value",
//   "\nSekar Lifestyle Polyurethane \nFabric Sofa Set\n\nRs 26,999\nRated-4.2/5"
// );
// model.setAttribute("scale", "1.3 1.3 1.3");
// model.setAttribute("troika-text", "color", "black");
// sceneEl.appendChild(model);
// sceneEl.setAttribute("do-something-once-loaded-11", "");
// my_scene.appendChild(sceneEl);
