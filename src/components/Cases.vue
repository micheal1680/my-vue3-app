<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cases = [
  {
    id: 1,
    category: 'kitchen-bath',
    title: '厨卫改造 - 现代简约厨房',
    before: 'https://picsum.photos/600/400?random=10',
    after: 'https://picsum.photos/600/400?random=20',
    description: '老旧厨房整体改造，防水处理+瓷砖翻新+集成吊顶',
    location: '朝阳区'
  },
  {
    id: 2,
    category: 'cabinet-custom',
    title: '柜子定制 - 全屋衣柜',
    before: 'https://picsum.photos/600/400?random=11',
    after: 'https://picsum.photos/600/400?random=21',
    description: 'E0级板材定制，个性化设计，满足收纳需求',
    location: '海淀区'
  },
  {
    id: 3,
    category: 'wall-coat',
    title: '墙衣施工 - 客厅墙面',
    before: 'https://picsum.photos/600/400?random=12',
    after: 'https://picsum.photos/600/400?random=22',
    description: '环保墙衣材料施工，质感细腻，色彩丰富',
    location: '西城区'
  },
  {
    id: 4,
    category: 'cabinet-hanging',
    title: '橱柜吊柜 - L型厨房',
    before: 'https://picsum.photos/600/400?random=13',
    after: 'https://picsum.photos/600/400?random=23',
    description: '厨房橱柜+吊柜定制，合理利用空间',
    location: '东城区'
  },
  {
    id: 5,
    category: 'kitchen-bath',
    title: '厨卫改造 - 卫生间翻新',
    before: 'https://picsum.photos/600/400?random=14',
    after: 'https://picsum.photos/600/400?random=24',
    description: '卫生间干湿分离，防水+瓷砖+浴室柜',
    location: '丰台区'
  },
  {
    id: 6,
    category: 'cabinet-custom',
    title: '柜子定制 - 书房书柜',
    before: 'https://picsum.photos/600/400?random=15',
    after: 'https://picsum.photos/600/400?random=25',
    description: '开放式+封闭式组合书柜设计',
    location: '顺义区'
  }
]

const selectedCase = ref(null)
const showBefore = ref(true)
const touchStartX = ref(0)
const touchEndX = ref(0)

const openCase = (caseItem) => {
  selectedCase.value = caseItem
  showBefore.value = true
}

const closeCase = () => {
  selectedCase.value = null
}

const toggleImage = () => {
  showBefore.value = !showBefore.value
}

const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX
}

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX
}

const handleTouchEnd = () => {
  const diff = touchStartX.value - touchEndX.value
  const threshold = 50
  
  if (Math.abs(diff) > threshold) {
    toggleImage()
  }
  
  touchStartX.value = 0
  touchEndX.value = 0
}

const handleKeyDown = (e) => {
  if (!selectedCase.value) return
  
  if (e.key === 'Escape') {
    closeCase()
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    toggleImage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <section id="cases" class="cases">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">案例展示</h2>
        <p class="section-subtitle">真实案例，见证我们的专业实力</p>
      </div>

      <div class="cases-grid">
        <div v-for="caseItem in cases" :key="caseItem.id" class="case-card" @click="openCase(caseItem)">
          <div class="case-image">
            <img :src="caseItem.after" :alt="caseItem.title" loading="lazy" />
            <div class="case-badge">改造后</div>
          </div>
          <div class="case-info">
            <h3 class="case-title">{{ caseItem.title }}</h3>
            <p class="case-description">{{ caseItem.description }}</p>
            <p class="case-location">📍 {{ caseItem.location }}</p>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="selectedCase" class="case-modal" @click="closeCase" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeCase">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div class="modal-header">
            <h2>{{ selectedCase.title }}</h2>
            <button class="toggle-btn" @click="toggleImage">
              {{ showBefore ? '查看改造后' : '查看改造前' }}
            </button>
          </div>

          <div class="modal-image">
            <img :src="showBefore ? selectedCase.before : selectedCase.after" :alt="selectedCase.title" />
            <div class="image-label">{{ showBefore ? '改造前' : '改造后' }}</div>
          </div>

          <div class="modal-info">
            <p>{{ selectedCase.description }}</p>
            <p class="modal-location">📍 {{ selectedCase.location }}</p>
            <p class="modal-hint">💡 左右滑动或点击按钮切换对比图</p>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.cases {
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

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: clamp(20px, 3vw, 30px);
}

.case-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.case-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.case-image {
  position: relative;
  height: clamp(200px, 30vw, 250px);
  overflow: hidden;
}

.case-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.case-card:hover .case-image img {
  transform: scale(1.1);
}

.case-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: #3498db;
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 1.5vw, 14px);
  font-weight: 600;
}

.case-info {
  padding: clamp(16px, 3vw, 24px);
}

.case-title {
  font-size: clamp(1.1rem, 2vw, 22px);
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 12px;
}

.case-description {
  font-size: clamp(0.875rem, 1.5vw, 16px);
  color: #666;
  margin: 0 0 12px;
  line-height: 1.6;
}

.case-location {
  font-size: clamp(0.75rem, 1.2vw, 14px);
  color: #999;
  margin: 0;
}

.case-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(10px, 3vw, 20px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
}

.modal-content {
  background: white;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  margin: auto;
  -webkit-overflow-scrolling: touch;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
  min-width: 44px;
  min-height: 44px;
  -webkit-tap-highlight-color: transparent;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.8);
}

.modal-header {
  padding: clamp(16px, 3vw, 24px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  gap: 12px;
}

.modal-header h2 {
  font-size: clamp(1.125rem, 3vw, 1.75rem);
  color: #2c3e50;
  margin: 0;
}

.toggle-btn {
  padding: clamp(8px, 1.5vw, 10px) clamp(16px, 3vw, 20px);
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: clamp(0.8125rem, 1.5vw, 1rem);
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-height: 44px;
  -webkit-tap-highlight-color: transparent;
}

.toggle-btn:hover {
  background: #2980b9;
}

.toggle-btn:active {
  transform: scale(0.95);
}

.modal-image {
  position: relative;
  height: clamp(200px, 50vw, 400px);
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-label {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: clamp(0.8125rem, 1.5vw, 1rem);
  font-weight: 600;
}

.modal-info {
  padding: clamp(16px, 3vw, 24px);
}

.modal-info p {
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: #666;
  line-height: 1.6;
  margin: 0 0 12px;
}

.modal-location {
  color: #999;
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
}

.modal-hint {
  color: #3498db;
  font-size: clamp(0.75rem, 1.2vw, 0.875rem);
  font-weight: 500;
  margin: 0;
}

@media (max-width: 1024px) {
  .cases {
    padding: 80px 16px;
  }

  .cases-grid {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 24px;
  }

  .modal-content {
    max-width: 700px;
  }
}

@media (max-width: 768px) {
  .cases {
    padding: 60px 12px;
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .case-modal {
    padding: 10px;
  }

  .modal-content {
    max-width: 100%;
    max-height: 95vh;
    border-radius: 12px;
  }

  .modal-header {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    padding: 20px;
  }

  .toggle-btn {
    width: 100%;
    text-align: center;
  }
  
  .modal-close {
    top: 12px;
    right: 12px;
  }
}

@media (max-width: 480px) {
  .cases {
    padding: 50px 10px;
  }

  .case-badge {
    top: 12px;
    right: 12px;
    padding: 4px 12px;
    font-size: 0.75rem;
  }
  
  .modal-image {
    height: clamp(180px, 60vw, 300px);
  }
}

@media (hover: none) and (pointer: coarse) {
  .case-card {
    -webkit-tap-highlight-color: transparent;
  }
  
  .toggle-btn, .modal-close {
    min-height: 44px;
  }
}
</style>