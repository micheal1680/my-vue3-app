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
  padding: 100px 20px;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-size: 42px;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 16px;
}

.section-subtitle {
  font-size: 18px;
  color: #666;
  margin: 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  padding: 40px 30px;
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
  font-size: 56px;
  margin-bottom: 20px;
}

.service-title {
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 12px;
}

.service-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .services {
    padding: 60px 20px;
  }

  .section-title {
    font-size: 32px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>