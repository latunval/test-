<template>
  <div id="organisesection" :class="[{reverse}]">
    <div id="organise1">
      <h2 v-html="heading"></h2>
      <p v-html="description"></p>
      <slot name="custom"></slot>
      <button v-if="buttonText" class="base-btn">{{ buttonText }}</button>
    </div>

    <div id="organise2">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    description: String,
    buttonText: String,
    image: String,
    reverse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
#organisesection {
  /* border: 1px solid; */
  width: 100%;
  margin: 20px 0px;
  /* padding: 20px; */
  display: flex;
font-size: 30px;
}
#organise1,
#organise2 {
  width: 50%;
  padding: 20px;
  /* border: 1px solid green; */
}
.base-btn {
  width: 140px;
  padding: 10px 0;
  background: #2563eb;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  margin-top: 16px;
}
.reverse {
  flex-direction: row-reverse;
}
img{
  width: 350px;
}
@media screen and (max-width:700px) {
    #organisesection{
        flex-direction: column;
        font-size: 26px;
    }
    #organise1,
#organise2{
    width: 97%;
    padding: 10px;
}
img{
    width: 250px;
}
}
</style>
