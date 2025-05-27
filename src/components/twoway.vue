<template>
    <div id="organisesection">
        <div id="organise1">
            <h2 v-html="heading"></h2>
            <p v-html="description"></p>
            <slot name="custom"></slot>
            <button v-if="buttonText" class="base-btn">{{ buttonText }}</button>

        </div>

        <div id="organise2">
<img :src="image" alt="">
        </div>

    </div>
</template>

<script>
    export default {
props: {
    heading: String,
    description: String,
    buttonText: String,
    image: String
}

        
    }
</script>

<style scoped>
#organisesection {
  width: 100%;
  margin: 20px 0px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#organise1,
#organise2 {
  width: 50%;
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
</style>