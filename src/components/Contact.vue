<script setup>
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
    icon: '💬',
    title: '微信',
    content: 'huanxin2024',
    subtext: '扫码添加客服'
  },
  {
    icon: '📍',
    title: '地址',
    content: '北京市朝阳区xxx路xxx号',
    subtext: '欢迎到店咨询'
  }
]
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">联系方式</h2>
        <p class="section-subtitle">欢迎随时联系我们</p>
      </div>

      <div class="contact-content">
        <div class="contact-info-wrapper">
          <div class="contact-info">
            <div v-for="info in contactInfo" :key="info.title" class="info-item">
              <div class="info-icon">{{ info.icon }}</div>
              <div class="info-content">
                <h4 class="info-label">{{ info.title }}</h4>
                <p class="info-text">{{ info.content }}</p>
                <p class="info-subtext">{{ info.subtext }}</p>
              </div>
            </div>

            <div class="wechat-qr-section">
              <h4>微信二维码</h4>
              <div class="wechat-qr-container">
                <div class="wechat-qr-placeholder">
                  <div class="qr-icon">📱</div>
                  <p>微信扫码添加客服</p>
                  <div class="qr-code-box">
                    <svg viewBox="0 0 200 200" class="qr-code-svg">
                      <rect width="200" height="200" fill="white"/>
                      <rect x="20" y="20" width="50" height="50" fill="#2c3e50"/>
                      <rect x="25" y="25" width="40" height="40" fill="white"/>
                      <rect x="30" y="30" width="30" height="30" fill="#2c3e50"/>
                      <rect x="130" y="20" width="50" height="50" fill="#2c3e50"/>
                      <rect x="135" y="25" width="40" height="40" fill="white"/>
                      <rect x="140" y="30" width="30" height="30" fill="#2c3e50"/>
                      <rect x="20" y="130" width="50" height="50" fill="#2c3e50"/>
                      <rect x="25" y="135" width="40" height="40" fill="white"/>
                      <rect x="30" y="140" width="30" height="30" fill="#2c3e50"/>
                      <rect x="80" y="20" width="10" height="10" fill="#2c3e50"/>
                      <rect x="100" y="20" width="10" height="10" fill="#2c3e50"/>
                      <rect x="80" y="40" width="10" height="10" fill="#2c3e50"/>
                      <rect x="80" y="60" width="10" height="10" fill="#2c3e50"/>
                      <rect x="100" y="60" width="10" height="10" fill="#2c3e50"/>
                      <rect x="20" y="80" width="10" height="10" fill="#2c3e50"/>
                      <rect x="40" y="80" width="10" height="10" fill="#2c3e50"/>
                      <rect x="60" y="80" width="10" height="10" fill="#2c3e50"/>
                      <rect x="80" y="80" width="10" height="10" fill="#2c3e50"/>
                      <rect x="100" y="80" width="10" height="10" fill="#2c3e50"/>
                      <rect x="120" y="80" width="10" height="10" fill="#2c3e50"/>
                      <rect x="140" y="80" width="10" height="10" fill="#2c3e50"/>
                      <rect x="160" y="80" width="10" height="10" fill="#2c3e50"/>
                      <rect x="180" y="80" width="10" height="10" fill="#2c3e50"/>
                      <rect x="20" y="100" width="10" height="10" fill="#2c3e50"/>
                      <rect x="60" y="100" width="10" height="10" fill="#2c3e50"/>
                      <rect x="100" y="100" width="10" height="10" fill="#2c3e50"/>
                      <rect x="140" y="100" width="10" height="10" fill="#2c3e50"/>
                      <rect x="180" y="100" width="10" height="10" fill="#2c3e50"/>
                      <rect x="80" y="120" width="10" height="10" fill="#2c3e50"/>
                      <rect x="100" y="120" width="10" height="10" fill="#2c3e50"/>
                      <rect x="120" y="120" width="10" height="10" fill="#2c3e50"/>
                      <rect x="160" y="120" width="10" height="10" fill="#2c3e50"/>
                      <rect x="80" y="140" width="10" height="10" fill="#2c3e50"/>
                      <rect x="120" y="140" width="10" height="10" fill="#2c3e50"/>
                      <rect x="160" y="140" width="10" height="10" fill="#2c3e50"/>
                      <rect x="100" y="160" width="10" height="10" fill="#2c3e50"/>
                      <rect x="140" y="160" width="10" height="10" fill="#2c3e50"/>
                      <rect x="180" y="160" width="10" height="10" fill="#2c3e50"/>
                      <rect x="80" y="180" width="10" height="10" fill="#2c3e50"/>
                      <rect x="120" y="180" width="10" height="10" fill="#2c3e50"/>
                      <rect x="160" y="180" width="10" height="10" fill="#2c3e50"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="working-hours">
              <h4>营业时间</h4>
              <p>周一至周日：8:00 - 20:00</p>
              <p>全年无休，欢迎咨询</p>
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
  display: flex;
  justify-content: center;
}

.contact-info-wrapper {
  background: white;
  padding: clamp(24px, 4vw, 40px);
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 600px;
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

.wechat-qr-section {
  margin-top: clamp(20px, 3vw, 30px);
}

.wechat-qr-section h4 {
  font-size: clamp(0.9rem, 1.5vw, 18px);
  font-weight: 600;
  color: #2c3e50;
  margin: 0 0 16px;
}

.wechat-qr-container {
  display: flex;
  justify-content: center;
}

.wechat-qr-placeholder {
  background: #f8f9fa;
  padding: clamp(16px, 3vw, 24px);
  border-radius: 12px;
  text-align: center;
  width: 100%;
  max-width: 280px;
}

.qr-icon {
  font-size: clamp(32px, 5vw, 48px);
  margin-bottom: 8px;
}

.wechat-qr-placeholder p {
  font-size: clamp(0.8rem, 1.3vw, 14px);
  color: #666;
  margin: 0 0 16px;
}

.qr-code-box {
  background: white;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
}

.qr-code-svg {
  width: 100%;
  max-width: 180px;
  height: auto;
  display: block;
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

@media (max-width: 768px) {
  .contact {
    padding: 60px 12px;
  }

  .contact-info-wrapper {
    padding: clamp(20px, 4vw, 30px);
  }
}

@media (max-width: 480px) {
  .contact {
    padding: 50px 10px;
  }
}
</style>