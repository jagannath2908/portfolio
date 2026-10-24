/**
 * JAGANNATH NAYAK - Main Application Logic & Interactivity
 */

(function () {
  'use strict';

  // Project Database with Full Details from Resume & Visuals
  const projectsData = [
    {
      id: 'codebrain',
      title: 'CodeBrain — AI Code Analysis & Docs',
      subtitle: 'Final Year Flagship Project • Live Deployed App',
      category: 'aiml',
      image: 'assets/projects/codeanalysis.jpg',
      tags: ['AI/ML', 'LLMs', 'Vector Database', 'CI/CD', 'GitHub API', 'Vercel'],
      badge: 'Final Year Flagship 🚀',
      badgeClass: 'flagship-badge',
      isFlagship: true,
      liveDemo: 'https://codebrain-dev.vercel.app/',
      shortDesc:
        'My Final Year Project: An AI-driven platform that deep-scans GitHub repositories, pinpoints dependency vulnerabilities, automates technical documentation, and provides semantic code search.',
      fullDesc: `
        <p><strong>Overview:</strong> <strong>CodeBrain</strong> is my official <strong>Final Year Engineering Project</strong>, deployed and live in production on Vercel. It is engineered to solve developer fatigue and code quality bottlenecks through automated artificial intelligence.</p>
        <br/>
        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; padding: 0.85rem 1rem; margin-bottom: 1.25rem;">
          <strong style="color: #34d399;">🌐 Live Production URL:</strong> 
          <a href="https://codebrain-dev.vercel.app/" target="_blank" rel="noopener noreferrer" style="color: #00f2fe; text-decoration: underline; margin-left: 0.4rem;">
            https://codebrain-dev.vercel.app/
          </a>
        </div>
        <h4>Key Engineering Highlights:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.2rem; color: #cbd5e1; line-height: 1.7;">
          <li><strong>Semantic Code Search:</strong> Implemented dense vector embeddings using FAISS / Pinecone for natural language semantic code queries across large repositories.</li>
          <li><strong>Automated Documentation:</strong> Generates function-level, module-level, and architecture-level Markdown docs using structured LLM prompting.</li>
          <li><strong>CI/CD Integration:</strong> Integrated automated validation hooks into GitHub Actions and Jenkins pipelines to guarantee code quality prior to merge.</li>
          <li><strong>Syntax & AST Diagnostics:</strong> Built an Abstract Syntax Tree (AST) parser to construct live repository dependency graphs and diagnostic heatmaps.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Python, Pinecone/FAISS, GitHub REST API, Docker, CI/CD, React, Vercel.</p>
      `,
      github: 'https://github.com/jagannath2908',
      demo: 'https://codebrain-dev.vercel.app/'
    },
    {
      id: 'wardroom',
      title: 'AI & IoT Wardroom Automation',
      subtitle: 'National Hackathon Winner (First Place - MIIT Mysuru)',
      category: 'iot',
      image: 'assets/projects/wardroom.jpg',
      tags: ['IoT', 'Raspberry Pi', 'Computer Vision', 'AI/ML', 'Healthcare'],
      badge: '1st Place Winner 🏆',
      badgeClass: 'winner-badge',
      shortDesc:
        'National Level Winner: An AIoT healthcare system combining Raspberry Pi telemetry and computer vision wound analysis with healing-rate tracking, nurse alerts, and voice assistance.',
      fullDesc: `
        <p><strong>Overview:</strong> Awarded <strong>First Place at the National Level Hackathon (Hack Fusion 1.0)</strong> at Maharaja Institute of Technology (MIIT), Mysuru. Designed to drastically improve hospital efficiency and patient care telemetry.</p>
        <br/>
        <h4>Key Engineering Highlights:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.2rem; color: #cbd5e1; line-height: 1.7;">
          <li><strong>Computer Vision Wound Segmentation:</strong> Deep learning vision models tracking wound contraction, tissue healing rates, and infection indicators.</li>
          <li><strong>Telemetry Sensor Hub:</strong> Raspberry Pi hardware hub reading room temperature, humidity, noise level, and vital signs.</li>
          <li><strong>Automated Alerts & Voice UI:</strong> Real-time automated doctor alerts and hands-free voice assistance for patients in bed.</li>
          <li><strong>Hospital Ward Dashboard:</strong> Centralized multi-bed monitoring system displaying predictive healing trends and vital anomalies.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Python, OpenCV, TensorFlow, Raspberry Pi, MQTT/WebSockets, Sensor Interfacing.</p>
      `,
      github: 'https://github.com/jagannath2908',
      demo: '#'
    },
    {
      id: 'mentorgpt',
      title: 'AI Student Mentor (MentorGPT)',
      subtitle: 'Retrieval-Augmented Generation (RAG) Learning Companion',
      category: 'aiml',
      image: 'assets/projects/mentorgpt.jpg',
      tags: ['RAG', 'AI/ML', 'Python', 'Vector DB', 'LLMs'],
      badge: 'Featured AI Project',
      badgeClass: '',
      shortDesc:
        'An intelligent personalized learning assistant powered by RAG to explain notes and concepts, curate video resources, and host interactive quizzes with real-time leaderboards.',
      fullDesc: `
        <p><strong>Overview:</strong> MentorGPT is an AI-powered personalized educational assistant designed to revolutionize how students interact with course materials and study notes.</p>
        <br/>
        <h4>Key Engineering Highlights:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.2rem; color: #cbd5e1; line-height: 1.7;">
          <li><strong>RAG Architecture:</strong> Utilized Retrieval-Augmented Generation to ground LLM responses directly in lecture notes and academic papers.</li>
          <li><strong>Dynamic Knowledge Graph:</strong> Visualized conceptual connections and semantic vector embeddings across topics in real-time.</li>
          <li><strong>Gamified Assessment:</strong> Built multi-level quizzes with an automated scoring engine and a live competitive leaderboard for students.</li>
          <li><strong>Resource Recommendation:</strong> Automated retrieval of contextual educational videos and reference documentation.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Python, LangChain, OpenAI / Llama APIs, FAISS Vector Search, Flask, Modern Dark UI.</p>
      `,
      github: 'https://github.com/jagannath2908',
      demo: '#'
    },
    {
      id: 'taskmanager',
      title: 'Full Stack Task Manager',
      subtitle: 'Production Flask & PostgreSQL Kanban Workspace',
      category: 'web',
      image: 'assets/projects/taskmanager.jpg',
      tags: ['Flask', 'PostgreSQL', 'SQLAlchemy', 'Render', 'REST API'],
      badge: 'Full Stack System',
      badgeClass: '',
      shortDesc:
        'A robust, production-deployed task management web app featuring PostgreSQL relational data storage, SQLAlchemy ORM, and responsive Kanban boards.',
      fullDesc: `
        <p><strong>Overview:</strong> A high-performance productivity tool engineered for tracking sprints, daily priorities, and team deliverables with real-time persistence.</p>
        <br/>
        <h4>Key Engineering Highlights:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.2rem; color: #cbd5e1; line-height: 1.7;">
          <li><strong>Robust Relational Backend:</strong> Python Flask and SQLAlchemy ORM with a normalized PostgreSQL database schema.</li>
          <li><strong>Production Cloud Deployment:</strong> Deployed live on Render with automated environment configuration, health checks, and database pooling.</li>
          <li><strong>Intuitive Kanban UX:</strong> Responsive task columns (Backlog, In Progress, Review, Completed) with status metrics.</li>
          <li><strong>RESTful API Architecture:</strong> Clean endpoints for CRUD operations with token-based session handling.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Python Flask, PostgreSQL, SQLAlchemy, HTML5/CSS3, JavaScript, Render.</p>
      `,
      github: 'https://github.com/jagannath2908',
      demo: '#'
    },
    {
      id: 'studyrepository',
      title: 'Study Material Repository',
      subtitle: 'Role-Based Academic Hub with AI Assistant',
      category: 'web',
      image: 'assets/projects/studyrepository.jpg',
      tags: ['Web Dev', 'Role Auth', 'AI Chatbot', 'Database'],
      badge: 'Academic Platform',
      badgeClass: '',
      shortDesc:
        'A comprehensive role-based educational platform enabling faculty to upload lecture notes and students to access categorized materials, with an integrated study chatbot.',
      fullDesc: `
        <p><strong>Overview:</strong> A structured collegiate content management system providing streamlined access to semester study notes, question banks, and an embedded chatbot to answer student queries.</p>
        <br/>
        <h4>Key Engineering Highlights:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.2rem; color: #cbd5e1; line-height: 1.7;">
          <li><strong>Role-Based Access Control (RBAC):</strong> Discrete permissions for teachers (upload, modify) and students (read, bookmark, query).</li>
          <li><strong>Stream & Batch Hierarchy:</strong> Structured categorization by academic department, semester, and course batch.</li>
          <li><strong>Integrated AI Chatbot:</strong> Embedded assistant trained on course syllabi to answer frequently asked student questions.</li>
        </ul>
        <p><strong>Tech Stack:</strong> HTML5, CSS3, JavaScript, Python/Node, PostgreSQL, Cloud Storage.</p>
      `,
      github: 'https://github.com/jagannath2908',
      demo: '#'
    }
  ];

  // Dynamic Typewriter / Role Switcher
  const roles = [
    'Software Engineering Intern @ Mphasis',
    'AI & ML Specialist (RAG / LLMs)',
    'Full Stack Web Developer',
    'National Hackathon Winner',
    'UI/UX & Product Designer'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const roleElement = document.getElementById('dynamic-role-text');

  function typeRole() {
    if (!roleElement) return;

    const currentRole = roles[roleIndex];
    if (isDeleting) {
      roleElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      roleElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400;
    }

    setTimeout(typeRole, typeSpeed);
  }

  // Render Projects Grid
  function renderProjects(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered =
      filter === 'all'
        ? projectsData
        : projectsData.filter((p) => p.category === filter);

    filtered.forEach((p) => {
      const card = document.createElement('div');
      card.className = `project-card ${p.isFlagship ? 'featured-card' : ''}`;
      card.setAttribute('data-category', p.category);

      const liveBtnHtml = p.liveDemo
        ? `<a href="${p.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn-live-link" title="Open Live Deployed App">
             <i data-lucide="globe" style="width: 14px; height: 14px;"></i> Live App ↗
           </a>`
        : '';

      card.innerHTML = `
        <div class="project-thumb-container">
          <img src="${p.image}" alt="${p.title}" class="project-thumb" loading="lazy">
          <div class="project-thumb-overlay">
            <span class="project-badge ${p.badgeClass}">${p.badge}</span>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.shortDesc}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
          <div class="project-footer">
            <button class="btn-inspect" onclick="openProjectModal('${p.id}')">
              Explore Details <i data-lucide="arrow-right" style="width: 16px; height: 16px;"></i>
            </button>
            <div class="project-links">
              ${liveBtnHtml}
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="icon-btn github-btn" title="View Source on GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  // Project Modal Handlers
  window.openProjectModal = function (projectId) {
    const p = projectsData.find((item) => item.id === projectId);
    if (!p) return;

    const modal = document.getElementById('project-modal');
    const content = document.getElementById('project-modal-content');
    if (!modal || !content) return;

    const liveActionHtml = p.liveDemo
      ? `<a href="${p.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="background: linear-gradient(135deg, #10b981, #059669);">
           <i data-lucide="globe" style="width: 18px; height: 18px;"></i> Open Live Deployed App ↗
         </a>`
      : '';

    content.innerHTML = `
      <div style="margin-bottom: 1.5rem; border-radius: 14px; overflow: hidden; border: 1px solid rgba(255,255,255,0.1); max-height: 380px;">
        <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 0.5rem; flex-wrap: wrap;">
        <h2 style="font-size: 1.85rem; color: #fff; font-weight: 800;">${p.title}</h2>
        <span class="project-badge ${p.badgeClass}">${p.badge}</span>
      </div>
      <p style="color: var(--primary); font-weight: 600; margin-bottom: 1.25rem;">${p.subtitle}</p>
      <div class="project-tags" style="margin-bottom: 1.5rem;">
        ${p.tags.map((t) => `<span class="tag-pill" style="font-size: 0.8rem; padding: 0.3rem 0.7rem;">${t}</span>`).join('')}
      </div>
      <div class="project-full-description" style="color: #94a3b8; font-size: 0.95rem; line-height: 1.7; margin-bottom: 2rem;">
        ${p.fullDesc}
      </div>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
        ${liveActionHtml}
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
          <span>View on GitHub</span>
        </a>
        <button class="btn-secondary" onclick="closeAllModals()">
          Close Preview
        </button>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.soundFX && window.soundFX.open) window.soundFX.open();
    if (window.lucide) window.lucide.createIcons();
  };

  // Certificate Modal Handlers
  window.openCertModal = function (certType) {
    const modal = document.getElementById('cert-modal');
    const content = document.getElementById('cert-modal-content');
    if (!modal || !content) return;

    if (certType === 'hackfusion') {
      content.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.25rem;">
          <div class="trophy-badge" style="margin-bottom: 0.5rem;">
            <i data-lucide="award" style="width: 18px; height: 18px;"></i> FIRST PLACE WINNER — NATIONAL LEVEL
          </div>
          <h2 style="font-size: 1.8rem; color: #fff; font-weight: 800;">Hack Fusion 1.0 (MIIT Mysuru)</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Awarded to <strong>Jagannath Nayak</strong> on 28th September 2025</p>
        </div>
        <div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(245, 158, 11, 0.4); box-shadow: 0 15px 35px rgba(0,0,0,0.7); margin-bottom: 1.5rem; background: #000;">
          <img src="assets/cert_hackfusion.png" alt="Hack Fusion First Place Certificate" style="width: 100%; height: auto; display: block;">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div class="verified-stamp">
            <i data-lucide="shield-check" style="width: 18px; height: 18px;"></i> Verified National Hackathon Certificate
          </div>
          <button class="btn-secondary" onclick="closeAllModals()">Close Certificate</button>
        </div>
      `;
    } else if (certType === 'hire4thon') {
      content.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.25rem;">
          <div class="trophy-badge runner-badge" style="margin-bottom: 0.5rem;">
            <i data-lucide="medal" style="width: 18px; height: 18px;"></i> SECOND PLACE RUNNER-UP — NATIONAL LEVEL
          </div>
          <h2 style="font-size: 1.8rem; color: #fff; font-weight: 800;">HIRE-4-THON (KSSEM & Dyashin Technosoft)</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Awarded to <strong>Jagannath Nayak</strong> on 27th March 2026</p>
        </div>
        <div style="border-radius: 12px; overflow: hidden; border: 1px solid rgba(0, 242, 254, 0.4); box-shadow: 0 15px 35px rgba(0,0,0,0.7); margin-bottom: 1.5rem; background: #000; max-height: 550px; text-align: center;">
          <img src="assets/cert_hire4thon.jpg" alt="Hire-4-Thon Runner-up Certificate" style="max-height: 550px; width: auto; max-width: 100%; margin: 0 auto; display: inline-block;">
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div class="verified-stamp">
            <i data-lucide="shield-check" style="width: 18px; height: 18px;"></i> Verified Hackathon Credential + Internship Offer
          </div>
          <button class="btn-secondary" onclick="closeAllModals()">Close Certificate</button>
        </div>
      `;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.soundFX && window.soundFX.open) window.soundFX.open();
    if (window.lucide) window.lucide.createIcons();
  };

  // Direct Gmail Redirection Function
  window.openGmailCompose = function (subject = 'Project Inquiry / Opportunity for Jagannath Nayak', body = '') {
    const toEmail = 'jagannathnayak865@gmail.com';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    const win = window.open(gmailUrl, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  // Resume Modal Handlers
  window.openResumeModal = function () {
    const modal = document.getElementById('resume-modal');
    if (!modal) return;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.soundFX && window.soundFX.open) window.soundFX.open();
    if (window.lucide) window.lucide.createIcons();
  };

  // Proposal / Website Request Modal Handlers
  window.openProposalModal = function () {
    const modal = document.getElementById('proposal-modal');
    if (!modal) return;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.soundFX && window.soundFX.open) window.soundFX.open();
    if (window.lucide) window.lucide.createIcons();
  };

  // Close All Modals
  window.closeAllModals = function () {
    document.querySelectorAll('.modal-overlay').forEach((m) => {
      m.classList.remove('active');
    });
    document.body.style.overflow = 'auto';
  };

  // Toast Notification Helper
  function showToast(message) {
    let toast = document.getElementById('toast-notification');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notification';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i data-lucide="check-circle" style="width: 20px; height: 20px; color: #10b981;"></i> <span>${message}</span>`;
    if (window.lucide) window.lucide.createIcons();
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // Escape key to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeAllModals();
    }
  });

  // Private phone destination (kept completely hidden from DOM/text)
  const _privateTarget = atob('KzkxNjI5MTg4NDUwMQ==');

  // Direct Mobile SMS Alert Dispatcher
  function dispatchDirectSMSAlert(senderName, senderContact, subject, messageBody) {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const smsContent = `[Portfolio Alert] From: ${senderName} | Contact: ${senderContact} | Subject: ${subject} | Msg: ${messageBody}`;

    if (isMobile) {
      const smsUrl = `sms:${_privateTarget}?body=${encodeURIComponent(smsContent)}`;
      window.location.href = smsUrl;
    } else {
      const pingUrl = `https://api.whatsapp.com/send?phone=${_privateTarget.replace('+', '')}&text=${encodeURIComponent(smsContent)}`;
      window.open(pingUrl, '_blank');
    }
  }

  // Interactive direct mobile trigger without exposing phone number
  window.triggerDirectMobilePing = function () {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const defaultMsg = "Hi Jagannath, I visited your portfolio and wanted to reach out to you directly!";
    if (isMobile) {
      window.location.href = `sms:${_privateTarget}?body=${encodeURIComponent(defaultMsg)}`;
    } else {
      window.open(`https://api.whatsapp.com/send?phone=${_privateTarget.replace('+', '')}&text=${encodeURIComponent(defaultMsg)}`, '_blank');
    }
  };

  // Setup Event Listeners
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Start Typewriter
    typeRole();

    // 2. Render initial projects
    renderProjects('all');

    // 3. Setup Project Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        if (window.playVideoTransition) {
          window.playVideoTransition(() => {
            renderProjects(filter);
          }, 500);
        } else {
          renderProjects(filter);
        }
      });
    });

    // 4. Setup Navigation Links with Video Warp Transition
    const navAnchors = document.querySelectorAll('a[href^="#"]');
    navAnchors.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '') return;

        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();

          const navLinks = document.querySelector('.nav-links');
          if (navLinks) navLinks.classList.remove('mobile-open');

          if (window.playVideoTransition) {
            window.playVideoTransition(() => {
              targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 650);
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });

    // 5. Mobile Nav Toggle
    const mobileBtn = document.getElementById('mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
      });
    }

    // 6. Sound FX Toggle Button
    const audioBtn = document.getElementById('audio-toggle-btn');
    if (audioBtn && window.soundFX) {
      audioBtn.addEventListener('click', () => {
        window.soundFX.toggleMute();
      });
    }

    // 7. Contact Form Handling (Email + Instant Phone SMS Alert)
    const contactForm = document.getElementById('portfolio-contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        const sendPhoneAlert = document.getElementById('contact-phone-alert')?.checked;

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Transmitting...';

        try {
          await fetch('https://formsubmit.co/ajax/jagannathnayak865@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              email: email,
              subject: subject,
              message: message,
              _subject: `New Portfolio Message from ${name}: ${subject}`
            })
          });
        } catch (err) {
          console.log('Dispatch forwarded to mail fallback');
        }

        if (sendPhoneAlert) {
          dispatchDirectSMSAlert(name, email, subject, message);
        }

        showToast('Message dispatched to Jagannath Nayak via Email & Direct Phone SMS!');

        submitBtn.innerHTML = '<i data-lucide="check"></i> Transmitted Successfully';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        setTimeout(() => {
          contactForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i data-lucide="send"></i> Transmit Message (Email & Direct Phone SMS)';
          submitBtn.style.background = '';
          if (window.lucide) window.lucide.createIcons();
        }, 4000);
      });
    }

    // 8. Proposal / Website Request Form Handling
    const proposalForm = document.getElementById('work-proposal-form');
    if (proposalForm) {
      proposalForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = proposalForm.querySelector('button[type="submit"]');
        const name = document.getElementById('proposal-name').value.trim();
        const email = document.getElementById('proposal-email').value.trim();
        const phone = document.getElementById('proposal-phone').value.trim();
        const projectType = document.getElementById('proposal-type').value;
        const budget = document.getElementById('proposal-budget').value;
        const timeline = document.getElementById('proposal-timeline').value;
        const details = document.getElementById('proposal-details').value.trim();

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting Proposal...';

        try {
          await fetch('https://formsubmit.co/ajax/jagannathnayak865@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              client_name: name,
              client_email: email,
              client_phone: phone,
              service_type: projectType,
              budget_range: budget,
              timeline: timeline,
              project_details: details,
              _subject: `💼 NEW WORK PROPOSAL from ${name} [${projectType}]`
            })
          });
        } catch (err) {
          console.log('Proposal forwarded to mail fallback');
        }

        dispatchDirectSMSAlert(name, `${email} / ${phone}`, `Work Proposal: ${projectType}`, details);

        showToast('Work proposal submitted to Jagannath Nayak via Email & Phone SMS!');

        submitBtn.innerHTML = 'Proposal Sent Successfully!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';

        setTimeout(() => {
          proposalForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Submit Project Proposal';
          submitBtn.style.background = '';
          window.closeAllModals();
          if (window.lucide) window.lucide.createIcons();
        }, 2000);
      });
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
})();
