import { createRouter, createWebHistory } from 'vue-router'
import Products from '../components/Products.vue'
import Home from '../components/Home.vue'
import ProductDetail from '../components/ProductDetail.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
