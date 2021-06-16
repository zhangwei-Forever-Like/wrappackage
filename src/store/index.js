import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        Authorization:localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        id:0,
    },
    mutations:{
        changeLogin (state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
          },
        getId(state,id){
            state.id=id
        }
    }
})

export default store