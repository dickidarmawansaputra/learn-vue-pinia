import { defineStore } from "pinia";
import { ref } from "vue";

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
    return {
        counter,
        increment, // export methodnya agar bisa dipanggil
        reset,
    };
});