<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const quickLinks = [
  { label: '首页', id: 'home' },
  { label: '服务项目', id: 'services' },
  { label: '色卡展示', id: 'colors' },
  { label: '案例展示', id: 'cases' },
  { label: '客户评价', id: 'testimonials' },
  { label: '联系我们', id: 'contact' }
]

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
            <span class="logo-text">焕新墙面</span>
          </div>
          <p class="footer-description">专业旧墙翻新服务，让您的家焕然一新</p>
          <p class="footer-copyright">© 2024 焕新墙面. All rights reserved.</p>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">快速链接</h4>
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.id">
              <a @click="scrollToSection(link.id)" class="footer-link">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">服务项目</h4>
          <ul class="footer-links">
            <li><a class="footer-link">墙面刷漆</a></li>
            <li><a class="footer-link">墙面修补</a></li>
            <li><a class="footer-link">旧墙翻新</a></li>
            <li><a class="footer-link">艺术涂料</a></li>
            <li><a class="footer-link">防水处理</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">联系我们</h4>
          <div class="footer-contact">
            <p>📞 400-888-8888</p>
            <p>📧 service@huanxin.com</p>
            <p>📍 北京市朝阳区xxx路xxx号</p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <button class="back-to-top" @click="scrollToTop">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
          回到顶部
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  padding: clamp(40px, 8vw, 60px) 20px clamp(20px, 4vw, 30px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: clamp(24px, 4vw, 40px);
  margin-bottom: clamp(30px, 5vw, 40px);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(1.1rem, 2vw, 24px);
  font-weight: 700;
  margin-bottom: 16px;
}

.logo-icon {
  width: clamp(24px, 4vw, 32px);
  height: clamp(24px, 4vw, 32px);
}

.footer-description {
  font-size: clamp(0.75rem, 1.2vw, 14px);
  color: #bdc3c7;
  line-height: 1.6;
  margin: 0 0 16px;
}

.footer-copyright {
  font-size: clamp(0.75rem, 1.2vw, 14px);
  color: #95a5a6;
  margin: 0;
}

.footer-title {
  font-size: clamp(0.9rem, 1.5vw, 18px);
  font-weight: 600;
  margin: 0 0 clamp(16px, 3vw, 20px);
  color: white;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: clamp(10px, 2vw, 12px);
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: clamp(0.75rem, 1.2vw, 14px);
}

.footer-link:hover {
  color: white;
}

.footer-contact p {
  font-size: clamp(0.75rem, 1.2vw, 14px);
  color: #bdc3c7;
  margin: 12px 0;
  line-height: 1.6;
  word-break: break-all;
}

.footer-bottom {
  border-top: 1px solid #34495e;
  padding-top: clamp(20px, 4vw, 30px);
  text-align: center;
}

.back-to-top {
  background: #3498db;
  color: white;
  border: none;
  padding: clamp(10px, 2vw, 12px) clamp(20px, 3vw, 24px);
  border-radius: 8px;
  cursor: pointer;
  font-size: clamp(0.875rem, 1.5vw, 16px);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  background: #2980b9;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 12px 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-bottom {
    padding-top: 20px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 30px 10px 16px;
  }
}
</style>