import { defineStore } from "pinia"

const useUserStore = defineStore('user', {
    state: () => {
        return {
            name: "gray"
        }
    }
})

export default useUserStore;