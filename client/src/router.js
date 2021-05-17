import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Blackboard from './pages/Blackboard'
import News from './pages/News.vue'
import Wiki from './pages/Wiki.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/blackboard', component: Blackboard},
        {path: '/news', component: News},
        {path: '/wiki', component: Wiki}
    ]
})

export default router