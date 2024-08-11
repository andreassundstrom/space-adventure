import './main.css'

import * as THREE from 'three'
import { GLTF, GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let targetX = 0;
let currentX = 0;
let targetY = 0;
let currentY = 0;
let targetZ = 0;
let currentZ = 0;

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

function addEventListeners(){
  document.getElementById("about-box")?.addEventListener("mouseover",() => {
    // house?.scene.rotation.set(0,-1,0)
    targetX = 0;
    targetY = -0.5;
    targetZ = 0;
  })
  document.getElementById("showcase-box")?.addEventListener("mouseover",() => {
    house?.scene.rotation.set(0,-1.5,0)
    targetX = 0;
    targetY = -1.0;
    targetZ = 0;
  })
  document.getElementById("contact-box")?.addEventListener("mouseover",() => {
    house?.scene.rotation.set(0,-2.0,0)
    targetX = 0;
    targetY = -2.0;
    targetZ = 0;
  })

  document.getElementById("scene")?.addEventListener("mouseover",() => {
    house?.scene.rotation.set(0,-2.0,0)
    targetX = 0;
    targetY = -1.0;
    targetZ = 0.0;
  })
}

addEventListeners()

const speed = 0.1
function animate(){
  
  if(currentX < targetX){
    currentX += speed
  }
  if(currentX > targetX){
    currentX -= speed
  }

  if(currentY < targetY){
    currentY += speed
  }
  if(currentY > targetY){
    currentY -= speed
  }

  if(currentZ < targetZ){
    currentZ += speed
  }
  if(currentZ > targetZ){
    currentZ -= speed
  }

  house?.scene.rotation.set(currentX,currentY,currentZ)

  renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)