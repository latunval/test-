<template>
  <div>
    <div class="header text-center">
      <h2 >Partners</h2>
      <p style="width: 55%; margin: 10px auto;">Most calenders are designed for teams. Slate is designed for freelacers</p>
    </div>
    <div class="partner-links row row-cols-1 row-cols-md-4 border">
        <div v-for="(link) in partnerLinks" :key="link.linkName" class="link border text-center">
            <p>{{ link.linkName }}</p>
            <img :src="link.linkImg" alt="">
        </div>
    </div>
    <button-view btn-text="try for free" />

    <testimonial-view />
  </div>
</template>

<script>
import testimonial from './testimonial.vue'

export default {
  components: { testimonial },
 
  data() {
    return {

      partnerLinks: [
        { linkName: 'Client Name', linkImg: './src/assets/images/logos_google.png' },
        { linkName: 'Client Name', linkImg: './src/assets/images/microsoft.png' },
        { linkName: 'Client Name', linkImg: './src/assets/images/amazon.png' },
        { linkName: 'Client Name', linkImg: './src/assets/images/uber.png' },
        { linkName: 'Client Name', linkImg: './src/assets/images/dropbox.png' },
        { linkName: 'Client Name', linkImg: './src/assets/images/logos_google.png' },
        { linkName: 'Client Name', linkImg: './src/assets/images/uber.png' },
        { linkName: 'Client Name', linkImg: './src/assets/images/amazon.png' },
      ],
    }
  },
}
</script>

<style  scoped>
.header{
  width: 40%;
  margin: 20px auto;
}
.partner-links{
  width: 70%;
  margin: 40px auto;
}
img{
  width: 70%;
}
</style>
