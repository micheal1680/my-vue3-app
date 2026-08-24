<script setup>
const testimonials = [
  {
    id: 1,
    name: '张先生',
    avatar: '👨',
    rating: 5,
    text: '师傅们非常专业，施工速度快，效果超出预期！墙面处理得很平整，颜色也很均匀。强烈推荐！',
    project: '客厅翻新',
    date: '2024-03-15'
  },
  {
    id: 2,
    name: '李女士',
    avatar: '👩',
    rating: 5,
    text: '从咨询到完工，服务都很到位。师傅们很细心，把家具都保护得很好，完工后还帮忙清理了现场。',
    project: '卧室改造',
    date: '2024-02-20'
  },
  {
    id: 3,
    name: '王先生',
    avatar: '👨‍💼',
    rating: 5,
    text: '价格公道，质量好。用的环保材料，施工完没有异味，当天就能入住。非常满意！',
    project: '全屋翻新',
    date: '2024-01-10'
  },
  {
    id: 4,
    name: '赵女士',
    avatar: '👩‍💼',
    rating: 5,
    text: '第二次找他们家了，质量一如既往的好。师傅手艺精湛，态度也很好。',
    project: '厨房翻新',
    date: '2023-12-05'
  },
  {
    id: 5,
    name: '刘先生',
    avatar: '👨‍🔧',
    rating: 5,
    text: '办公室翻新找的公司，施工期间不影响正常办公，效率很高，效果也很好。',
    project: '办公室改造',
    date: '2023-11-18'
  },
  {
    id: 6,
    name: '陈女士',
    avatar: '👩‍🦰',
    rating: 5,
    text: '儿童房用的环保漆，师傅施工很仔细，边角处理得很完美。孩子很喜欢新房间！',
    project: '儿童房',
    date: '2023-10-25'
  }
]

const renderStars = (rating) => {
  return '⭐'.repeat(rating)
}
</script>

<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">客户评价</h2>
        <p class="section-subtitle">听听客户怎么说</p>
      </div>

      <div class="testimonials-grid">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
          <div class="testimonial-header">
            <div class="avatar">{{ testimonial.avatar }}</div>
            <div class="user-info">
              <h4 class="user-name">{{ testimonial.name }}</h4>
              <p class="user-project">{{ testimonial.project }}</p>
            </div>
          </div>
          <div class="rating">{{ renderStars(testimonial.rating) }}</div>
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <p class="testimonial-date">{{ testimonial.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.testimonial-card {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.avatar {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 4px;
}

.user-project {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.rating {
  font-size: 20px;
  margin-bottom: 16px;
}

.testimonial-text {
  font-size: 16px;
  color: #2c3e50;
  line-height: 1.6;
  margin: 0 0 12px;
}

.testimonial-date {
  font-size: 14px;
  color: #999;
  margin: 0;
}

@media (max-width: 1024px) {
  .testimonials {
    padding: 80px 20px;
  }

  .section-title {
    font-size: 38px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .testimonials-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .testimonials {
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

  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .testimonial-card {
    padding: 24px;
  }

  .avatar {
    width: 50px;
    height: 50px;
    font-size: 28px;
  }

  .user-name {
    font-size: 16px;
  }

  .user-project {
    font-size: 13px;
  }

  .rating {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .testimonial-text {
    font-size: 15px;
    margin-bottom: 10px;
  }

  .testimonial-date {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .testimonials {
    padding: 50px 12px;
  }

  .section-title {
    font-size: 24px;
  }

  .section-subtitle {
    font-size: 14px;
  }

  .testimonial-card {
    padding: 20px;
  }

  .testimonial-header {
    gap: 12px;
    margin-bottom: 12px;
  }

  .avatar {
    width: 44px;
    height: 44px;
    font-size: 24px;
  }

  .user-name {
    font-size: 15px;
  }

  .user-project {
    font-size: 12px;
  }

  .rating {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .testimonial-text {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .testimonial-date {
    font-size: 12px;
  }
}
</style>