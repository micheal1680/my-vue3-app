<script setup>
import { ref } from 'vue'
import heroImg from '../assets/hero.png'
import viteLogo from '../assets/vite.svg'
import vueLogo from '../assets/vue.svg'

const images = ref([
  {
    id: 1,
    src: heroImg,
    title: 'Hero Image',
    description: 'Vue 3 Hero Illustration'
  },
  {
    id: 2,
    src: viteLogo,
    title: 'Vite Logo',
    description: 'Vite Build Tool Logo'
  },
  {
    id: 3,
    src: vueLogo,
    title: 'Vue Logo',
    description: 'Vue.js Framework Logo'
  },
  {
    id: 4,
    src: 'https://picsum.photos/800/600?random=1',
    title: 'Nature',
    description: 'Beautiful landscape photography'
  },
  {
    id: 5,
    src: 'https://picsum.photos/800/600?random=2',
    title: 'Architecture',
    description: 'Modern architectural design'
  },
  {
    id: 6,
    src: 'https://picsum.photos/800/600?random=3',
    title: 'Technology',
    description: 'Tech and innovation'
  },
  {
    id: 7,
    src: 'https://picsum.photos/800/600?random=4',
    title: 'Art',
    description: 'Creative art piece'
  },
  {
    id: 8,
    src: 'https://picsum.photos/800/600?random=5',
    title: 'Travel',
    description: 'Travel destination'
  },
  {
    id: 9,
    src: 'https://picsum.photos/800/600?random=6',
    title: 'Food',
    description: 'Delicious cuisine'
  }
])

const selectedImage = ref(null)
const isLightboxOpen = ref(false)

const openLightbox = (image) => {
  selectedImage.value = image
  isLightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  isLightboxOpen.value = false
  selectedImage.value = null
  document.body.style.overflow = ''
}

const navigateImage = (direction) => {
  if (!selectedImage.value) return
  const currentIndex = images.value.findIndex(img => img.id === selectedImage.value.id)
  let newIndex = currentIndex + direction
  if (newIndex < 0) newIndex = images.value.length - 1
  if (newIndex >= images.value.length) newIndex = 0
  selectedImage.value = images.value[newIndex]
}

const handleKeydown = (e) => {
  if (!isLightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') navigateImage(-1)
  if (e.key === 'ArrowRight') navigateImage(1)
}
</script>

<template>
  <div class="gallery-container">
    <header class="gallery-header">
      <h1 class="gallery-title">精美图片集</h1>
      <p class="gallery-subtitle">探索我们的精选图片收藏</p>
    </header>

    <div class="gallery-grid">
      <div
        v-for="image in images"
        :key="image.id"
        class="gallery-item"
        @click="openLightbox(image)"
      >
        <div class="image-wrapper">
          <img :src="image.src" :alt="image.title" class="gallery-image" />
          <div class="image-overlay">
            <div class="overlay-content">
              <h3 class="image-title">{{ image.title }}</h3>
              <p class="image-description">{{ image.description }}</p>
              <span class="view-btn">查看大图</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="isLightboxOpen" class="lightbox" @click="closeLightbox">
          <button class="lightbox-close" @click.stop="closeLightbox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <button class="lightbox-nav lightbox-prev" @click.stop="navigateImage(-1)">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          
          <button class="lightbox-nav lightbox-next" @click.stop="navigateImage(1)">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          <div class="lightbox-content" @click.stop>
            <img :src="selectedImage?.src" :alt="selectedImage?.title" class="lightbox-image" />
            <div class="lightbox-info">
              <h2 class="lightbox-title">{{ selectedImage?.title }}</h2>
              <p class="lightbox-description">{{ selectedImage?.description }}</p>
              <p class="lightbox-counter">
                {{ images.findIndex(img => img.id === selectedImage?.id) + 1 }} / {{ images.length }}
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.gallery-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
}

.gallery-header {
  text-align: center;
  margin-bottom: 60px;
}

.gallery-title {
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gallery-subtitle {
  font-size: 18px;
  color: #666;
  margin: 0;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #f5f5f5;
  aspect-ratio: 4/3;
}

.gallery-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 24px;
}

.gallery-item:hover .image-overlay {
  opacity: 1;
}

.overlay-content {
  color: white;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.gallery-item:hover .overlay-content {
  transform: translateY(0);
}

.image-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 8px;
}

.image-description {
  font-size: 14px;
  margin: 0 0 12px;
  opacity: 0.9;
}

.view-btn {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  font-size: 13px;
  backdrop-filter: blur(10px);
  transition: all 0.2s ease;
}

.view-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
}

.lightbox-info {
  text-align: center;
  color: white;
  margin-top: 24px;
}

.lightbox-title {
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 8px;
}

.lightbox-description {
  font-size: 16px;
  opacity: 0.8;
  margin: 0 0 12px;
}

.lightbox-counter {
  font-size: 14px;
  opacity: 0.6;
  margin: 0;
}

.lightbox-close,
.lightbox-nav {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.lightbox-close:hover,
.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.lightbox-close {
  top: 24px;
  right: 24px;
  z-index: 1001;
}

.lightbox-nav {
  top: 50%;
  transform: translateY(-50%);
}

.lightbox-nav:hover {
  transform: translateY(-50%) scale(1.1);
}

.lightbox-prev {
  left: 24px;
}

.lightbox-next {
  right: 24px;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .gallery-container {
    padding: 40px 16px;
  }

  .gallery-title {
    font-size: 36px;
  }

  .gallery-subtitle {
    font-size: 16px;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }

  .lightbox-nav {
    display: none;
  }

  .lightbox-close {
    top: 16px;
    right: 16px;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>