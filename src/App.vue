<script setup>
// when you remove the async keyword the error is captured
const  func = async (arg) => {
  if(!arg){
    throw new Error('this is an error')// just to mimic an error (this error is not captured by the app.config.errorHandler in the main.js file)
    console.log('no error')
  }
}
func()
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank"></a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

