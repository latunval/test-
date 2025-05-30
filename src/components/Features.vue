<template>
  <section class="features">
    <div class="features-header">
      <h2>Features</h2>
      <p>Most calendars are designed for teams.<br>
         Slate is designed for freelancers</p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <img src="../assets/images/drawing.png" alt="OpenType features" />
        <h3>OpenType features Variable fonts</h3>
        <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
      </div>

      <div class="feature-card">
        <img src="../assets/images/edit.png" alt="Design" />
        <h3>Design with real data</h3>
        <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
      </div>

      <div class="feature-card">
        <img src="../assets/images/brush.png" alt="Fastest way" />
        <h3>Fastest way to take action</h3>
        <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
      </div>
    </div>

    <div class="video-section">
    <img src="../assets/images/play.png" alt="" class="playImage">
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features'
}
</script>

<style scoped>
.features {
  padding: 6rem 2rem;
  background: #ffffff;
  text-align: center;
}

.features-header {
  max-width: 700px;
  margin: 0 auto 4rem;
}

.features-header h2 {
  font-size: 3rem;
  color: #252B42;
  margin-bottom: 1rem;
}

.features-header p {
  font-size: 1.25rem;
  color: #374754;
  line-height: 1.8;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 0 1rem;
}

.feature-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.feature-card img {
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
 
  
}

.feature-card h3 {
  font-size: 1.80rem;
  color: #252B42;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #374754;
  line-height: 1.6;
  font-size: 1.3rem;
}

.video-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.video-section video {
  
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
 
}
.playImage{
  margin-left: -180px;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .features-header h2 {
    font-size: 2rem;
  }

  .features-header p {
    font-size: 1rem;
  }
}
</style>