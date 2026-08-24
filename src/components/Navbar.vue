<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const navItems = [
  { id: 'home', label: '首页' },
  { id: 'services', label: '服务项目' },
  { id: 'colors', label: '色卡展示' },
  { id: 'cases', label: '案例展示' },
  { id: 'testimonials', label: '客户评价' },
  { id: 'contact', label: '联系我们' }
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
}

.logo-icon {
  width: 32px;
  height: 32px;
  color: #3498db;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
}

.nav-link {
  padding: 10px 16px;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover {
  background: #3498db;
  color: white;
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 5px;
}

.toggle-bar {
  width: 25px;
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

@media (max-width: 768px) {
  .navbar-toggle {
    display: flex;
  }

  .navbar-menu {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
  }

  .navbar-menu.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-link {
    display: block;
    padding: 12px 16px;
  }
}
</style>