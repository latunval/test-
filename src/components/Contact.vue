<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <p class="">
      Most calendars are designed for teams.
      <span class="d-none d-lg-block">Slate is designed for freelancers</span>
    </p>
    <section class="details d-flex">
      <div class="form">
        <h3>Contact Us</h3>
        <form action="" method="post">
          <input type="text" name="fname" id="fname" placeholder="Your Name" />
          <input type="email" name="email" id="email" placeholder="Your Email" />
          <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
          <input name="" id="" class="btn btn-primary" type="button" value="Send" />
        </form>
      </div>
      <div class="location">
        <div class="mail d-flex gap-5">
          <p>
            <span class="img"><img src="../assets/images/locator.png" alt="" /></span
            ><span class="break"
              >6386 Spring St Undefined Anchorage, Georgia 12473 United States</span
            >
          </p>
          <p class="tell">
            <span class="img"><img src="../assets/images/phone-fill.png" alt="" /></span>
            <span>(843) 555-0130</span>
          </p>
          <p class="com">
            <span class="img"><img src="../assets/images/email.png" alt="" /></span
            ><span>willie.jennings @example.com</span>
          </p>
        </div>
        <img class=" map d-none d-lg-block" src="../assets/images/image-map.png" alt=""  />
        <section class="socia gap-3 d-flex">
          <li>
            <a href="#"><img src="../assets/images/twitter-fill.png" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/images/facebok-fill.png" alt="" /></a>
          </li>
          <li>
            <a href="#"><img src="../assets/images/linkedin-fill.png" alt="" /></a>
          </li>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@media screen and (max-width: 500px) {
  .details {
    flex-direction: column-reverse;
  }
  .form {
    width: 100% !important ;
  }
  form{
    width: 100%;
  }
  .mail{
    flex-direction: column;
  }
  input[type='button']{
    width: 40% !important;
  }
}
.contact {
  text-align: center;
  padding: 20px 0;
  width: 96%;
  margin: 10px auto;
}
.location {
  /* border: 2px solid red; */
  margin: 10px auto;
}

.break {
  width: 18rem;
  margin: 10px auto;
  text-align: center;
  /* border: 2px solid red; */
}
.img {
  text-align: center;
}
.mail p {
  display: flex;
  gap: 10px;
  flex-direction: column;
}
li {
  list-style-type: none;
}
.form {
  width: 40%;
  /* border: 2px solid red; */
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 0 2px #ccc;
}
form {
  width: 90%;
  /* border: 2px solid red; */
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
input[type='text'],
input[type='email'] {
  width: 70%;
  margin: 0 auto;
  padding: 10px;
  border: 0;
  border-radius: 20px;
  background-color: #ccc;
}
textarea {
  width: 70%;
  border: 0;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #ccc;
}
input[type='button'] {
  width: 27%;
  cursor: pointer;
  margin: 0 66px 0;
  border-radius: 20px;
}
</style>
