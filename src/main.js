import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router';
import Counter from './components/Counter.vue';
import MultipleCounter from './components/MultipleCounter.vue';
import TodoList from './components/TodoList.vue';
import AddTodo from './components/AddTodo.vue';
import UpdateTodo from './components/UpdateTodo.vue';

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
        },
        {
            path: "/todolist",
            children: [
                {
                    path: "",
                    component: TodoList,
                },
                {
                    path: "add",
                    component: AddTodo,
                },
                {
                    path: ":id/update",
                    name: "todo-update",
                    component: UpdateTodo,
                    props: true,
                }
            ]
        }
    ],
    history: createWebHistory(),
});

createApp(App).use(pinia).use(router).mount('#app')
