<script setup>
import { ref } from 'vue';
import { useTodoList } from '../useTodoList';
import { useRouter } from 'vue-router';

const {id} = defineProps(["id"]);
const todoList = useTodoList();
const todo = todoList.get(Number(id));
const name = ref(todo.name);

const router = useRouter();

function updateTodo() {
    todoList.update(Number(id), name.value);
    router.push("/todolist"); 
}
</script>
<template>
    <div>
        <h1>Update Todo</h1>
        <input type="text" v-model="name" placeholder="Todo Name">
        <button @click="updateTodo">Update</button>
    </div>
</template>
<style scoped>
</style>