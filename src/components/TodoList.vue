<script setup>
import { useTodoList } from '../useTodoList';

const todoList = useTodoList();
</script>
<template>
    <div>
        <h1>Todo List</h1>
        <RouterLink to="/todolist/add">Add</RouterLink>
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in todoList.todos" :key="todo.id">
                    <td>{{ todo.id }}</td>
                    <td>{{ todo.name }}</td>
                    <td>
                        <RouterLink :to="{name: 'todo-update', params: {id : todo.id}}">Update</RouterLink>
                        <button @click="todoList.remove(todo.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
</style>