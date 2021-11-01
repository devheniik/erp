import { createStore } from 'vuex'
import user from './modules/user'
import toast from './modules/toast'

const store = createStore({
    modules: {
        toast,
        user,
    },
})

export default store
