<script setup>
const scrollToCases = () => {
  const element = document.getElementById('cases')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const stats = [
  { value: '500+', label: '完成项目' },
  { value: '10+', label: '年行业经验' },
  { value: '98%', label: '客户满意度' },
  { value: '50+', label: '可选色彩' }
]
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">旧墙翻新 让家焕然一新</h1>
      <p class="hero-subtitle">专业墙面翻新服务，为您的家注入新的生命力</p>
      <div class="hero-buttons">
        <button class="btn btn-primary" @click="scrollToCases">查看案例</button>
      </div>
      <div class="hero-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding-top: var(--navbar-height);
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="%23ffffff" fill-opacity="0.1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') no-repeat bottom;
  background-size: cover;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: clamp(30px, 5vw, 60px) clamp(16px, 3vw, 24px);
  max-width: 900px;
  width: 100%;
}

.hero-title {
  font-size: clamp(1.75rem, 6vw, 3.5rem);
  font-weight: 800;
  margin: 0 0 clamp(16px, 3vw, 24px);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 0.8s ease;
  line-height: 1.2;
  word-break: break-word;
}

.hero-subtitle {
  font-size: clamp(0.9rem, 3vw, 1.5rem);
  margin: 0 0 clamp(30px, 5vw, 48px);
  opacity: 0.95;
  animation: fadeInUp 0.8s ease 0.2s both;
  line-height: 1.5;
  padding: 0 clamp(8px, 2vw, 16px);
}

.hero-buttons {
  display: flex;
  gap: clamp(12px, 3vw, 24px);
  justify-content: center;
  margin-bottom: clamp(40px, 8vw, 72px);
  animation: fadeInUp 0.8s ease 0.4s both;
  flex-wrap: wrap;
}

.btn {
  padding: clamp(12px, 2.5vw, 18px) clamp(24px, 4vw, 36px);
  font-size: clamp(0.875rem, 2vw, 1.125rem);
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: clamp(120px, 20vw, 160px);
  -webkit-tap-highlight-color: transparent;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn-primary:active {
  transform: translateY(-1px);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #667eea;
}

.btn-secondary:active {
  background: rgba(255, 255, 255, 0.2);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: clamp(16px, 4vw, 48px);
  animation: fadeInUp 0.8s ease 0.6s both;
  max-width: 800px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
  padding: clamp(8px, 2vw, 12px);
}

.stat-value {
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: clamp(4px, 1vw, 8px);
}

.stat-label {
  font-size: clamp(0.75rem, 2vw, 1rem);
  opacity: 0.9;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .hero-content {
    padding: clamp(24px, 4vw, 40px) 16px;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: calc(var(--navbar-height) + 40px) 0 clamp(40px, 8vw, 60px);
  }

  .hero-content {
    padding: 20px 12px;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 40px;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 300px;
    min-height: 48px;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: calc(var(--navbar-height) + 30px) 0 40px;
  }

  .hero-content {
    padding: 16px 10px;
  }

  .hero-buttons {
    margin-bottom: 30px;
  }

  .btn {
    padding: 12px 20px;
    min-width: 120px;
  }
}

@media (max-width: 360px) {
  .hero {
    padding: calc(var(--navbar-height) + 20px) 0 30px;
  }
  
  .hero-stats {
    grid-template-columns: 1fr;
  }
}

@media (orientation: landscape) and (max-height: 500px) {
  .hero {
    min-height: auto;
    padding: calc(var(--navbar-height) + 20px) 0 30px;
  }
  
  .hero-stats {
    display: none;
  }
  
  .hero-buttons {
    margin-bottom: 24px;
  }
}

@media (hover: none) and (pointer: coarse) {
  .btn {
    min-height: 48px;
  }
}
</style>