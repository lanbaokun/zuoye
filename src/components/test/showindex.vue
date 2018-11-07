<template>
   <h3>当前显示的是第{{msgList.iNow === null ? '?' : msgList.iNow+1}}个</h3>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
     
    }
  },
  computed:{
      ...mapState(['msgList'])
  }

}
</script>

<style>

</style>
