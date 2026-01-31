# 💖 Carta Interativa

Uma carta digital interativa e romântica com efeitos especiais responsivos para desktop e mobile.

## 📸 Preview

### Desktop
- Cursor neon personalizado com trail
- Partículas de coração flutuantes
- Animação 3D ao passar o mouse

### Mobile
- Shake to reveal (balançar para revelar)
- Vibração haptic feedback
- Pétalas caindo ao abrir a carta
- Brilhos ao tocar na tela

---

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Animações e efeitos visuais
- **JavaScript (Vanilla)** - Interatividade e lógica
- **Device Motion API** - Detecção de movimento (shake)
- **Vibration API** - Feedback tátil

**Sem dependências externas!** ✨

---

## 📁 Estrutura de Pastas

```
projeto-carta/
│
├── index.html                 # Página principal
│
├── Css/
│   ├── index.css              # Estilos base e desktop
│   ├── mobile.css             # Estilos mobile responsivos
│   ├── effects.css            # Efeitos desktop (cursor neon)
│   └── effects-mobile.css     # Efeitos mobile (shake, pétalas)
│
├── Js/
│   ├── countdown.js           # Lógica do contador regressivo
│   ├── mobile.js              # Interações mobile (toque, vibração)
│   ├── effects.js             # Efeitos desktop (cursor, partículas)
│   └── effects-mobile.js      # Efeitos mobile (shake, pétalas)
│
├── image/
│   └── biaeeddy.jpg           # Imagem do casal (personalizável)
│
└── README.md                  # Documentação
```

---

## ⚙️ Instalação

### Pré-requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (opcional, mas recomendado)

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/carta-interativa.git
cd carta-interativa
```

2. **Configure as pastas**
   - Certifique-se de que as pastas `Css/`, `Js/` e `image/` existam
   - Coloque sua imagem em `image/biaeeddy.jpg`

3. **Abra o projeto**

   **Opção 1: Servidor Local (Recomendado)**
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   
   # Com PHP
   php -S localhost:8000
   ```
   Acesse: `http://localhost:8000`

   **Opção 2: Abrir Direto**
   - Clique duas vezes em `index.html`
   - ⚠️ Alguns efeitos podem não funcionar sem servidor

---
