import axios from 'axios'
let host = ''
export function testApi(){
    return axios.get(host+'/test');
}


export function saveMsg(body){
    return axios.post(host+'/saveMsg',body);
}


export function getListApi(){
    return axios.get(host+'/getList');
}