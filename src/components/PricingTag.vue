<template>
  <div class="pricing">
    <h2>Pricing</h2>
    <p class="">Most calendars are designed for teams. <span class="d-none d-lg-block">Slate is designed for freelancers</span></p>

    <section class="price-card ">
      <div class="card cols">
        <h2>FREE</h2>
        <p>Organize across all apps by hand</p>
        <div class="price d-flex">
          <h2>0 <span>$</span></h2>
          <p>Per Month</p>
        </div>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <button class="hover">Order Now</button>
      </div>
      <div class="card">
        <h2>STANDARD</h2>
        <p>Organize across all apps by hand</p>
        <div class="price d-flex">
          <h2>10 <span>$</span></h2>
          <p>Per Month</p>
        </div>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <button class="hover">Order Now</button>
      </div>
      <div class="card">
        <h2>BUSINESS</h2>
        <p>Organize across all apps by hand</p>
        <div class="price d-flex">
          <h2>99 <span>$</span></h2>
          <p>Per Month</p>
        </div>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <p>Pricing Feature</p>
        <button class="hover">Order Now</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'pricingTag',
}
</script>

<style scoped>
.pricing {
  background-color: rgb(4, 4, 46);
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  padding: 40px 0;
  /* justify-items: center; */
}
.price-card{
    display: flex;
    width: 60%;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px auto;
    /* border: 2px solid red; */
}
.card{
    width: 30%;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.5s;
}
.card:hover{
    background-color: rgb(14, 154, 219);
    color: #fff;
    padding: 20px;
    margin: -10px;
}
button{
    border: 0;
    width: 60%;
    padding: 10px 20px;
    border-radius: 20px;
    margin: 10px auto;
    background-color: rgb(14, 154, 219);
}
.card:hover button{
    background-color: #fff;
    color: rgb(14, 154, 219);
}
.price{
    /* display: flex; */
    width: 75%;
    margin: 10px auto;
    /* border: 2px solid red; */
    align-items: end;
}
.price h2{
    font-size: 4rem;
    font-weight: 900;
    display: flex;
    gap: 10px;
}
.price h2 > span{
    font-size: 1.4rem;
    font-weight: 900;
    /* border: 2px solid red; */
    margin-top: 10px;
}
.price > p{
    margin-left: -20px;
    /* border: 2px solid red; */
}
@media screen and (max-width:1024px){
.price-card{
    width: 97%;
    gap: 10px;
}
.card{
    width: 35%;
}
}
@media screen and (max-width:568px) {
    .price-card{
        flex-direction: column;
        gap: 30px;
        width: 80%;
    }
    .card{
        width: 100%;
    }
}
</style>
