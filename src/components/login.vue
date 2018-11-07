<template>
<div class="login">
    <div class="box">
        <span>welcome</span>
        <p>赚赚金融 开创信贷“1+N”模式综合互联网金融服务共享平台</p>
    </div>
    <div class="mark">
       <img src='../../static/img/icon/logo.svg' alt=""/>
       <p>赚赚金融渠道管理系统</p>
       <div class="from">
           <input type="text" placeholder="注册邮箱/手机号">
           <input type="text" placeholder="登录密码">
           <div class="yzm">
               <input type="text" placeholder="验证码">
               <span>a1dk</span>
            </div>
           
           <p>忘记密码</p>
           <router-link to="/Layout">登录</router-link>
       </div>
    </div>
</div>
 
</template>
<script>
export default {
    name:'login',
    data(){
        return{

        }
    },
    mounted(){

    },
    methods:{

    }


}
</script>
<style scoped>
.login{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: url('../../static/img/timg.jpg') no-repeat;
    background-size: 100% 100%;
    position: relative;
}
.mark{
        width: 3.45rem;
        height: 3.97rem;
        background: #fff;
        position: absolute;
        top: 2.07rem;
        left: 60%;
    }
.box{
    position: absolute;
    top:50%;
    transform: translate3d(0,-50%,0);
    left: 10%;
}
.box span{
    font-size: .6rem;
    color:#fff;
}
.box p{
    color:#fff;
    margin-top: .1rem;
}
.mark>img{
   
    text-align: center;
    color:#fff;
    margin-top: .3rem;
    margin-left: 40%;
}
.mark p{
    text-align: center;
    margin-top: .1rem;
}
.from{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.from input{
    width: 80%;
    height: .4rem;
    border: none;
    outline: none;
    border-bottom: 1px solid#D0D0D0;
}
.yzm{
    width: 80%;
    height: .4rem;
    border-bottom: 1px solid#D0D0D0;
}
.yzm>span{
    border: 1px solid #ccc;
}
.from a{
    width: 80%;
    height: .4rem;
    border: none;
    outline: none;
    background: #7B1AD9;
    color:#fff;
    border-radius: .2rem;
    margin-top: .3rem;
    text-align: center;
    line-height: .4rem;
}
</style>

