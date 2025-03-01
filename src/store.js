import { defineStore } from "pinia";
import { computed, ref } from "vue";

// biasanya penamaan identifier menggunakan useXXX, tetapi tidak wajib
export const useCounter = defineStore("counter", () => {
    const counter = ref(0);

    // make action (untuk manipulasi data di dalam state)
    function increment() {
        counter.value++;
    }

    function reset() {
        counter.value = 0;
    }
    
    const doubled = computed(() => {
        console.info("computed value");
        return counter.value * 2;
    })

    return {
        counter,
        increment, // export methodnya agar bisa dipanggil
        reset,
        doubled,
    };
});