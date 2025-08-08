import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  Color,
} from "three";

async function MainScene() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  const scene = new Scene();
  scene.background = new Color("red");

  const fov = 35;
  const aspect = container!.clientWidth / container!.clientHeight;
  const near = 0.1;
  const far = 100;
  const camera = new PerspectiveCamera(fov, aspect, near, far);

  camera.position.set(0, 0, 10);

  const length = 2;
  const width = 2;
  const depth = 2;
  const geometry = new BoxGeometry(length, width, depth);

  const material = new MeshBasicMaterial();

  const mesh = new Mesh(geometry, material);

  scene.add(mesh);

  const renderer = new WebGLRenderer();

  renderer.setSize(container!.clientWidth, container!.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container!.append(renderer.domElement);
  renderer.render(scene, camera);
}
export default MainScene;
