import { createRouter, createWebHistory } from 'vue-router'
import ChatgptView from '@/views/ChatgptView.vue'
import InstructionView from '@/views/InstructionView.vue'
import LandingView from '@/views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Landing',
        component: LandingView
      },
    {
      path: '/chatgpt',
      name: 'ChatgptView',
      component: ChatgptView
    },
    {
        path: '/instructions',
        name: 'instructions',
        component: InstructionView
    },
  ]
})

export default router