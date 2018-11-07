<template>
    <div class="left">
        <User />
        <Nav></Nav>
    </div>
</template>
<script>
  import User from './user.vue'
  import Nav from './nav.vue'
  export default {
      components:{
          User,
          Nav
      }
  }
</script>
<style scoped>

</style>

