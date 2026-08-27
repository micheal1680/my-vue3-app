<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const categories = [
  { id: 'all', label: '全部', icon: '📸' },
  { id: 'kitchen-bath', label: '厨卫改造', icon: '🚿' },
  { id: 'cabinet-custom', label: '柜子定制', icon: '🗄️' },
  { id: 'wall-coat', label: '墙衣施工', icon: '🎨' },
  { id: 'cabinet-hanging', label: '橱柜吊柜', icon: '🏠' }
]

const mediaTypes = [
  { id: 'all', label: '全部' },
  { id: 'image', label: '图片' },
  { id: 'video', label: '视频' }
]

const galleryItems = [
  {
    id: 1,
    category: 'kitchen-bath',
    type: 'image',
    title: '现代简约厨房改造',
    description: '整体橱柜+防水瓷砖+集成吊顶',
    thumbnail: 'https://picsum.photos/400/300?random=1',
    full: 'https://picsum.photos/1200/800?random=1',
    location: '朝阳区',
    date: '2024-01'
  },
  {
    id: 2,
    category: 'kitchen-bath',
    type: 'image',
    title: '卫生间干湿分离改造',
    description: '防水处理+淋浴房+浴室柜安装',
    thumbnail: 'https://picsum.photos/400/300?random=2',
    full: 'https://picsum.photos/1200/800?random=2',
    location: '海淀区',
    date: '2024-01'
  },
  {
    id: 3,
    category: 'kitchen-bath',
    type: 'video',
    title: '厨房改造全过程',
    description: '从拆除到完工，全程记录',
    thumbnail: 'https://picsum.photos/400/300?random=3',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    location: '西城区',
    date: '2024-02'
  },
  {
    id: 4,
    category: 'cabinet-custom',
    type: 'image',
    title: '全屋定制衣柜',
    description: 'E0级板材+个性化设计',
    thumbnail: 'https://picsum.photos/400/300?random=4',
    full: 'https://picsum.photos/1200/800?random=4',
    location: '东城区',
    date: '2024-02'
  },
  {
    id: 5,
    category: 'cabinet-custom',
    type: 'image',
    title: '书房书柜定制',
    description: '开放式+封闭式组合设计',
    thumbnail: 'https://picsum.photos/400/300?random=5',
    full: 'https://picsum.photos/1200/800?random=5',
    location: '丰台区',
    date: '2024-03'
  },
  {
    id: 6,
    category: 'cabinet-custom',
    type: 'video',
    title: '柜子定制安装过程',
    description: '专业团队现场安装实录',
    thumbnail: 'https://picsum.photos/400/300?random=6',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    location: '顺义区',
    date: '2024-03'
  },
  {
    id: 7,
    category: 'wall-coat',
    type: 'image',
    title: '客厅墙衣施工',
    description: '环保材料，质感细腻',
    thumbnail: 'https://picsum.photos/400/300?random=7',
    full: 'https://picsum.photos/1200/800?random=7',
    location: '朝阳区',
    date: '2024-03'
  },
  {
    id: 8,
    category: 'wall-coat',
    type: 'image',
    title: '卧室墙衣效果',
    description: '温馨色调，舒适质感',
    thumbnail: 'https://picsum.photos/400/300?random=8',
    full: 'https://picsum.photos/1200/800?random=8',
    location: '海淀区',
    date: '2024-04'
  },
  {
    id: 9,
    category: 'wall-coat',
    type: 'video',
    title: '墙衣施工全过程',
    description: '从基层处理到最终效果',
    thumbnail: 'https://picsum.photos/400/300?random=9',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    location: '西城区',
    date: '2024-04'
  },
  {
    id: 10,
    category: 'cabinet-hanging',
    type: 'image',
    title: '厨房橱柜定制',
    description: 'L型布局，充分利用空间',
    thumbnail: 'https://picsum.photos/400/300?random=10',
    full: 'https://picsum.photos/1200/800?random=10',
    location: '东城区',
    date: '2024-04'
  },
  {
    id: 11,
    category: 'cabinet-hanging',
    type: 'image',
    title: '吊柜安装效果',
    description: '收纳空间最大化',
    thumbnail: 'https://picsum.photos/400/300?random=11',
    full: 'https://picsum.photos/1200/800?random=11',
    location: '丰台区',
    date: '2024-05'
  },
  {
    id: 12,
    category: 'cabinet-hanging',
    type: 'video',
    title: '橱柜吊柜安装实录',
    description: '专业师傅现场施工',
    thumbnail: 'https://picsum.photos/400/300?random=12',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    location: '顺义区',
    date: '2024-05'
  }
]

const selectedCategory = ref('all')
const selectedMediaType = ref('all')
const selectedItem = ref(null)
const isPlayingVideo = ref(false)
const currentImageIndex = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)

const filteredItems = computed(() => {
  let items = galleryItems
  
  if (selectedCategory.value !== 'all') {
    items = items.filter(item => item.category === selectedCategory.value)
  }
  
  if (selectedMediaType.value !== 'all') {
    items = items.filter(item => item.type === selectedMediaType.value)
  }
  
  return items
})

const openItem = (item, index) => {
  selectedItem.value = item
  currentImageIndex.value = index
  isPlayingVideo.value = false
}

const closeItem = () => {
  selectedItem.value = null
  isPlayingVideo.value = false
}

const playVideo = () => {
  isPlayingVideo.value = true
}

const navigateImage = (direction) => {
  const items = filteredItems.value
  if (items.length === 0) return
  
  let newIndex = currentImageIndex.value + direction
  if (newIndex < 0) newIndex = items.length - 1
  if (newIndex >= items.length) newIndex = 0
  
  currentImageIndex.value = newIndex
  selectedItem.value = items[newIndex]
  isPlayingVideo.value = false
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
    if (diff > 0) {
      navigateImage(1)
    } else {
      navigateImage(-1)
    }
  }
  
  touchStartX.value = 0
  touchEndX.value = 0
}

const handleKeyDown = (e) => {
  if (!selectedItem.value) return
  
  if (e.key === 'Escape') {
    closeItem()
  } else if (e.key === 'ArrowLeft') {
    navigateImage(-1)
  } else if (e.key === 'ArrowRight') {
    navigateImage(1)
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

defineExpose({
  selectCategory: (categoryId) => {
    selectedCategory.value = categoryId
  }
})
</script>

<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">效果画廊</h2>
        <p class="section-subtitle">真实案例，直观感受改造效果</p>
      </div>

      <div class="gallery-filters">
        <div class="filter-group">
          <label class="filter-label">分类：</label>
          <div class="filter-buttons">
            <button
              v-for="category in categories"
              :key="category.id"
              class="filter-btn"
              :class="{ active: selectedCategory === category.id }"
              @click="selectedCategory = category.id"
            >
              <span class="filter-icon">{{ category.icon }}</span>
              <span class="filter-text">{{ category.label }}</span>
            </button>
          </div>
        </div>

        <div class="filter-group">
          <label class="filter-label">类型：</label>
          <div class="filter-buttons">
            <button
              v-for="media in mediaTypes"
              :key="media.id"
              class="filter-btn type-btn"
              :class="{ active: selectedMediaType === media.id }"
              @click="selectedMediaType = media.id"
            >
              {{ media.label }}
            </button>
          </div>
        </div>
      </div>

      <div class="gallery-grid">
        <div
          v-for="(item, index) in filteredItems"
          :key="item.id"
          class="gallery-item"
          @click="openItem(item, index)"
        >
          <div class="gallery-thumbnail">
            <img :src="item.thumbnail" :alt="item.title" loading="lazy" />
            <div v-if="item.type === 'video'" class="video-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            <div class="gallery-overlay">
              <div class="overlay-content">
                <h3 class="overlay-title">{{ item.title }}</h3>
                <p class="overlay-desc">{{ item.description }}</p>
              </div>
            </div>
          </div>
          <div class="gallery-info">
            <h4 class="item-title">{{ item.title }}</h4>
            <div class="item-meta">
              <span class="item-location">📍 {{ item.location }}</span>
              <span class="item-date">{{ item.date }}</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredItems.length === 0" class="empty-state">
        <div class="empty-icon">📭</div>
        <p>暂无相关内容</p>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="selectedItem" class="lightbox" @click="closeItem" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
        <div class="lightbox-content" @click.stop>
          <button class="lightbox-close" @click="closeItem">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <button class="lightbox-nav lightbox-prev" @click="navigateImage(-1)" v-if="filteredItems.length > 1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button class="lightbox-nav lightbox-next" @click="navigateImage(1)" v-if="filteredItems.length > 1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div class="lightbox-media">
            <template v-if="selectedItem.type === 'video' && !isPlayingVideo">
              <img :src="selectedItem.thumbnail" :alt="selectedItem.title" />
              <div class="video-play-btn" @click="playVideo">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </template>
            <template v-else-if="selectedItem.type === 'video' && isPlayingVideo">
              <video :src="selectedItem.videoUrl" controls autoplay playsinline class="lightbox-video"></video>
            </template>
            <template v-else>
              <img :src="selectedItem.full" :alt="selectedItem.title" class="lightbox-image" />
            </template>
          </div>

          <div class="lightbox-info">
            <h3 class="lightbox-title">{{ selectedItem.title }}</h3>
            <p class="lightbox-desc">{{ selectedItem.description }}</p>
            <div class="lightbox-meta">
              <span>📍 {{ selectedItem.location }}</span>
              <span>{{ selectedItem.date }}</span>
              <span class="media-type-tag">{{ selectedItem.type === 'video' ? '🎥 视频' : '📷 图片' }}</span>
            </div>
          </div>

          <div class="lightbox-counter" v-if="filteredItems.length > 1">
            {{ currentImageIndex + 1 }} / {{ filteredItems.length }}
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.gallery {
  padding: clamp(60px, 10vw, 100px) 20px;
  background: white;
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

.gallery-filters {
  margin-bottom: clamp(30px, 5vw, 40px);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter-group {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.filter-label {
  font-size: clamp(0.875rem, 2vw, 16px);
  font-weight: 600;
  color: #2c3e50;
  min-width: 60px;
}

.filter-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex: 1;
}

.filter-btn {
  padding: 10px 20px;
  border: 2px solid #e0e0e0;
  background: white;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: clamp(0.8rem, 1.5vw, 14px);
  font-weight: 500;
  color: #666;
  display: flex;
  align-items: center;
  gap: 6px;
  -webkit-tap-highlight-color: transparent;
}

.filter-btn:hover {
  border-color: #3498db;
  color: #3498db;
  transform: translateY(-2px);
}

.filter-btn.active {
  background: #3498db;
  border-color: #3498db;
  color: white;
}

.filter-icon {
  font-size: 16px;
}

.type-btn {
  min-width: 60px;
  justify-content: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: clamp(20px, 3vw, 30px);
}

.gallery-item {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.gallery-thumbnail {
  position: relative;
  height: clamp(200px, 30vw, 250px);
  overflow: hidden;
}

.gallery-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-thumbnail img {
  transform: scale(1.1);
}

.video-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 20px;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.overlay-content {
  color: white;
}

.overlay-title {
  font-size: clamp(1rem, 2vw, 18px);
  font-weight: 600;
  margin: 0 0 8px;
}

.overlay-desc {
  font-size: clamp(0.75rem, 1.5vw, 14px);
  margin: 0;
  opacity: 0.9;
}

.gallery-info {
  padding: 16px;
}

.item-title {
  font-size: clamp(0.9rem, 2vw, 16px);
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: clamp(0.75rem, 1.5vw, 13px);
  color: #999;
}

.item-location {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-date {
  flex-shrink: 0;
  margin-left: 12px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #999;
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.empty-state p {
  font-size: 18px;
  margin: 0;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
}

.lightbox-content {
  position: relative;
  max-width: 1000px;
  width: 100%;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  max-height: 90vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.lightbox-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  -webkit-tap-highlight-color: transparent;
}

.lightbox-close:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;
  -webkit-tap-highlight-color: transparent;
}

.lightbox-nav:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-prev {
  left: 16px;
}

.lightbox-next {
  right: 16px;
}

.lightbox-media {
  position: relative;
  width: 100%;
  min-height: 300px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-media img {
  width: 100%;
  max-height: 60vh;
  object-fit: contain;
}

.lightbox-video {
  width: 100%;
  max-height: 60vh;
  display: block;
}

.video-play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  -webkit-tap-highlight-color: transparent;
}

.video-play-btn:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: translate(-50%, -50%) scale(1.1);
}

.lightbox-info {
  padding: clamp(20px, 4vw, 30px);
}

.lightbox-title {
  font-size: clamp(1.25rem, 3vw, 24px);
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 12px;
}

.lightbox-desc {
  font-size: clamp(0.9rem, 2vw, 16px);
  color: #666;
  margin: 0 0 16px;
  line-height: 1.6;
}

.lightbox-meta {
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: clamp(0.8rem, 1.5vw, 14px);
  color: #999;
  flex-wrap: wrap;
}

.media-type-tag {
  padding: 4px 12px;
  background: #f0f0f0;
  border-radius: 12px;
  font-weight: 500;
}

.lightbox-counter {
  position: absolute;
  bottom: 16px;
  right: 16px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 14px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

@media (max-width: 1024px) {
  .gallery {
    padding: 80px 16px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .gallery {
    padding: 60px 12px;
  }

  .section-header {
    margin-bottom: 40px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
  }

  .filter-group {
    gap: 12px;
  }

  .filter-btn {
    padding: 8px 16px;
  }

  .lightbox {
    padding: 10px;
  }

  .lightbox-content {
    border-radius: 12px;
  }

  .lightbox-nav {
    width: 40px;
    height: 40px;
  }

  .lightbox-prev {
    left: 10px;
  }

  .lightbox-next {
    right: 10px;
  }
}

@media (max-width: 480px) {
  .gallery {
    padding: 50px 10px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .filter-buttons {
    gap: 8px;
  }

  .filter-btn {
    padding: 6px 12px;
    font-size: 13px;
  }

  .filter-text {
    display: inline;
  }

  .lightbox-nav {
    width: 36px;
    height: 36px;
  }

  .video-play-btn {
    width: 60px;
    height: 60px;
  }

  .video-play-btn svg {
    width: 48px;
    height: 48px;
  }
}

@media (hover: none) and (pointer: coarse) {
  .gallery-overlay {
    opacity: 1;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, transparent 50%);
  }
  
  .gallery-item:active {
    transform: scale(0.98);
  }
}
</style>