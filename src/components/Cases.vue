<script setup>
import { ref } from 'vue'

const cases = [
  {
    id: 1,
    title: '客厅翻新',
    before: 'https://picsum.photos/600/400?random=10',
    after: 'https://picsum.photos/600/400?random=20',
    description: '老旧墙面重新粉刷，采用温馨的米色调',
    location: '朝阳区'
  },
  {
    id: 2,
    title: '卧室改造',
    before: 'https://picsum.photos/600/400?random=11',
    after: 'https://picsum.photos/600/400?random=21',
    description: '卧室墙面升级为淡雅的浅蓝色',
    location: '海淀区'
  },
  {
    id: 3,
    title: '厨房翻新',
    before: 'https://picsum.photos/600/400?random=12',
    after: 'https://picsum.photos/600/400?random=22',
    description: '厨房墙面防水处理+瓷砖翻新',
    location: '西城区'
  },
  {
    id: 4,
    title: '办公室改造',
    before: 'https://picsum.photos/600/400?random=13',
    after: 'https://picsum.photos/600/400?random=23',
    description: '办公空间整体墙面焕新',
    location: '东城区'
  },
  {
    id: 5,
    title: '儿童房',
    before: 'https://picsum.photos/600/400?random=14',
    after: 'https://picsum.photos/600/400?random=24',
    description: '采用环保涂料，打造安全温馨的儿童房',
    location: '丰台区'
  },
  {
    id: 6,
    title: '别墅外墙',
    before: 'https://picsum.photos/600/400?random=15',
    after: 'https://picsum.photos/600/400?random=25',
    description: '别墅外墙翻新，提升整体美观度',
    location: '顺义区'
  }
]

const selectedCase = ref(null)
const showBefore = ref(true)

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
            <img :src="caseItem.after" :alt="caseItem.title" />
            <div class="case-badge">翻新后</div>
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
      <div v-if="selectedCase" class="case-modal" @click="closeCase">
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
              {{ showBefore ? '查看翻新后' : '查看翻新前' }}
            </button>
          </div>

          <div class="modal-image">
            <img :src="showBefore ? selectedCase.before : selectedCase.after" :alt="selectedCase.title" />
            <div class="image-label">{{ showBefore ? '翻新前' : '翻新后' }}</div>
          </div>

          <div class="modal-info">
            <p>{{ selectedCase.description }}</p>
            <p class="modal-location">📍 {{ selectedCase.location }}</p>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.cases {
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

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
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
  height: 250px;
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
  font-size: 14px;
  font-weight: 600;
}

.case-info {
  padding: 24px;
}

.case-title {
  font-size: 22px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 12px;
}

.case-description {
  font-size: 16px;
  color: #666;
  margin: 0 0 12px;
  line-height: 1.6;
}

.case-location {
  font-size: 14px;
  color: #999;
  margin: 0;
}

.case-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
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
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.8);
}

.modal-header {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.modal-header h2 {
  font-size: 28px;
  color: #2c3e50;
  margin: 0;
}

.toggle-btn {
  padding: 10px 20px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  background: #2980b9;
}

.modal-image {
  position: relative;
  height: 400px;
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
  font-size: 16px;
  font-weight: 600;
}

.modal-info {
  padding: 24px;
}

.modal-info p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 12px;
}

.modal-location {
  color: #999;
  font-size: 14px;
}

@media (max-width: 1024px) {
  .cases {
    padding: 80px 20px;
  }

  .section-title {
    font-size: 38px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .cases-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }

  .case-image {
    height: 220px;
  }

  .modal-content {
    max-width: 700px;
  }

  .modal-image {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .cases {
    padding: 60px 16px;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 28px;
  }

  .section-subtitle {
    font-size: 15px;
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .case-image {
    height: 200px;
  }

  .case-info {
    padding: 20px;
  }

  .case-title {
    font-size: 20px;
    margin-bottom: 10px;
  }

  .case-description {
    font-size: 15px;
    margin-bottom: 10px;
  }

  .case-location {
    font-size: 13px;
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

  .modal-header h2 {
    font-size: 22px;
  }

  .toggle-btn {
    padding: 8px 16px;
    font-size: 14px;
  }

  .modal-image {
    height: 250px;
  }

  .image-label {
    padding: 6px 16px;
    font-size: 14px;
  }

  .modal-info {
    padding: 20px;
  }

  .modal-info p {
    font-size: 15px;
  }

  .modal-location {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .cases {
    padding: 50px 12px;
  }

  .section-title {
    font-size: 24px;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .case-image {
    height: 180px;
  }

  .case-info {
    padding: 16px;
  }

  .case-title {
    font-size: 18px;
  }

  .case-description {
    font-size: 14px;
  }

  .modal-header h2 {
    font-size: 20px;
  }

  .modal-image {
    height: 200px;
  }

  .modal-close {
    width: 36px;
    height: 36px;
    top: 12px;
    right: 12px;
  }
}
</style>