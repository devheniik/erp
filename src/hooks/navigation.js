import navigation_data from '../data/navigation'

import { ref } from 'vue'
export default function() {
    const navigation = ref(navigation_data)

    const findActive = name => { 
        navigation.value.forEach(first => {
            if (first.uname == name) {
                first.current = true
                return
            }
            first.child.forEach(seconsd => {
                if (seconsd.uname == name) {
                    seconsd.current = true
                    first.current = true
                    return
                }
                seconsd.child.forEach(third => {
                    if (third.uname == name) {
                        third.current = true
                        seconsd.current = true
                        first.current = true
                        return
                    } 
                })
            })
        })
    }


    return { navigation, findActive }
}