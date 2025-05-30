<template>
  <div>
    <twoway
      heading="Fastest way to organize"
      description="Most calendars are designed for teams.<br>Slate is designed for freelancers"
      buttonText="Try For Free"
      :image="computerImage"
    />

    <twoway
      heading="At your fingertips<br>Lightning fast prototyping"
      description="Subscribe to our Newsletter<br><small>Available exclusively on Figmaland</small>"
      :image="newsletterImage"
      :reverse="true"
    >
      <template #custom>
        <form style="margin-top: 16px">
          <input
            type="email"
            placeholder="Your Email"
            style="padding: 8px 10px; border-radius: 20px; border: 1px solid #ccc"
          />
          <button class="base-btn" type="submit" style="margin-left: 8px">Subscribe</button>
        </form>
      </template>
    </twoway>
  </div>
  <!-- <img src="../assets/images/" alt=""> -->
   <!-- <img src="../assets/images/newletter.png" alt=""> -->
</template>

<script>
import twoway from '../components/twoway.vue'
import computerImage from '../assets/images/computer.png'
import newsletterImage from '../assets/images/newletter.png'

export default {
  components: {
    twoway,
  },
  data() {
    return {
      computerImage,
      newsletterImage,
    }
  },
}
</script>

<style scoped>

</style>
