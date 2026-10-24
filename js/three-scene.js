/**
 * JAGANNATH NAYAK - 3D WebGL Interactive Background Scene
 * Powered by Three.js
 */

(function () {
  'use strict';

  // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    console.warn('Three.js not loaded. 3D canvas disabled.');
    return;
  }

  const canvas = document.getElementById('webgl-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05070d, 0.0018);

  const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );
  camera.position.set(0, 0, 400);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Ambient & Directional Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambientLight);

  const cyanLight = new THREE.PointLight(0x00f2fe, 3, 600);
  cyanLight.position.set(200, 200, 200);
  scene.add(cyanLight);

  const purpleLight = new THREE.PointLight(0x8b5cf6, 3, 600);
  purpleLight.position.set(-200, -200, 200);
  scene.add(purpleLight);

  // Group for the 3D Holographic Core
  const coreGroup = new THREE.Group();
  scene.add(coreGroup);

  // 1. Outer Hologram Polyhedron (Icosahedron Wireframe)
  const icoGeometry = new THREE.IcosahedronGeometry(75, 1);
  const icoMaterial = new THREE.MeshStandardMaterial({
    color: 0x00f2fe,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
    roughness: 0.2,
    metalness: 0.8
  });
  const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
  coreGroup.add(icoMesh);

  // 2. Inner Glowing Core
  const innerGeometry = new THREE.SphereGeometry(32, 24, 24);
  const innerMaterial = new THREE.MeshStandardMaterial({
    color: 0x8b5cf6,
    roughness: 0.1,
    metalness: 0.9,
    emissive: 0x3b0764,
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.85
  });
  const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
  coreGroup.add(innerSphere);

  // 3. Orbiting Gimbal Rings
  const ringMaterialCyan = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.4
  });
  const ringMaterialPurple = new THREE.MeshBasicMaterial({
    color: 0xec4899,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.35
  });

  const ring1 = new THREE.Mesh(new THREE.TorusGeometry(105, 0.8, 16, 100), ringMaterialCyan);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(125, 0.8, 16, 100), ringMaterialPurple);
  ring2.rotation.x = Math.PI / 3;
  coreGroup.add(ring1);
  coreGroup.add(ring2);

  // Position the 3D core in space (offset slightly to the right for desktop)
  coreGroup.position.set(160, 20, -50);

  // 4. Cosmic Particle Field
  const particleCount = 1400;
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const originalZ = new Float32Array(particleCount);
  const colors = new Float32Array(particleCount * 3);

  const color1 = new THREE.Color(0x00f2fe);
  const color2 = new THREE.Color(0x8b5cf6);
  const color3 = new THREE.Color(0x38bdf8);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 1600;
    positions[i3 + 1] = (Math.random() - 0.5) * 1600;
    positions[i3 + 2] = (Math.random() - 0.5) * 1200;
    originalZ[i] = positions[i3 + 2];

    const mixedColor = i % 3 === 0 ? color1 : (i % 3 === 1 ? color2 : color3);
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Particle Material
  const particleMaterial = new THREE.PointsMaterial({
    size: 2.8,
    vertexColors: true,
    transparent: true,
    opacity: 0.65,
    blending: THREE.AdditiveBlending
  });

  const particles = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particles);

  // Mouse & Scroll Parallax State
  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  let scrollY = 0;
  let targetScrollY = 0;
  let warpSpeed = 1;

  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX - window.innerWidth / 2) * 0.15;
    targetMouseY = (e.clientY - window.innerHeight / 2) * 0.15;
  });

  window.addEventListener('scroll', () => {
    targetScrollY = window.pageYOffset || document.documentElement.scrollTop;
  });

  // Responsive Core Position
  function updateLayout() {
    const isMobile = window.innerWidth < 992;
    if (isMobile) {
      coreGroup.position.set(0, -60, -100);
      coreGroup.scale.set(0.7, 0.7, 0.7);
    } else {
      coreGroup.position.set(220, 20, -50);
      coreGroup.scale.set(1, 1, 1);
    }
  }
  updateLayout();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    updateLayout();
  });

  // Hyperspace Warp Speed Trigger (Cinematic Video-style transition)
  window.trigger3DWarp = function (duration = 900) {
    if (typeof gsap !== 'undefined') {
      gsap.to(camera.position, {
        z: 220,
        duration: duration / 2000,
        ease: 'power2.in',
        yoyo: true,
        repeat: 1
      });
      gsap.to(icoMaterial, {
        opacity: 0.8,
        duration: duration / 2000,
        yoyo: true,
        repeat: 1
      });
    }
  };

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Smooth Mouse & Scroll lerping
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;
    scrollY += (targetScrollY - scrollY) * 0.06;

    // Rotate 3D Core
    icoMesh.rotation.x = elapsedTime * 0.25;
    icoMesh.rotation.y = elapsedTime * 0.35;

    ring1.rotation.z = elapsedTime * 0.4;
    ring1.rotation.x = elapsedTime * 0.2;
    ring2.rotation.y = -elapsedTime * 0.35;
    ring2.rotation.z = elapsedTime * 0.25;

    // Dynamic core hover bobbing
    coreGroup.position.y = (window.innerWidth < 992 ? -60 : 20) + Math.sin(elapsedTime * 1.5) * 12;

    // Camera movement based on scroll and mouse
    camera.position.x = mouseX * 0.4;
    camera.position.y = -mouseY * 0.4 - (scrollY * 0.12);
    camera.lookAt(0, -scrollY * 0.12, 0);

    // Particle subtle rotation
    particles.rotation.y = elapsedTime * 0.03;
    particles.rotation.x = elapsedTime * 0.015;

    renderer.render(scene, camera);
  }

  animate();
})();
