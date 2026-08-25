<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const navItems = [
  { id: 'home', label: '首页' },
  { id: 'services', label: '服务项目' },
  { id: 'colors', label: '色卡展示' },
  { id: 'cases', label: '案例展示' },
  { id: 'contact', label: '联系方式' }
]

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMenuOpen.value = false
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo" @click="scrollToSection('home')">
        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
        <span class="logo-text">焕新墙面</span>
      </div>

      <div class="navbar-toggle" @click="toggleMenu">
        <span class="toggle-bar" :class="{ open: isMenuOpen }"></span>
        <span class="toggle-bar" :class="{ open: isMenuOpen }"></span>
        <span class="toggle-bar" :class="{ open: isMenuOpen }"></span>
      </div>

      <ul class="navbar-menu" :class="{ open: isMenuOpen }">
        <li v-for="item in navItems" :key="item.id">
          <a @click="scrollToSection(item.id)" class="nav-link">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  height: var(--navbar-height);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: clamp(18px, 2.5vw, 24px);
  font-weight: 700;
  color: #2c3e50;
  flex-shrink: 0;
  -webkit-user-select: none;
  user-select: none;
}

.logo-icon {
  width: clamp(24px, 3vw, 32px);
  height: clamp(24px, 3vw, 32px);
  color: #3498db;
  flex-shrink: 0;
}

.logo-text {
  white-space: nowrap;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: clamp(4px, 1vw, 8px);
}

.nav-link {
  padding: clamp(8px, 1.5vw, 10px) clamp(12px, 2vw, 16px);
  color: #2c3e50;
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  white-space: nowrap;
  font-size: clamp(13px, 1.5vw, 15px);
}

.nav-link:hover {
  background: #3498db;
  color: white;
}

.nav-link:active {
  transform: scale(0.95);
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
  min-width: 44px;
  min-height: 44px;
  border-radius: 6px;
  transition: background 0.3s ease;
}

.navbar-toggle:hover {
  background: rgba(0, 0, 0, 0.05);
}

.toggle-bar {
  width: 24px;
  height: 3px;
  background: #2c3e50;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.toggle-bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.toggle-bar.open:nth-child(2) {
  opacity: 0;
}

.toggle-bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

@media (max-width: 1024px) {
  .navbar-container {
    padding: 0 16px;
  }
  
  .navbar-menu {
    gap: 4px;
  }
}

@media (max-width: 900px) {
  .navbar-toggle {
    display: flex;
  }

  .navbar-menu {
    position: fixed;
    top: var(--navbar-height);
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.98);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    overflow-y: auto;
    gap: 0;
    list-style: none;
    margin: 0;
    z-index: 999;
  }

  .navbar-menu li {
    width: 100%;
  }

  .navbar-menu.open {
    transform: translateX(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-link {
    display: flex;
    align-items: center;
    padding: 16px;
    font-size: 16px;
    border-bottom: 1px solid #f0f0f0;
    min-height: 44px;
    width: 100%;
    color: #2c3e50;
    text-decoration: none;
    cursor: pointer;
    font-weight: 500;
  }
  
  .nav-link:last-child {
    border-bottom: none;
  }
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 12px;
  }
}

@media (max-width: 480px) {
  .navbar-container {
    padding: 0 10px;
  }
  
  .nav-link {
    padding: 14px;
    font-size: 15px;
  }
}

@media (max-width: 360px) {
  .navbar-logo {
    font-size: 16px;
  }
}

@media (hover: none) and (pointer: coarse) {
  .nav-link {
    min-height: 44px;
  }
}
</style>