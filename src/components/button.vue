<template>
    <div>
<button class="bg-primary btn text-light d-block">{{ textBtn }}</button>
    </div>
</template>

<script>
    export default {
         props: [
      'btnText'
    ],
    data(){
        return{
            textBtn: this.btnText
        }
    }
    }
</script>

<style scoped>
.btn{
    border: none;
    font-weight: 500;
    margin: 30px auto !important;
}
</style>