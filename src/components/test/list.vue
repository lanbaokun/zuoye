<template>
  <div class="wrap">
     <ul>
         <li :style="{color:msgList.iNow === key?'red':'blue'}" v-for="(item,key) in msgList.msgList" :key="key" @click="liClick(key)">{{item}}</li>
     </ul>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
     
    }
  },
  computed:{
    ...mapState(['msgList','iNow'])
  },
  methods:{
      ...mapMutations(['updataInow']),
      ...mapActions(['getList']),
      liClick(index){
        this.updataInow({index})
      }
  },
  mounted(){
    this.getList();
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>