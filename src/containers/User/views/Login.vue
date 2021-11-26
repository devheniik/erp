<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <CogIcon class="mx-auto h-16 w-auto"></CogIcon>
        <h2 class="mt-3 text-center text-3xl font-extrabold text-gray-900">Войдите в свой аккаунт</h2>
        <p class="mt-2 text-center text-sm text-gray-600">или
          {{ ' ' }}<span class="font-medium text-primary-600 hover:text-primary-500">запросите доступ</span></p>
      </div>
      <div class="space-y-4"><input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div><label class="sr-only" for="email-address">Email address</label><input
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              id="email-address" v-model="email" name="email" type="email" autocomplete="email"
              placeholder="Email address"></div>
          <div><label class="sr-only" for="password">Password</label><input
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
              id="password" v-model="password" name="password" type="password" autocomplete="current-password"
              placeholder="Password"></div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center"><input
              class="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" id="remember-me"
              name="remember-me" v-model="remember" type="checkbox"><label class="ml-2 block text-sm text-gray-900"
              for="remember-me">Запомнить меня</label></div>
          <div class="text-sm"><a class="font-medium text-primary-600 hover:text-primary-500">Забыли пароль?</a></div>
        </div>
        <div><button
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            type="submit" @click="login(email, password)"><span
              class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-primary-500 group-hover:text-primary-400" aria-hidden="true">
              </LockClosedIcon>
            </span> Войти</button></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import login from '../api/login'
  import {
    ref
  } from 'vue'





  const remember = ref(true)
  const email = ref()
  const password = ref()
</script>