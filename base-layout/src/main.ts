import "./style.css";
import Scene from "./Scene";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>We out here</h1>
    <div id="scene-container"></div>
  </div>
`;

Scene();
