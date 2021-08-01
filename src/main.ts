import { createApp } from 'vue'
import App from './App.vue'

function initApp(): void {
  const app = createApp(App);
  app.mount('#app')
};

initApp()
