import { createRouter, createWebHistory } from "vue-router"
import ListVue from "@/components/beginner/list.vue"
import MainVue from "@/views/main.vue"

export const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            name: "MainVue",
            component: MainVue
        },
        {
            path: "/beginnerList/",
            name: "ListVue",
            component: ListVue
        }
    ]

})
