<template>
    <header class="header">
      <nav class="nav-container">
        
        <div class="nav-links" :class="{ 'active': isMenuOpen }">
          <a href="#home">Home</a>
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div class="logo">
          <img src="../assets/images/logo.png" alt="Figma Land" />
        </div>
        
        <div class="social-links">
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
      }
    }
  }
  </script>
  
  <style scoped>
  .header {
    position: absolute;
    width: 100%;
    padding: 1.5rem 2rem;
    z-index: 10;
  }
  
  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo img {
    height: 60px;
    margin-left: -314px ;
  }
  
  .nav-links {
    display: flex;
    gap: 2.5rem;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
  }
  
  .social-links {
    display: flex;
    gap: 1.5rem;
  }
  
  .social-links a {
    color: white;
    font-size: 1.2rem;
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
  }
  
  .login-btn, .signup-btn {
    padding: 0.5rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
  }
  
  
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .hamburger span {
    width: 25px;
    height: 2px;
    background: #333;
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    
    .nav-links.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      background: white;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  
    .hamburger {
      display: flex;
    }
  
    .cta-buttons {
      display: none;
    }
  }
  </style>