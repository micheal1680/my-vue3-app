<script setup>
const services = [
  {
    icon: '🎨',
    title: '墙面刷漆',
    description: '专业墙面刷漆服务，采用环保水性漆，色彩丰富，持久耐用'
  },
  {
    icon: '🔧',
    title: '墙面修补',
    description: '裂缝修补、起皮处理、发霉治理，让墙面恢复平整光滑'
  },
  {
    icon: '🏠',
    title: '旧墙翻新',
    description: '整体墙面翻新改造，从设计到施工一站式服务'
  },
  {
    icon: '✨',
    title: '艺术涂料',
    description: '硅藻泥、艺术漆、肌理漆等高端装饰材料施工'
  },
  {
    icon: '🛡️',
    title: '防水处理',
    description: '卫生间、厨房等潮湿区域专业防水施工'
  },
  {
    icon: '📐',
    title: '定制设计',
    description: '根据客户需求提供个性化墙面设计方案'
  }
]
</script>

<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">我们的服务</h2>
        <p class="section-subtitle">专业团队，品质服务，让您的家焕然一新</p>
      </div>
      <div class="services-grid">
        <div v-for="service in services" :key="service.title" class="service-card">
          <div class="service-icon">{{ service.icon }}</div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services {
  padding: clamp(60px, 10vw, 100px) 20px;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: clamp(40px, 6vw, 60px);
}

.section-title {
  font-size: clamp(1.75rem, 4vw, 42px);
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 16px;
  line-height: 1.2;
}

.section-subtitle {
  font-size: clamp(0.9rem, 2vw, 18px);
  color: #666;
  margin: 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(20px, 3vw, 30px);
}

.service-card {
  background: white;
  padding: clamp(24px, 4vw, 40px) clamp(20px, 3vw, 30px);
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: clamp(40px, 6vw, 56px);
  margin-bottom: 20px;
}

.service-title {
  font-size: clamp(1.25rem, 2.5vw, 24px);
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 12px;
}

.service-description {
  font-size: clamp(0.875rem, 1.5vw, 16px);
  color: #666;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1024px) {
  .services {
    padding: 80px 16px;
  }

  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .services {
    padding: 60px 12px;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }

  .service-card {
    padding: 24px 18px;
  }
}

@media (max-width: 480px) {
  .services {
    padding: 50px 10px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .service-card {
    padding: 20px 16px;
  }
}
</style>