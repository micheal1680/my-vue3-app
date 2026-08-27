<script setup>
const scrollToGallery = () => {
  const element = document.getElementById('gallery')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const stats = [
  { value: '500+', label: '完成项目' },
  { value: '10+', label: '年行业经验' },
  { value: '98%', label: '客户满意度' },
  { value: '4', label: '核心业务' }
]
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-title">家居改造效果展示</h1>
      <p class="hero-subtitle">厨卫改造 · 柜子定制 · 墙衣施工 · 橱柜吊柜定制</p>
      <div class="hero-buttons">
        <button class="btn btn-primary" @click="scrollToGallery">查看效果</button>
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
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: clamp(30px, 6vw, 60px) clamp(16px, 3vw, 24px);
  padding-top: calc(var(--navbar-height) + clamp(20px, 4vw, 40px));
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
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: transparent;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.btn-primary:active {
  transform: translateY(-1px);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: clamp(16px, 3vw, 24px);
  animation: fadeInUp 0.8s ease 0.6s both;
}

.stat-item {
  text-align: center;
  padding: clamp(12px, 2vw, 16px);
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.stat-value {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 4px;
}

.stat-label {
  font-size: clamp(0.75rem, 1.5vw, 0.9rem);
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

@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
    padding-top: var(--navbar-height);
  }

  .hero-content {
    padding: 40px 20px;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .stat-item {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }
}
</style>