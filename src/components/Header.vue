<template>
  <nav-bar />
  <section class="hero">
    <div class="hero-content">
      <h1>The best products start with Figma</h1>
      <p>Most calendars are designed for teams. Slate is designed for freelancers</p>
      <button class="try-btn">Try For Free</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background:
    linear-gradient(rgba(241, 237, 237, 0), rgba(255, 253, 253, 0)),
    url('../assets/images/computer-team.png') no-repeat center center;
  background-size: cover;
  /* background-attachment: fixed; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
}

.hero-content {
  max-width: 700px;
  color: white;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.8;
}

.try-btn {
  background: #2091f9;
  color: white;
  border: none;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  border-radius: 35px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.try-btn:hover {
  background: #1a7ed6;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }
}
</style>
