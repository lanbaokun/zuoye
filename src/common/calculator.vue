<template>
  <div id="calcuator">
    <input type="text" id="input-box" value="0" v-model="result"/>
    <div class="main">
      <div class="left">
          <ul>
              <li v-for="(item,key) in keys" :key="key" @click="divClick(item)">
                 {{item.text}}
              </li>
          </ul>
          
      </div>
      <div class="right">
         <span v-for="(item,key) in comSy" :key="key" @click="operators(item)">
             {{item}}
         </span>
         <p @click=" inputCal('backspace')">{{backspace}}</p>
      </div>
    </div>
</div>

</template>

<script>
function createNum(opt){
    let num = opt
    let text = String(opt);
    return{num,text}
}
let keys = [7,8,9,4,5,6,1,3,4,'.',0,'del'].map(item => createNum(item))
export default {
  data(){
      return{
        keys,
        comSy:["+","-","x","÷"],
        backspace:"完成",
        isCComputed:false,
        result: '',
        nums: [],
      }
  },
  mounted(){
        window.tt = this;
  },
  methods: {
       divClick(item) {
           console.log(item)
          
           if(item.text === 'del'){
             let lastStr = this.nums[this.nums.length-1]
             if(lastStr === ''){
                this.nums.pop();
                return;
             }
             lastStr = lastStr.slice(0,lastStr.length-1);
             if(lastStr === ''){
                this.nums.pop();
                return;
             }
             this.nums[this.nums.length-1] = lastStr;
           }else{
               if(this.nums.length === 0){
                    this.nums.push(item.text)
               }else{
                if(this.comSy.indexOf(this.nums[this.nums.length-1]) !== -1){
                this.nums.push(item.text);
                }else{
                this.nums[this.nums.length-1] += item.text;
                }
               }
           }
            this.result = this.nums
            this.isCom();
       },  
        operators(sy){
            let len = this.nums.length;
            if(len === 0 || this.nums[this.nums.length-1] === sy){
                return;
            }
            if(this.comSy.indexOf(this.nums[this.nums.length-1]) !== -1){
                this.nums[this.nums.length-1] = sy;
                return;
            }
            this.nums.push(sy);
            this.isCom();
        },
         getTotal(){
            if(this.comSy.indexOf(this.nums[this.nums.length-1]) !== -1){
                this.nums.pop();
            }
            let str = this.nums.join('');
            console.log(str);
            console.log(eval(str));

         },
         isCom(){
            let index = this.nums.findIndex(item=>this.comSy.indexOf(item) !== -1);
            this.isComputed = index === -1 ? false : true;
        }
   
  }
}
</script>

<style>
#calcuator{
    width: 100%;
    height: auto;
    padding: 0 .1rem;
}
#calcuator input{
    width:100%;
    height: 30px;
    border-radius: 5px;
    border: none;
    border: solid 1px #ccc;
    margin: 5px 0;
    background: orange;
}
.main{
    width: 100%;
    display: flex;
}
.left{
    width: 70%;
    height: auto;
}
.left ul{
    width: 100%;
    height: .5rem;
    display: flex;
    flex-wrap: wrap;
}
.left ul li{
    width: 33.3%;
    text-align: center;
    border: 1px solid #eee;
    line-height: .5rem;
}
.right{
    width: 30%;

}
.right span{
   width: 50%;
   display: inline-block;
   text-align: center;
   line-height: .5rem;
   border: 1px solid #eee;
   height: .5rem;
}
.right p{
   width: 100%;
   display: inline-block;
   text-align: center;
   line-height: 1rem;
   border: 1px solid #eee;
   height: 1.07rem;
   background: orange;
}

</style>