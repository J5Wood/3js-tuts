import { World } from "./World/World.js";
import { Camera, Material, Texture } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

async function Scene() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");
  console.log("Container: ", container);
  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // start the animation loop
  console.log("here");
  world.start();
}
export default Scene;
