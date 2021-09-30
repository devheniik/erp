import navigation_data from '../data/navigation'
import router from '@/router'
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

    const linkTo = (item, router) => { 

        navigation.value.forEach(first => {
            first.current = false 
            first.child.forEach(seconsd => {
                seconsd.current = false 
                seconsd.child.forEach(third => {
                    third.current = false 
                })
            })
        })

 
        router.push({
            name: item.href
        })  


      }


    return { navigation, findActive, linkTo }
}