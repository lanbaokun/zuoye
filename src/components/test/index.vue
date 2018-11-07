<template>
  <div class="wraps">
    <Input />
    <List />
    <Showindex />
  </div>
</template>

<script>
import Input from './input.vue'
import List from './list.vue'
import Showindex from './showindex.vue'
export default {
  name: 'Index',
  data () {
    return {
     
    }
  },
  components:{
    Input,List,Showindex
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 *{
   padding: 0 ;
   margin: 0;
   list-style: none;
 }
</style>
