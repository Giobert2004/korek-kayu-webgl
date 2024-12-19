
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.module.js';

// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Pencil Body
const bodyGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2, 32);
const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0xffc107 });
const pencilBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
pencilBody.position.y = 0;
scene.add(pencilBody);

// Pencil Tip
const tipGeometry = new THREE.ConeGeometry(0.1, 0.3, 32);
const tipMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
const pencilTip = new THREE.Mesh(tipGeometry, tipMaterial);
pencilTip.position.y = -1.15;
scene.add(pencilTip);

// Eraser
const eraserGeometry = new THREE.CylinderGeometry(0.12, 0.12, 0.2, 32);
const eraserMaterial = new THREE.MeshStandardMaterial({ color: 0xff4d4d });
const pencilEraser = new THREE.Mesh(eraserGeometry, eraserMaterial);
pencilEraser.position.y = 1.1;
scene.add(pencilEraser);

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040); // Soft ambient light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Camera Position
camera.position.z = 5;

// Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the pencil
    pencilBody.rotation.y += 0.01;
    pencilTip.rotation.y += 0.01;
    pencilEraser.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Resize Listener
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
    