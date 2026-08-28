<script setup>
import { ref } from 'vue'

const emit = defineEmits(['selectCategory'])

const services = [
  {
    id: 'kitchen-bath',
    icon: '🚿',
    title: '厨卫改造',
    description: '厨房卫生间整体改造，防水、瓷砖、吊顶一站式服务',
    color: '#3498db',
    count: '120+ 案例'  
  },
  {
    id: 'cabinet-custom',
    icon: '🗄️',
    title: '柜子定制',
    description: '衣柜、书柜、鞋柜等全屋定制，满足个性化收纳需求',
    color: '#2ecc71',
    count: '150+ 案例'
  },
  {
    id: 'wall-coat',
    icon: '🎨',
    title: '墙衣施工效果',
    description: '环保墙衣材料施工，质感细腻，色彩丰富，持久耐用',
    color: '#e74c3c',
    count: '180+ 案例'
  },
  {
    id: 'cabinet-hanging',
    icon: '🏠',
    title: '橱柜吊柜定制',
    description: '厨房橱柜、吊柜专业定制，合理利用空间，美观实用',
    color: '#f39c12',
    count: '100+ 案例'
  }
]

const selectedService = ref(null)

const handleSelectService = (service) => {
  selectedService.value = service
  emit('selectCategory', service.id)
}
</script>

<template>
  <section id="services" class="services">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">展示分类</h2>
        <p class="section-subtitle">四大核心业务，满足您的家居改造需求</p>
      </div>
      <div class="services-grid">
        <div 
          v-for="service in services" 
          :key="service.id" 
          class="service-card"
          :class="{ active: selectedService?.id === service.id }"
          @click="handleSelectService(service)"
        >
          <div class="service-icon-wrapper" :style="{ backgroundColor: service.color + '20' }">
            <div class="service-icon">{{ service.icon }}</div>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <div class="service-count" :style="{ color: service.color }">{{ service.count }}</div>
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
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(20px, 3vw, 30px);
}

.service-card {
  background: white;
  padding: clamp(24px, 4vw, 40px) clamp(20px, 3vw, 30px);
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2ecc71, #e74c3c, #f39c12);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover::before,
.service-card.active::before {
  opacity: 1;
}

.service-card:hover,
.service-card.active {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.service-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  transition: all 0.3s ease;
}

.service-card:hover .service-icon-wrapper {
  transform: scale(1.1);
}

.service-icon {
  font-size: clamp(36px, 5vw, 48px);
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
  margin: 0 0 16px;
}

.service-count {
  font-size: clamp(0.8rem, 1.5vw, 14px);
  font-weight: 600;
  padding: 6px 16px;
  background: #f8f9fa;
  border-radius: 20px;
  display: inline-block;
}

@media (max-width: 1024px) {
  .services {
    padding: 80px 16px;
  }

  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
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
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .service-card {
    padding: 24px 16px;
  }

  .service-icon-wrapper {
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
  }

  .service-icon {
    font-size: 32px;
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