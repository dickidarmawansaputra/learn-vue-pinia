import { defineStore } from "pinia";
import { ref } from "vue";

// biasanya penamaan identifier menggunakan useXXX, tetapi tidak wajib
export const useCounter = defineStore("counter", () => {
    const counter = ref(0);
    return {
        counter
    };
});