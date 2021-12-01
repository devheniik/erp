<template>
  <!-- Global notification live region, render this permanently at the end of the document -->
  <!-- <div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start">
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end"> -->
      <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed --> 
      <TransitionRoot appear :show="show" as="template" 
        enter="transform transition duration-[500ms]"
        enter-from="opacity-0 translate-x-96 scale-90"
        enter-to="opacity-100 translate-x-0 scale-100"
        leave="transform duration-200 transition ease-in-out"
        leave-from="opacity-100 translate-x-0 scale-100"
        leave-to="opacity-0 translate-x-96 scale-95"
        >
        <div class="max-w-sm w-full bg-opacity-90 bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden z-50">
          <div class="p-3">
            <div class="flex items-center">
              <div class="flex-shrink-0"> 
                <component :is="type == 'warning' ? 'ExclamationIcon' : type == 'danger' ? 'ShieldExclamationIcon' : type == 'success' ? 'CheckCircleIcon' : 'InformationCircleIcon'" :class="['h-6 w-6', type == 'warning' ? 'text-warning-400' : type == 'danger' ? 'text-danger-400' : type == 'success' ? 'text-success-400' : 'text-primary-400']" aria-hidden="true" />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium whitespace-nowrap truncate text-gray-900">
                  {{ message }} 
                </p>
                 <p class="mt-1 text-sm  text-primary-400" @click="window ? $open(link) : $router.push(link)">
                  {{ link_label }}
                </p> 
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button @click="close()" class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Close</span>
                  <XIcon class="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </TransitionRoot> 
    <!-- </div>
  </div> -->
</template>

<script setup>
import {ref} from 'vue'
    const props = defineProps({
        message: String,
        type: {
          type: String,
          default: 'info'
        },   
        link_label: String,
        window: Boolean,
        link:  Object,
        delay: {
          type: Number,
          default: 3000
        }
    })

    const emit = defineEmits(['close'])
    const show = ref(true)

    const close = () => {
      show.value = false
      setTimeout(() => {
        emit('close')
        show.value = false
      },500) 
    }

    setTimeout(() => {
       close()
    }, props.delay)
</script>