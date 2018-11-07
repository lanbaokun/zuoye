<template>
    <div class="wrap">
        <nav>
            <ul>
                <li v-for="(item,key) in list" :key="key" @click="onclick(key)">
                    {{item.text}}
                </li>
            </ul>
        </nav>
        <main>
            <component :is="list[isNow].comName"></component>
        </main>
    </div>
</template>
<script>
export default {
    data (){
        return {
            list:[
                {text:'首页',comName:'Home'},
                {text:'列表',comName:'List'},
                {text:'详情',comName:'Detail'}
                ],
            isNow:0
        }
    },
    components:{
        Home:() => import('./Home'),
        List:() => import('./List'),
        Detail:() => import('./Detail'),
    },
    methods:{
        onclick(index){
           this.isNow = index
        }
    }
}
</script>
<style scoped>
.wrap{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
}
nav{
   width: 100%;
   height: .44rem;
}
nav ul{
    display: flex;
    align-items: center;
    justify-content: center;
}
nav ul li{
    margin:0 .1rem;
    line-height: .44rem;
}
main{
    width: 100%;
    flex: 1;
}
</style>

