/**
 * JAGANNATH NAYAK - Cyberpunk UI Audio Synthesizer (Web Audio API)
 * Zero external audio files required - 100% procedurally synthesized
 */

(function () {
  'use strict';

  let audioCtx = null;
  let isMuted = localStorage.getItem('portfolio_audio_muted') !== 'false'; // Default muted until toggled

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  window.soundFX = {
    isMuted: isMuted,

    toggleMute: function () {
      isMuted = !isMuted;
      localStorage.setItem('portfolio_audio_muted', isMuted);
      this.isMuted = isMuted;

      const btn = document.getElementById('audio-toggle-btn');
      if (btn) {
        btn.setAttribute('aria-label', isMuted ? 'Unmute Audio' : 'Mute Audio');
        btn.innerHTML = isMuted
          ? '<i data-lucide="volume-x"></i>'
          : '<i data-lucide="volume-2"></i>';
        if (window.lucide) window.lucide.createIcons();
      }

      if (!isMuted) {
        getAudioContext();
        this.click();
      }
      return isMuted;
    },

    // Subtle click
    click: function () {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    },

    // Modal popup swoosh
    open: function () {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(740, ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.06, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    },

    // Warp whoosh sound
    warp: function () {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(950, ctx.currentTime + 0.4);
      osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.8);

      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    }
  };

  // Add subtle clicks to buttons and links
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a, button, .filter-btn, .project-card, .achievement-card').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (window.soundFX) window.soundFX.click();
      });
    });
  });
})();
