import { createApp } from 'vue'
import App from './App.vue'
import '@arco-design/web-vue/dist/arco.less'
import '@/assets/styles/reset.scss'

const boostrap = async () => {
  const app = createApp(App)
  app.mount('#app')
}

boostrap()
