/**
 * JAGANNATH NAYAK - Main Application Logic & Interactivity
 */

(function () {
  'use strict';

  // Project Database with Full Details from Resume & Visuals
  const projectsData = [
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
          <li><strong>RAG Architecture:</strong> Utilized Retrieval-Augmented Generation to ground LLM responses directly in lecture notes and academic papers, eliminating hallucinations.</li>
          <li><strong>Dynamic Knowledge Graph:</strong> Visualized conceptual connections and semantic vector embeddings across topics in real-time.</li>
          <li><strong>Gamified Assessment:</strong> Built multi-level quizzes with an automated scoring engine and a live competitive leaderboard for students.</li>
          <li><strong>Resource Recommendation:</strong> Automated retrieval of contextual YouTube educational videos and reference documentation.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Python, LangChain, OpenAI / Llama APIs, FAISS Vector Search, Flask, Modern Dark UI.</p>
      `,
      github: 'https://github.com/jagannath2908',
      demo: '#'
    },
    {
      id: 'codeanalysis',
      title: 'AI Code Analysis & Doc Platform',
      subtitle: 'Automated Repo Intelligence & CI/CD Pipeline Validator',
      category: 'aiml',
      image: 'assets/projects/codeanalysis.jpg',
      tags: ['AI/ML', 'LLMs', 'Vector Database', 'CI/CD', 'GitHub API'],
      badge: 'DevOps & AI',
      badgeClass: '',
      shortDesc:
        'An AI-driven platform that scans GitHub repositories to detect syntax and dependency errors, generate automated documentation, and index codebases into vector embeddings.',
      fullDesc: `
        <p><strong>Overview:</strong> Developed an enterprise-grade developer productivity platform that deep-scans source code repositories, pinpoints dependency vulnerabilities, and automatically authors technical documentation.</p>
        <br/>
        <h4>Key Engineering Highlights:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.2rem; color: #cbd5e1; line-height: 1.7;">
          <li><strong>Semantic Code Search:</strong> Implemented dense vector embeddings with FAISS / Pinecone for natural language semantic code search across large repositories.</li>
          <li><strong>Automated Documentation:</strong> Generated function-level and architecture-level Markdown docs using structured LLM prompting.</li>
          <li><strong>CI/CD Integration:</strong> Integrated automated validation hooks into GitHub Actions and Jenkins pipelines to guarantee code quality prior to merge.</li>
          <li><strong>Syntax & AST Diagnostics:</strong> Built an AST parser to construct dependency graphs and diagnostic heatmaps.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Python, Pinecone/FAISS, GitHub REST API, Docker, CI/CD, React/Vanilla JS.</p>
      `,
      github: 'https://github.com/jagannath2908',
      demo: '#'
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
        'An AIoT healthcare system combining Raspberry Pi telemetry and computer vision wound analysis with healing-rate tracking, automated nurse alerts, and voice assistance.',
      fullDesc: `
        <p><strong>Overview:</strong> Awarded <strong>First Place at the National Level Hackathon (Hack Fusion 1.0)</strong> at Maharaja Institute of Technology (MIIT), Mysuru. Designed to drastically improve hospital efficiency and patient care telemetry.</p>
        <br/>
        <h4>Key Engineering Highlights:</h4>
        <ul style="margin: 0.5rem 0 1rem 1.2rem; color: #cbd5e1; line-height: 1.7;">
          <li><strong>Computer Vision Wound Segmentation:</strong> Implemented deep learning vision models to track wound contraction, tissue healing rates, and infection indicators across hospital stays.</li>
          <li><strong>Telemetry Sensor Hub:</strong> Raspberry Pi hardware hub reading room temperature, humidity, noise level, and patient pulse telemetry.</li>
          <li><strong>Automated Alerts & Voice UI:</strong> Real-time automated doctor alerts and hands-free voice assistance for patients in bed.</li>
          <li><strong>Hospital Ward Dashboard:</strong> Centralized multi-bed monitoring system displaying predictive healing trends and vital anomalies.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Python, OpenCV, TensorFlow, Raspberry Pi, MQTT/WebSockets, Sensor Interfacing.</p>
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
          <li><strong>Role-Based Access Control (RBAC):</strong> Discrete permissions for teachers (upload, modify, curriculum management) and students (read, bookmark, query).</li>
          <li><strong>Stream & Batch Hierarchy:</strong> Structured categorization by academic department, semester, and course batch.</li>
          <li><strong>Integrated AI Chatbot:</strong> Embedded assistant trained on course syllabi to answer frequently asked student questions.</li>
          <li><strong>Secure File Handling:</strong> Cloud storage integration with metadata indexing for lightning-fast search.</li>
        </ul>
        <p><strong>Tech Stack:</strong> HTML5, CSS3, JavaScript, Python/Node, PostgreSQL, Cloud Storage.</p>
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
          <li><strong>Robust Relational Backend:</strong> Engineered using Python Flask and SQLAlchemy ORM with a normalized PostgreSQL database schema.</li>
          <li><strong>Production Cloud Deployment:</strong> Deployed live on Render with automated environment configuration, health checks, and database connection pooling.</li>
          <li><strong>Intuitive Kanban UX:</strong> Responsive task columns (Backlog, In Progress, Review, Completed) with status metrics and priority badges.</li>
          <li><strong>RESTful API Architecture:</strong> Clean endpoints for CRUD operations with token-based session handling.</li>
        </ul>
        <p><strong>Tech Stack:</strong> Python Flask, PostgreSQL, SQLAlchemy, HTML5/CSS3, JavaScript, Render.</p>
      `,
      github: 'https://github.com/jagannath2908',
      demo: '#'
    }
  ];

  // Dynamic Typewriter / Role Switcher
  const roles = [
    'Software Engineering Intern @ Mphasis',
    'AI & ML Specialist',
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
      typeSpeed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 400; // Pause before typing next
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
      card.className = 'project-card';
      card.setAttribute('data-category', p.category);

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
              <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="View Source on GitHub">
                <i data-lucide="github" style="width: 16px; height: 16px;"></i>
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
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-primary">
          <i data-lucide="github" style="width: 18px; height: 18px;"></i> View Repository on GitHub
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
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: gap: 1rem;">
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
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: gap: 1rem;">
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

  // Resume Modal Handlers
  window.openResumeModal = function () {
    const modal = document.getElementById('resume-modal');
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

  // Escape key to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeAllModals();
    }
  });

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

        // Cinematic video transition on filter change
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

          // Close mobile nav if open
          const navLinks = document.querySelector('.nav-links');
          if (navLinks) navLinks.classList.remove('mobile-open');

          // Trigger video warp transition then scroll
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

    // 7. Contact Form Handling
    const contactForm = document.getElementById('portfolio-contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
          const originalHTML = submitBtn.innerHTML;
          submitBtn.innerHTML = '<i data-lucide="check" style="width: 18px; height: 18px;"></i> Message Sent!';
          submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
          submitBtn.disabled = true;
          if (window.lucide) window.lucide.createIcons();

          setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalHTML;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
            if (window.lucide) window.lucide.createIcons();
          }, 3500);
        }
      });
    }

    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
})();
