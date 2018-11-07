/*
 * @Author: tao 
 * @Date: 2018-10-10 09:34:48 
 * @Last Modified by: tao
 * @Last Modified time: 2018-10-10 10:06:57
 */

// 观察者模式   捕捉到事情发生的时刻，并进行通知
// 函数作为观察者 ， 接收信号从而做出动作

class Watch{
    constructor(){
        /** 
         * {
         *      key1:[fn,fn,fn]
         *      key2:[fn,fn,fn]
         * }
        */
        this._events = {}
    }
    on(type,watcher){
        if(!(this._events[type] instanceof Array)){
            this._events[type] = [];
        }
        this._events[type].push(watcher);
    }
    emit(type,...reset){
        if(!(this._events[type] instanceof Array)){
            return;
        }
        this._events[type].forEach(item=>{
            item(reset);
        })
    }
}

export default new Watch();


