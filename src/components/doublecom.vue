<template>
  <div>
    <twoway
      heading="Fastest way to organize"
      description="Most calendars are designed for teams.<br>Slate is designed for freelancers"
      buttonText="Try For Free"
      image="@/assets/images/computer.png"
    />

    <twoway
      heading="At your fingertips<br>Lightning fast prototyping"
      description="Subscribe to our Newsletter<br><small>Available exclusively on Figmaland</small>"
      image="@/assets/images/newsletter.png"
    >
      <template #custom>
        <form style="margin-top: 16px">
          <input
            type="email"
            placeholder="Your Email"
            style="padding: 8px 12px; border-radius: 20px; border: 1px solid #ccc"
          />
          <button class="base-btn" type="submit" style="margin-left: 8px">Subscribe</button>
        </form>
      </template>
    </twoway>
  </div>
</template>

<script>
import twoway from './twoway.vue'
export default {
  components: {
    twoway,
  },
}
</script>

<style  scoped></style>
