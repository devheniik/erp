import { create } from "lodash";

export default {
    namespased: true,
    state: {
        list: []
    },
    getters: () => { },
    mutations: { 
        toast_create (state, payload) { 
            state.list.push(payload)
        },
        toast_delete (state, i) { 
            state.list.splice(i, 1)
        }            
     },
    actions: () =>  {  }
};