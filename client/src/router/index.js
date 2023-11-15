import { createRouter, createWebHistory } from "vue-router"
import HomeView from "@/views/HomeView.vue"
import SearchView from "@/views/SearchView.vue"
import ProfileView from "@/views/ProfileView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView
    },
    {
      path: "/search",
      name: "Search",
      component: SearchView
    },
    {
      path: "/profile",
      name: "Profile",
      component: ProfileView
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "Home" }
    }
  ]
})
    
export default router
