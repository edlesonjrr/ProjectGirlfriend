// EFEITOS ESPECIAIS - APENAS DESKTOP
const isDesktop = window.innerWidth > 768;

if (isDesktop) {
  // ===================================
  // CURSOR NEON PERSONALIZADO
  // ===================================
  
  // Criar cursor customizado
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  // Atualizar posição do mouse
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Criar trail (rastro)
    createTrail(mouseX, mouseY);
    
    // Criar coração ao mover (a cada 100ms)
    if (Math.random() > 0.85) {
      createCursorHeart(mouseX, mouseY);
    }
  });

  // Animação suave do cursor
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Efeito de click
  document.addEventListener('click', (e) => {
    const clickEffect = document.createElement('div');
    clickEffect.className = 'cursor-click';
    clickEffect.style.left = e.clientX - 20 + 'px';
    clickEffect.style.top = e.clientY - 20 + 'px';
    document.body.appendChild(clickEffect);
    
    setTimeout(() => clickEffect.remove(), 600);
  });

  // ===================================
  // TRAIL (RASTRO DO CURSOR)
  // ===================================
  let lastTrailTime = 0;
  
  function createTrail(x, y) {
    const now = Date.now();
    if (now - lastTrailTime < 30) return; // Limitar criação
    lastTrailTime = now;
    
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x - 4 + 'px';
    trail.style.top = y - 4 + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => trail.remove(), 800);
  }

  // ===================================
  // CORAÇÕES AO MOVER O CURSOR
  // ===================================
  function createCursorHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'cursor-heart';
    heart.textContent = '💖';
    heart.style.left = x + (Math.random() - 0.5) * 30 + 'px';
    heart.style.top = y + (Math.random() - 0.5) * 30 + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 1500);
  }

  // ===================================
  // PARTÍCULAS DE CORAÇÃO FLUTUANTES
  // ===================================
  function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    
    // Alterna entre emojis de coração
    const hearts = ['💖', '💕', '💗', '💓', '❤️'];
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    
    // Posição inicial aleatória
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '-50px';
    
    // Duração aleatória
    const duration = 8 + Math.random() * 6; // 8-14 segundos
    heart.style.animationDuration = duration + 's';
    
    document.body.appendChild(heart);
    
    // Remove após animação
    setTimeout(() => heart.remove(), duration * 1000);
  }

  // Criar corações flutuantes periodicamente
  setInterval(createFloatingHeart, 1500); // A cada 1.5 segundos
  
  // Criar alguns corações iniciais
  for (let i = 0; i < 5; i++) {
    setTimeout(() => createFloatingHeart(), i * 300);
  }

  // ===================================
  // ESCONDER CURSOR NOS LINKS/BOTÕES
  // ===================================
  const interactiveElements = document.querySelectorAll('a, button, .card');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.borderColor = '#ff1493';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.borderColor = '#ff6ec7';
    });
  });
}