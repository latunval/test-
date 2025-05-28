<template>
  <div class="footer">
    <ul class="links d-flex">
        <li><a href="#">Pages</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    <ul class="links d-flex">
        <li><a href="#">Tomothy</a></li>
        <li><a href="#">Eleanor Edwards</a></li>
        <li><a href="#">Ted Robertson</a></li>
        <li><a href="#">Annette Russell</a></li>
        <li><a href="#">Jennie Mckinney</a></li>
        <li><a href="#">Gloria Richards</a></li>
    </ul>
    <ul class="links d-flex">
        <li><a href="#">Jane Black</a></li>
        <li><a href="#">Philip Jones</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Colleen Russell</a></li>
        <li><a href="#">Marvin Hawkins</a></li>
        <li><a href="#">Bruce Simmmons</a></li>
    </ul>
    <div class="locate">
        <section class="list">
        <p class="tell">
            <span class="img"><img src="../assets/images/phone2.png" alt="" /></span>
            <span>(239) 5555-0108</span>
          </p>
          <p class="com">
            <span class="img"><img src="../assets/images/locator.png" alt="" /></span
            ><span>7480 Mockingbird Hill undefined</span>
          </p>
        </section>
        <ul class="icon">
            <li><a href="#"><img src="../assets/images/twitter.png" alt=""></a></li>
        <li><a href="#"><img src="../assets/images/facebook.png" alt=""></a></li>
        <li><a href="#"><img src="../assets/images/linkedin.png" alt=""></a></li>
        </ul>
        </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.icon{
    display: flex;
    flex-direction: row;
    gap: 30px;
}
.list{
    display: flex;
    flex-direction: column-reverse;
}
.list p{
    display: flex;
    flex-direction: row;
    gap: 20px;
}
.footer{
    background-color: rgba(23, 26, 65, 0.918);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 30px;
}
p{
    color: #fff;
}
li{
    list-style-type: none;
}
.links{
    flex-direction: column;
    gap: 10px;
}
.links li:first-child{
    font-weight: 600;
    font-size: 1.2rem;
}
a{
    text-decoration: none;
    color: #fff;
}</style>
