import { create } from "lodash";

export default {
    namespased: true,
    state: {
        config: {}
    },
    getters: {
        config (state){
            return state.config
        }
    },
    mutations: { 
        update_card (state, payload) {  
            console.log(payload);
            state.config[payload.name] = payload.id
            localStorage[payload.name] = payload.id
        },
        setup_config (state) {   
            const config = JSON.stringify(localStorage)
            console.log(config);
            state.config =  JSON.parse(config)
        }   
     },
    actions: () => {}
};