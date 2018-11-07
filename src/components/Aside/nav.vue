<template>   
     <div class="left_center">
        <Scroll>
         <Collipse v-for="(item,key) in navData" :key="key" @handleCollipse="handleCollipse(key)">
          <div slot="head" :style="{color:'#707F88'}">
              <span>
                 <img :src="item.img"/>
                 <router-link :to="item.path">{{item.navText}}</router-link>
              </span>
                <i class="icon iconfont icon-angle-up" v-show="item.isShow" ></i>
                <i class="icon iconfont icon-angle-down" v-show="!item.isShow"></i>
          </div>
          <ul v-if="item.subNav?true:false">
              <li v-for="(value,index) in item.subNav" :key="index">
                  <span></span>
                  <router-link :to="value.path"> {{value.subNavText}}</router-link>
              </li>
          </ul>
         </Collipse>
        </Scroll>
    </div>
</template>
<script>
import Scroll from '../../common/Scroll.vue'
import Collipse from '../../common/collipse.vue'
import navData from './navData.js'

export default {
    data(){
        return{
            subNav:false,
            downIcon:false
        }
    },
   props: {
       navData: {
           type:Array,
           default:()=>navData
       }
   }, 
   methods: {
       handleCollipse(key) {
           this.navData.map((v, i) => {
               if (v.id === (key + 1)) {
                   v.isShow = !v.isShow
               }
           })
       },
        sort() {
            this.downIcon = !this.downIcon
               }
        },
   components:{
       Collipse,Scroll
   }
}
</script>
<style scoped>
ul li{
   display: flex;
   height: .3rem;
   align-items: center;
}
ul>li>span{
    width: 5px;
    height: 5px;
    background: #6C7885;
    border-radius: 50%;
    margin: 0 .15rem;
    display: block;
  }
ul>li>a{
    color: #6C7885;
  }
  ul li{
      color:#6C7885;
  }
</style>
