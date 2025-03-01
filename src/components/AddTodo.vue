<script setup>
import { ref } from 'vue';
import { useTodoList } from '../useTodoList';
import { useRouter } from 'vue-router';

const name = ref("");
const todoList = useTodoList();
const router = useRouter();

function addTodo() {
  todoList.add(name.value)
  router.push("/todolist")
}
</script>
<template>
    <div>
        <h1>Add Todo</h1>
        <input type="text" v-model="name" placeholder="Todo Name">
        <button @click="addTodo">Add</button>
    </div>
</template>
<style scoped>
</style>