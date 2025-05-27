<template>
    <div class="contact">
   <h2>Contact Us</h2>
    <p class="">Most calendars are designed for teams. <span class="d-none d-lg-block">Slate is designed for freelancers</span></p>
    <section class="details">
        <div class="form">
            <h3>Contact Us</h3>
            <form action="" method="post">
                <input type="text" name="fname" id="fname" placeholder="Your Name">
                <input type="email" name="email" id="email" placeholder="Your Email">
                <textarea name="message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <input
                    name=""
                    id=""
                    class="btn btn-primary"
                    type="button"
                    value="Send"
                />
                
            </form>
        </div>
        <div class="location">
            <div class="mail">
                <p><img src="/src/assets/logo.svg" alt=""><span>6386 Spring St Undefined Anchorage, Georgia 12473 United States</span></p>
            </div>
        </div>
    </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style  scoped>
.form{
    width: 40%;
    border: 2px solid red;
    text-align: center;
}
form{
    width: 90%;
    border: 2px solid red;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
input[type='text'], input[type='email']{
    width: 70%;
    margin: 0 auto;
    padding: 10px;
    border: 0;
    border-radius: 20px;
    background-color: #ccc;
}
textarea{
    width: 70%;
    border: 0;
    margin: 0 auto;
     border-radius: 20px;
    background-color: #ccc;
}input[type='button']{
width: 27%;
cursor: pointer;
margin: 0 66px 0;
border-radius: 20px;
}
</style>