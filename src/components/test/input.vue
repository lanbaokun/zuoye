<template>
  <div class="wrap">
     <input type="text" v-model="val">
     <button @click="handleClick">确定</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'Index',
  data () {
    return {
       val:''
    }
  },
  methods:{
    ...mapActions(['saveStrageServer']),
      handleClick(){
        if(!this.val){
             return
        }
        this.saveStrageServer({msg:this.val})
        this.val='';
      }
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>