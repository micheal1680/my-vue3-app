<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import Gallery from './components/Gallery.vue'
import Cases from './components/Cases.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const galleryRef = ref(null)

const handleSelectCategory = (categoryId) => {
  if (galleryRef.value) {
    galleryRef.value.selectCategory(categoryId)
    setTimeout(() => {
      const gallerySection = document.getElementById('gallery')
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
}
</script>

<template>
  <div class="wall-renovation-app">
    <Navbar />
    <Hero />
    <Services @selectCategory="handleSelectCategory" />
    <Gallery ref="galleryRef" />
    <Cases />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped>
.wall-renovation-app {
  width: 100%;
  min-height: 100vh;
}
</style>