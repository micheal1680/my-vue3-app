<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import ColorCards from './components/ColorCards.vue'
import Cases from './components/Cases.vue'
import Testimonials from './components/Testimonials.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="wall-renovation-app">
    <Navbar />
    <Hero />
    <Services />
    <ColorCards />
    <Cases />
    <Testimonials />
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