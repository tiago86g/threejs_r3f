import {
  ACESFilmicToneMapping,
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  sRGBEncoding,
  WebGLRenderer,
} from "three";

class Cube extends Mesh {
  constructor() {
    super();

    const geometry = new BoxGeometry(0.001, 3, 2, )
    const material = new MeshStandardMaterial({color: 'green'})

    this.geometry = geometry
    this.material = material
  }

  update(){
    this.rotation.x += 0.00;
    this.rotation.y += 0.01;
  }

  dispose(){
    this.geometry.dispose()
  }
}

// Create "Canvas"
const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5

// Add elements
const pointLight = new PointLight();
pointLight.position.set(1 , 1, 1);
scene.add(pointLight);

const cube = new Cube();
scene.add(cube);

// Render
const renderer = new WebGLRenderer({ alpha: true, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = ACESFilmicToneMapping;
renderer.outputEncoding = sRGBEncoding;
renderer.setSize(window.innerWidth, window.innerHeight);

const container = document.getElementById("__next");

if (container) {
  container.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cube.update()
}

animate();
