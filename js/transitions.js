/**
 * JAGANNATH NAYAK - Cinematic Video-Animated Transition System
 * Features:
 * - Hyperspace / Warp Speed light streak canvas transition
 * - 3D Card Parallax & Tilt physics
 * - Smooth section transitions
 */

(function () {
  'use strict';

  const warpCanvas = document.getElementById('warp-canvas');
  if (!warpCanvas) return;

  const ctx = warpCanvas.getContext('2d');
  let width = (warpCanvas.width = window.innerWidth);
  let height = (warpCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = warpCanvas.width = window.innerWidth;
    height = warpCanvas.height = window.innerHeight;
  });

  // Hyper Tunnel Warp Stars
  const numStars = 600;
  const stars = [];
  const centerX = width / 2;
  const centerY = height / 2;

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: (Math.random() - 0.5) * width * 2,
      y: (Math.random() - 0.5) * height * 2,
      z: Math.random() * width,
      color: i % 3 === 0 ? '#00f2fe' : i % 3 === 1 ? '#8b5cf6' : '#ffffff'
    });
  }

  let isWarping = false;
  let warpStartTime = 0;
  let warpDuration = 900; // ms
  let onWarpComplete = null;

  function renderWarp(timestamp) {
    if (!isWarping) return;

    if (!warpStartTime) warpStartTime = timestamp;
    const progress = (timestamp - warpStartTime) / warpDuration;

    // Background trail wipe
    ctx.fillStyle = 'rgba(5, 7, 13, 0.28)';
    ctx.fillRect(0, 0, width, height);

    // Speed curve (accelerates then decelerates)
    const speed = Math.sin(progress * Math.PI) * 45 + 10;

    const cx = width / 2;
    const cy = height / 2;

    for (let i = 0; i < numStars; i++) {
      const star = stars[i];
      star.z -= speed;

      if (star.z <= 0) {
        star.z = width;
        star.x = (Math.random() - 0.5) * width * 2;
        star.y = (Math.random() - 0.5) * height * 2;
      }

      const k = 250 / star.z;
      const px = star.x * k + cx;
      const py = star.y * k + cy;

      if (px >= 0 && px <= width && py >= 0 && py <= height) {
        const size = (1 - star.z / width) * 4.5;
        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = star.color;

        // Draw light streak
        const prevZ = star.z + speed * 1.8;
        const prevK = 250 / prevZ;
        const prevX = star.x * prevK + cx;
        const prevY = star.y * prevK + cy;

        ctx.moveTo(prevX, prevY);
        ctx.lineTo(px, py);
        ctx.strokeStyle = star.color;
        ctx.lineWidth = size;
        ctx.stroke();
      }
    }

    // Flash burst at peak
    if (progress > 0.4 && progress < 0.6) {
      const flashAlpha = Math.sin((progress - 0.4) * Math.PI * 5) * 0.25;
      ctx.fillStyle = `rgba(0, 242, 254, ${flashAlpha})`;
      ctx.fillRect(0, 0, width, height);
    }

    if (progress < 1) {
      requestAnimationFrame(renderWarp);
    } else {
      isWarping = false;
      warpCanvas.classList.remove('active');
      ctx.clearRect(0, 0, width, height);
      if (typeof onWarpComplete === 'function') {
        onWarpComplete();
        onWarpComplete = null;
      }
    }
  }

  // Expose global trigger
  window.playVideoTransition = function (callback, duration = 800) {
    if (isWarping) return;
    isWarping = true;
    warpStartTime = 0;
    warpDuration = duration;
    onWarpComplete = callback;

    warpCanvas.classList.add('active');

    // Trigger sound if available
    if (window.soundFX && window.soundFX.warp) {
      window.soundFX.warp();
    }

    // Also trigger Three.js scene warp
    if (window.trigger3DWarp) {
      window.trigger3DWarp(duration);
    }

    requestAnimationFrame(renderWarp);
  };

  // ==========================================================================
  // 3D Tilt Card Parallax Physics
  // ==========================================================================
  function init3DTilt() {
    const tiltElements = document.querySelectorAll('.card-3d-wrapper, .project-card, .achievement-card');

    tiltElements.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // max 10 deg
        const rotateY = ((x - centerX) / centerX) * 10;

        el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      });
    });
  }

  document.addEventListener('DOMContentLoaded', init3DTilt);
})();
