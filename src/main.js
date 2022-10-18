import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.config.errorHandler =  async (err, instantce, info) => {
  console.log('%c this error is captured ', 'font-size: 20px; color: red', err)// some error are not captured (when we use the <script setup> syntax)
}

app.mount('#app')
