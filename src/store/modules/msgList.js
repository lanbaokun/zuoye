import { saveMsg,getListApi } from '../../service/api';

let state = {
    msgList:[],
    iNow:null
}

let getters = {

}

let mutations = {
    addMsg(state,payload){
        state.msgList.push(payload.msg);
       },
     updataInow(state,payload){ 
        state.iNow = payload.index;
       },
    initMsg(state,payload){
        state.msgList = payload.msgList;
    }
}

let actions = {
    saveStrage(context,payload){
        let {commit} = context;
        let getMsgList = localStorage.getItem('msgList');
        getMsgList = getMsgList ? JSON.parse(getMsgList) : [];
        getMsgList.push(payload.msg);
        localStorage.setItem('msgList',JSON.stringify(getMsgList));
        commit({type:'addMsg',msg:payload.msg})
    },
    async saveStrageServer({commit},payload){
        let response = await saveMsg({msg:payload.msg});
        if(response.data.code === 1){
          console.log(response)
          commit({type:'addMsg',msg:payload.msg});
        }else{
          
        }
       
    },
    async getList({commit},payload){
       let response = await getListApi();
       if(response.data.code === 1){
           console.log(response)
          commit({type:'initMsg',msgList:response.data.msgList});
       }
    
    }
}

export default {
    state,getters,mutations,actions
}