<template>
<div class="wrap">
    <Aside />
    <div class="right">
        <Header />
         <!-- <Home /> -->
         <div>
            <router-view>
           
            </router-view>
         </div>
        
    </div>
</div>  
</template>

<script>
import Header from './header.vue'
import Aside from './Aside'
import Home from './home.vue'
export default {
  name: 'Index',
//     return {
//         downIcon: false
//     }
//   },
//   methods:{
//     headClick(){
//             this.collipse.isShow = !this.collipse.isShow;
//             this.$emit('handleCollipse',this.collipse.isShow);
//             this.downIcon = !this.downIcon;
//         },
        
//   },
//   props:{
//         collipse:{
//             type:Object,
//             default(){
//                 return {
//                     isShow:false
//                 }
//             }
//         }
//     },
  components:{
      Header,
      Aside,
      Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
