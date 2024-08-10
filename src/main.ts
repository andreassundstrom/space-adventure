import './main.css'

import * as THREE from 'three'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("scene")?.appendChild(renderer.domElement)


camera.position.set(-3,2,-5)
// Load model
const loader = new GLTFLoader();
let house : GLTF | null;

loader.load('building/scene.gltf',houseModel => {
  house = houseModel
  scene.add(houseModel.scene)
  camera.lookAt(houseModel.scene.position)
  house.scene.rotation.set(0,-2,0)
})

function animate(){
  if(house){
    house.scene.rotateY(0.0001)
  }
  renderer.render(scene, camera)
}
renderer.setAnimationLoop(animate)