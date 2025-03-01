<script setup>
import { useCounter } from '../store';

const counterStore = useCounter();

// subscribe on state
counterStore.$subscribe((mutation, state) => {
    console.info(mutation);
    console.info(state);
});

// subscribe on action
counterStore.$onAction((action, state) => {
    console.info(action);
    console.info(state);
});

function handleClick() {
    counterStore.counter++;
}

function handleReset() {
    // dengan method $patch bisa langsung mengubah state lebih dari satau
    // keuntungannya bisa gunakan subscribe state
    counterStore.$patch({
        counter: 0,
        // counter2: 0,
        // counter3: 0,
    });
}

function logDoubled() {
    console.info(counterStore.doubled);
}
</script>
<template>
    <div>
        <h1>Counter {{ counterStore.counter }}</h1>
        <!-- <button @click="handleClick">Increment</button> -->
         <!-- jika gunakan action -->
        <button @click="counterStore.increment()">Increment</button>
        <!-- <button @click="handleReset">Reset</button> -->
         <!-- contoh gunakan action -->
        <button @click="counterStore.reset()">Reset</button>
        <button @click="logDoubled">Log Doubled</button>
    </div>
</template>
<style scoped>
</style>