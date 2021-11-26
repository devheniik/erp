const install = app => {
    app.config.globalProperties.$open = (route) => { 
        window.open(route.href, route.href, 'width=750,height=750')
    }
  }
  
  export { install as default };