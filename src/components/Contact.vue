<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  phone: '',
  email: '',
  address: '',
  service: '',
  message: ''
})

const services = [
  '墙面刷漆',
  '墙面修补',
  '旧墙翻新',
  '艺术涂料',
  '防水处理',
  '定制设计'
]

const submitForm = () => {
  if (!formData.value.name || !formData.value.phone) {
    alert('请填写姓名和电话')
    return
  }
  alert('提交成功！我们会尽快与您联系')
  formData.value = {
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: ''
  }
}

const contactInfo = [
  {
    icon: '📞',
    title: '电话',
    content: '400-888-8888',
    subtext: '周一至周日 8:00-20:00'
  },
  {
    icon: '📧',
    title: '邮箱',
    content: 'service@huanxin.com',
    subtext: '24小时内回复'
  },
  {
    icon: '📍',
    title: '地址',
    content: '北京市朝阳区xxx路xxx号',
    subtext: '欢迎到店咨询'
  },
  {
    icon: '💬',
    title: '微信',
    content: 'huanxin2024',
    subtext: '扫码添加客服'
  }
]
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">联系我们</h2>
        <p class="section-subtitle">免费咨询，预约上门测量</p>
      </div>

      <div class="contact-content">
        <div class="contact-form-wrapper">
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label class="form-label">姓名 *</label>
              <input
                v-model="formData.name"
                type="text"
                class="form-input"
                placeholder="请输入您的姓名"
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">电话 *</label>
              <input
                v-model="formData.phone"
                type="tel"
                class="form-input"
                placeholder="请输入您的联系电话"
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label">邮箱</label>
              <input
                v-model="formData.email"
                type="email"
                class="form-input"
                placeholder="请输入您的邮箱（选填）"
              />
            </div>

            <div class="form-group">
              <label class="form-label">地址</label>
              <input
                v-model="formData.address"
                type="text"
                class="form-input"
                placeholder="请输入您的地址"
              />
            </div>

            <div class="form-group">
              <label class="form-label">服务项目</label>
              <select v-model="formData.service" class="form-input">
                <option value="">请选择服务项目</option>
                <option v-for="service in services" :key="service" :value="service">
                  {{ service }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">留言</label>
              <textarea
                v-model="formData.message"
                class="form-textarea"
                placeholder="请描述您的需求"
                rows="4"
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">提交预约</button>
          </form>
        </div>

        <div class="contact-info-wrapper">
          <div class="contact-info">
            <h3 class="info-title">联系方式</h3>
            <div v-for="info in contactInfo" :key="info.title" class="info-item">
              <div class="info-icon">{{ info.icon }}</div>
              <div class="info-content">
                <h4 class="info-label">{{ info.title }}</h4>
                <p class="info-text">{{ info.content }}</p>
                <p class="info-subtext">{{ info.subtext }}</p>
              </div>
            </div>

            <div class="working-hours">
              <h4>营业时间</h4>
              <p>周一至周日：8:00 - 20:00</p>
              <p>全年无休，欢迎预约</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: clamp(60px, 10vw, 100px) 20px;
  background: #f8f9fa;
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

.contact-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: clamp(24px, 4vw, 40px);
}

.contact-form-wrapper {
  background: white;
  padding: clamp(24px, 4vw, 40px);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: clamp(16px, 3vw, 24px);
}

.form-label {
  display: block;
  font-size: clamp(0.875rem, 1.5vw, 16px);
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: clamp(10px, 2vw, 12px) clamp(12px, 2vw, 16px);
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: clamp(0.875rem, 1.5vw, 16px);
  transition: all 0.3s ease;
  box-sizing: border-box;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.form-textarea {
  resize: vertical;
  font-family: inherit;
  min-height: 100px;
}

.submit-btn {
  width: 100%;
  padding: clamp(12px, 2vw, 16px);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: clamp(0.9rem, 2vw, 18px);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.contact-info-wrapper {
  background: white;
  padding: clamp(24px, 4vw, 40px);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.info-title {
  font-size: clamp(1.1rem, 2vw, 24px);
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 clamp(20px, 3vw, 30px);
}

.info-item {
  display: flex;
  gap: clamp(12px, 2vw, 16px);
  margin-bottom: clamp(16px, 3vw, 24px);
  padding-bottom: clamp(16px, 3vw, 24px);
  border-bottom: 1px solid #eee;
}

.info-item:last-of-type {
  border-bottom: none;
}

.info-icon {
  font-size: clamp(24px, 4vw, 32px);
  flex-shrink: 0;
}

.info-content {
  flex: 1;
}

.info-label {
  font-size: clamp(0.875rem, 1.5vw, 16px);
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 4px;
}

.info-text {
  font-size: clamp(0.875rem, 1.5vw, 16px);
  color: #3498db;
  margin: 0 0 4px;
  font-weight: 500;
  word-break: break-all;
}

.info-subtext {
  font-size: clamp(0.75rem, 1.2vw, 14px);
  color: #999;
  margin: 0;
}

.working-hours {
  background: #f8f9fa;
  padding: clamp(16px, 3vw, 20px);
  border-radius: 12px;
  margin-top: clamp(20px, 3vw, 30px);
}

.working-hours h4 {
  font-size: clamp(0.9rem, 1.5vw, 18px);
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 12px;
}

.working-hours p {
  font-size: clamp(0.75rem, 1.2vw, 14px);
  color: #666;
  margin: 8px 0;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .contact {
    padding: 80px 16px;
  }

  .contact-content {
    grid-template-columns: 1.2fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 12px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 50px 10px;
  }
}
</style>