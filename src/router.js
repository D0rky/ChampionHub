import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
const {isAuthenticated} = useAuth()
import MainPage from '@/components/Main.vue'
import LoginPage from '@/components/LoginPage.vue'
import SettingsPage from '@/components/settingsPage.vue'
import NotFound from '@/components/NotFound.vue'




const routes = [
  { path: '/ChampionHub/', name: 'Home', component: MainPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/settings', name: 'Settings', component: SettingsPage, meta: { requiresAuth: true } },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/api/champions/:id', name: 'champion', component: () => import('@/views/ChampionsPage.vue')},
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/api/Champion/:id', name: 'Details', component: () => import('@/views/ChampionDetails.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router