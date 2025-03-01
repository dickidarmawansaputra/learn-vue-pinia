import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import Counter from './components/Counter.vue';
import MultipleCounter from './components/MultipleCounter.vue';

const pinia = createPinia();

const router = createRouter({
    routes: [
        {
            path: "/counter",
            component: Counter,
        },
        {
            path: "/multiple",
            component: MultipleCounter,
        }
    ],
    history: createWebHistory(),
});

createApp(App).use(pinia).use(router).mount('#app')
