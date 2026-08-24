<script setup>
import { ref, computed } from 'vue'

const colors = [
  { id: 1, name: '珍珠白', hex: '#F5F5F5', category: '浅色系' },
  { id: 2, name: '象牙白', hex: '#FFFFF0', category: '浅色系' },
  { id: 3, name: '米色', hex: '#F5E6D3', category: '浅色系' },
  { id: 4, name: '浅灰', hex: '#D3D3D3', category: '浅色系' },
  { id: 5, name: '奶咖色', hex: '#E8D5C4', category: '浅色系' },
  { id: 6, name: '天蓝色', hex: '#87CEEB', category: '冷色系' },
  { id: 7, name: '薄荷绿', hex: '#98FF98', category: '冷色系' },
  { id: 8, name: '淡紫色', hex: '#E6E6FA', category: '冷色系' },
  { id: 9, name: '海蓝色', hex: '#4682B4', category: '冷色系' },
  { id: 10, name: '湖绿色', hex: '#2E8B57', category: '冷色系' },
  { id: 11, name: '珊瑚粉', hex: '#F88379', category: '暖色系' },
  { id: 12, name: '鹅黄色', hex: '#FFF44F', category: '暖色系' },
  { id: 13, name: '橙色', hex: '#FFA500', category: '暖色系' },
  { id: 14, name: '砖红色', hex: '#CB4154', category: '暖色系' },
  { id: 15, name: '驼色', hex: '#C19A6B', category: '暖色系' },
  { id: 16, name: '深灰', hex: '#696969', category: '深色系' },
  { id: 17, name: '藏青', hex: '#000080', category: '深色系' },
  { id: 18, name: '墨绿', hex: '#013220', category: '深色系' },
  { id: 19, name: '咖啡色', hex: '#6F4E37', category: '深色系' },
  { id: 20, name: '炭黑色', hex: '#36454F', category: '深色系' }
]

const categories = ['全部', '浅色系', '冷色系', '暖色系', '深色系']
const selectedCategory = ref('全部')
const selectedColor = ref(null)

const filteredColors = computed(() => {
  if (selectedCategory.value === '全部') {
    return colors
  }
  return colors.filter(c => c.category === selectedCategory.value)
})

const selectColor = (color) => {
  selectedColor.value = color
}
</script>

<template>
  <section id="colors" class="color-cards">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">色卡展示</h2>
        <p class="section-subtitle">丰富的色彩选择，满足您的个性化需求</p>
      </div>

      <div class="category-filter">
        <button
          v-for="category in categories"
          :key="category"
          class="filter-btn"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="colors-grid">
        <div
          v-for="color in filteredColors"
          :key="color.id"
          class="color-card"
          :class="{ selected: selectedColor?.id === color.id }"
          @click="selectColor(color)"
        >
          <div class="color-swatch" :style="{ backgroundColor: color.hex }"></div>
          <div class="color-info">
            <h4 class="color-name">{{ color.name }}</h4>
            <p class="color-hex">{{ color.hex }}</p>
            <span class="color-category">{{ color.category }}</span>
          </div>
        </div>
      </div>

      <div v-if="selectedColor" class="color-preview">
        <h3>当前选择</h3>
        <div class="preview-content">
          <div class="preview-swatch" :style="{ backgroundColor: selectedColor.hex }"></div>
          <div class="preview-info">
            <p><strong>颜色名称：</strong>{{ selectedColor.name }}</p>
            <p><strong>色值：</strong>{{ selectedColor.hex }}</p>
            <p><strong>色系：</strong>{{ selectedColor.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.color-cards {
  padding: 100px 20px;
  background: white;
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

.category-filter {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 24px;
  border: 2px solid #3498db;
  background: white;
  color: #3498db;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: #3498db;
  color: white;
}

.colors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.color-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 3px solid transparent;
}

.color-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.color-card.selected {
  border-color: #3498db;
  box-shadow: 0 8px 25px rgba(52, 152, 219, 0.3);
}

.color-swatch {
  width: 100%;
  height: 120px;
}

.color-info {
  padding: 12px;
  text-align: center;
}

.color-name {
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 4px;
}

.color-hex {
  font-size: 14px;
  color: #666;
  margin: 0 0 8px;
  font-family: monospace;
}

.color-category {
  display: inline-block;
  padding: 4px 12px;
  background: #f0f0f0;
  border-radius: 12px;
  font-size: 12px;
  color: #666;
}

.color-preview {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 16px;
  margin-top: 40px;
}

.color-preview h3 {
  font-size: 24px;
  color: #2c3e50;
  margin: 0 0 20px;
  text-align: center;
}

.preview-content {
  display: flex;
  gap: 30px;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.preview-swatch {
  width: 150px;
  height: 150px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.preview-info {
  flex: 1;
}

.preview-info p {
  font-size: 16px;
  color: #2c3e50;
  margin: 12px 0;
}

.preview-info strong {
  color: #3498db;
}

@media (max-width: 1024px) {
  .color-cards {
    padding: 80px 20px;
  }

  .section-title {
    font-size: 38px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .colors-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .color-cards {
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

  .category-filter {
    gap: 8px;
    margin-bottom: 30px;
  }

  .filter-btn {
    padding: 8px 18px;
    font-size: 14px;
  }

  .colors-grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 12px;
  }

  .color-swatch {
    height: 90px;
  }

  .color-info {
    padding: 10px;
  }

  .color-name {
    font-size: 14px;
  }

  .color-hex {
    font-size: 12px;
  }

  .color-category {
    font-size: 11px;
    padding: 3px 10px;
  }

  .color-preview {
    padding: 20px;
    margin-top: 30px;
  }

  .color-preview h3 {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .preview-content {
    flex-direction: column;
    gap: 20px;
  }

  .preview-swatch {
    width: 100%;
    height: 150px;
  }

  .preview-info p {
    font-size: 14px;
    margin: 10px 0;
  }
}

@media (max-width: 480px) {
  .color-cards {
    padding: 50px 12px;
  }

  .section-title {
    font-size: 24px;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .category-filter {
    gap: 6px;
  }

  .filter-btn {
    padding: 6px 14px;
    font-size: 13px;
  }

  .colors-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
  }

  .color-swatch {
    height: 80px;
  }

  .color-info {
    padding: 8px;
  }

  .color-name {
    font-size: 13px;
  }

  .color-hex {
    font-size: 11px;
  }

  .color-category {
    font-size: 10px;
  }

  .color-preview {
    padding: 16px;
  }

  .color-preview h3 {
    font-size: 18px;
  }

  .preview-swatch {
    height: 120px;
  }
}
</style>