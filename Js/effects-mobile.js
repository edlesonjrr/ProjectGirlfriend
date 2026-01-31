// EFEITOS ESPECIAIS - APENAS MOBILE
const isMobileDevice = window.innerWidth <= 768;

if (isMobileDevice) {
  
  // ===================================
  // VARIÁVEIS GLOBAIS
  // ===================================
  let shakeThreshold = 15; // Sensibilidade do shake
  let lastShakeTime = 0;
  let shakeCount = 0;
  let hasShaken = false;

  // ===================================
  // CRIAR HINT DE SHAKE
  // ===================================
  const shakeHint = document.createElement('div');
  shakeHint.className = 'shake-hint';
  shakeHint.textContent = 'Balança o celular!';
  document.body.appendChild(shakeHint);

  // Esconder hint após 8 segundos
  setTimeout(() => {
    shakeHint.classList.add('hide');
  }, 8000);

  // ===================================
  // SHAKE TO REVEAL (DETECTOR)
  // ===================================
  if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', handleShake);
  }

  function handleShake(event) {
    const acc = event.accelerationIncludingGravity;
    const now = Date.now();

    if (now - lastShakeTime < 1000) return; // Cooldown de 1 segundo

    const x = Math.abs(acc.x);
    const y = Math.abs(acc.y);
    const z = Math.abs(acc.z);

    // Detectar movimento brusco
    if (x > shakeThreshold || y > shakeThreshold || z > shakeThreshold) {
      lastShakeTime = now;
      triggerShakeEffect();
    }
  }

  // ===================================
  // EFEITO DE SHAKE (EXPLOSÃO DE CORAÇÕES)
  // ===================================
  function triggerShakeEffect() {
    if (!hasShaken) {
      hasShaken = true;
      shakeHint.classList.add('hide');
    }

    // Vibração de sucesso
    if ('vibrate' in navigator) {
      navigator.vibrate([50, 30, 50, 30, 50]);
    }

    // Shake na carta
    const card = document.getElementById('card');
    card.classList.add('shaking');
    setTimeout(() => card.classList.remove('shaking'), 500);

    // Explosão de corações
    createHeartExplosion();

    // Mensagem de sucesso
    showShakeSuccess();
  }

  // ===================================
  // EXPLOSÃO DE CORAÇÕES
  // ===================================
  function createHeartExplosion() {
    const heartEmojis = ['💖', '💕', '💗', '💓', '❤️', '💝'];
    const numberOfHearts = 15;

    for (let i = 0; i < numberOfHearts; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'explosion-heart';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

        // Posição central da tela
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';

        // Direção aleatória da explosão
        const angle = (Math.PI * 2 * i) / numberOfHearts;
        const distance = 150 + Math.random() * 100;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.style.setProperty('--x', x + 'px');
        heart.style.setProperty('--y', y + 'px');

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 1500);
      }, i * 50);
    }
  }

  // ===================================
  // MENSAGEM DE SUCESSO
  // ===================================
  function showShakeSuccess() {
    const success = document.createElement('div');
    success.className = 'shake-success';
    success.textContent = '💖 Você é incrível! 💖';
    document.body.appendChild(success);

    setTimeout(() => {
      success.style.animation = 'successPop 0.4s reverse';
      setTimeout(() => success.remove(), 400);
    }, 2000);
  }

  // ===================================
  // VIBRAÇÃO DE CORAÇÃO BATENDO (AO TOCAR NA CARTA)
  // ===================================
  const cardElement = document.getElementById('card');
  let cardTouchTimeout;

  cardElement.addEventListener('touchstart', () => {
    // Vibração de coração batendo
    if ('vibrate' in navigator) {
      // Padrão: batida-pausa-batida-pausa (como coração)
      navigator.vibrate([100, 50, 100, 50, 150]);
    }
  });

  // ===================================
  // PÉTALAS AO ABRIR A CARTA
  // ===================================
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target.classList.contains('open')) {
        createPetals();
        
        // Vibração especial de abertura
        if ('vibrate' in navigator) {
          navigator.vibrate([50, 30, 50, 30, 100, 50, 150]);
        }
      }
    });
  });

  observer.observe(cardElement, { attributes: true, attributeFilter: ['class'] });

  // ===================================
  // CRIAR PÉTALAS
  // ===================================
  function createPetals() {
    const petalEmojis = ['🌸', '🌺', '🌷', '🌹', '💐'];
    const numberOfPetals = 20;

    for (let i = 0; i < numberOfPetals; i++) {
      setTimeout(() => {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
        petal.style.fontSize = (16 + Math.random() * 12) + 'px';

        // Posição inicial aleatória no topo
        petal.style.left = Math.random() * window.innerWidth + 'px';
        petal.style.top = '-50px';

        // Duração aleatória
        const duration = 3 + Math.random() * 2;
        petal.style.animationDuration = duration + 's';

        document.body.appendChild(petal);

        setTimeout(() => petal.remove(), duration * 1000);
      }, i * 100);
    }
  }

  // ===================================
  // BRILHOS AO TOCAR NA TELA
  // ===================================
  document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    createSparkles(touch.clientX, touch.clientY);
  });

  function createSparkles(x, y) {
    const numberOfSparkles = 6;

    for (let i = 0; i < numberOfSparkles; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';

      sparkle.style.left = x + 'px';
      sparkle.style.top = y + 'px';

      // Direção aleatória
      const angle = (Math.PI * 2 * i) / numberOfSparkles;
      const distance = 20 + Math.random() * 30;
      const sparkleX = Math.cos(angle) * distance;
      const sparkleY = Math.sin(angle) * distance;

      sparkle.style.setProperty('--sparkle-x', sparkleX + 'px');
      sparkle.style.setProperty('--sparkle-y', sparkleY + 'px');

      document.body.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 800);
    }
  }

  // ===================================
  // SOLICITAR PERMISSÃO PARA MOTION (iOS 13+)
  // ===================================
  if (typeof DeviceMotionEvent.requestPermission === 'function') {
    // iOS 13+ precisa de permissão
    const requestButton = document.createElement('button');
    requestButton.textContent = '📱 Ativar detecção de movimento';
    requestButton.style.cssText = `
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: #ff6ec7;
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 25px;
      font-size: 14px;
      font-weight: 600;
      z-index: 10000;
      box-shadow: 0 4px 15px rgba(255, 110, 199, 0.4);
      cursor: pointer;
    `;

    requestButton.addEventListener('click', () => {
      DeviceMotionEvent.requestPermission()
        .then(response => {
          if (response === 'granted') {
            window.addEventListener('devicemotion', handleShake);
            requestButton.remove();
          }
        })
        .catch(console.error);
    });

    document.body.appendChild(requestButton);
  }
}