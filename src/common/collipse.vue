<script>
export default {
    data(){
       return{
           downIcon:false
       }
    },
    methods:{
        headClick(){
            this.collipse.isShow = !this.collipse.isShow;
            this.$emit('handleCollipse',this.collipse.isShow);
            this.downIcon = !this.downIcon;
        }
    },
    props:{
        collipse:{
            type:Object,
            default(){
                return {
                    isShow:false,
                    downIcon:false
                }
            }
        }
    }
}
</script>
<template>
    <div class="wrap-coll">
        <div class="header-coll" @click="headClick">
            <slot name="head"></slot>
        </div>
        <div class="con" v-show="collipse.isShow">
           <slot></slot>
        </div>
    </div>
</template>
<style>
*{
    padding: 0;
    margin: 0;
    list-style: none;
}
.wrap-coll{
    height: auto;
}
.header-coll div{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header-coll div a{
   color:#707F88;
}
.header-coll div span{
   display: flex;
   align-items: center;
}
.header-coll div i{
   color:#707F88;
}
.wrap header sapn{
    color:#707F88;
    display: flex;
} 
.header-coll sapn i{
    color:#707F88;
} 
.header{
    height: .4rem;
}
</style>