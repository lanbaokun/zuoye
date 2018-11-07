<template>
    <div class="header">
       <div class="header-left">
         <i class="icon iconfont icon-chevron-thin-left"></i>
         <i class="icon iconfont icon-chevron-thin-right"></i>
         <div>
            <i class="icon iconfont icon-fangdajing"></i>
            <input type="text" placeholder="搜索">
         </div>
       </div>
       <div class="header-right">
          <div class="right-one">
              <img src='../../static/img/icon/信心.svg' alt=""/>
              <span>0</span>
          </div>
         <img src='../../static/img/icon/意见反馈.svg' alt=""/>
       </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
 .header{
     width: 100%;
     height: .44rem;
     border-bottom: 1px solid #ccc;
     display: flex;
     justify-content: space-between;
     
 }
 .header-left{
     display: flex;
     align-items: center;
 }
 .header-left>i{
     padding: 0 .2rem;
 }
 .header-left div{
     width: 3rem;
     height: .3rem;
     background: #E4E4E4;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: .2rem;
 }
 .header-left div input{
     border: none;
     outline: none;
     background: #E4E4E4;
     width: 50px;
 }
 .header-right{
     display: flex;
     align-items: center; 
 }
 .header-right img{
     padding: 0 .1rem;
 }
 .right-one{
     position: relative;
 }
 .right-one span{
     width: 12px;
     height: 12px;
     background: red;
     font-size: .12rem;
     line-height: 12px;
     text-align: center;
     border-radius: 50%;
     color:#fff;
     position: absolute;
     top:2px;
     right:12px;
 }
</style>

